## 使用 Generator 函数，执行一个异步任务（thunk函数 或者 promise）。

### 当异步任务为thunk 函数时。

thunk 函数就是一个函数返回另一个函数，延迟执行而已。

任何函数，只要参数有回调函数，就能写成 Thunk 函数的形式。下面是一个简单的 Thunk 函数转换器。
```js
// ES5版本
var Thunk = function(fn){
  return function (){
    var args = Array.prototype.slice.call(arguments);
    return function (callback){
      args.push(callback);
      return fn.apply(this, args);
    }
  };
};

// ES6版本
const Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  };
};
// 使用上面的转换器，生成fs.readFile的 Thunk 函数。
var readFileThunk = Thunk(fs.readFile);
readFileThunk(fileA)(callback);
```

```js
var fs = require('fs');
var thunkify = require('thunkify');
var readFileThunk = thunkify(fs.readFile);

var gen = function* (){
  // readFileThunk 返回的 fs.readFile，
  var r1 = yield readFileThunk('/etc/fstab');
  console.log(r1.toString());
  var r2 = yield readFileThunk('/etc/shells');
  console.log(r2.toString());
};


// 手动执行
var g = gen();
var r1 = g.next();

// r1.value 为函数，接收一个callback
r1.value(function (err, data) {
  if (err) throw err;
  var r2 = g.next(data);
  r2.value(function (err, data) {
    if (err) throw err;
    g.next(data);
  });
});

// 自动执行
// 定义自动执行器 run
function run(fn) {
  var gen = fn();

  function next(err, data) {
    if(err){
      gen.throw(err);
      return;
    }
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

run(gen);
```

### 当异步任务为 promise 时。

```js
var readFilePromise = require('fs-readfile-promise');

var gen = function* (){
  // readFilePromise 返回的 promise
  var r1 = yield readFilePromise('/etc/fstab');
  console.log(r1.toString());
  var r2 = yield readFilePromise('/etc/shells');
  console.log(r2.toString());
};
// 手动执行
var g = gen();
var result = g.next();

// result的value 为 Promise对象 {value: Promise, done: false}
result.value.then(function(data){
  g.next(data);
}).then(function(data) {
  g.next(data);
});

// 自动执行
function run(gen) {
    var g = gen();

    function next(data) {
        var result = g.next(data);

        if (result.done) return;

        result.value.then(function(data) {
            next(data);
        });
    }

    next();
}

run(gen);
```

在两种方法中，我们各写了一个 run 启动器函数，那我们能不能将这两种方式结合在一些，写一个通用的 run 函数呢？
```js
function run(gen) {
    var gen = gen();

    return new Promise(function(resolve, reject) {

        function next(data) {
            try {
                var result = gen.next(data);
            } catch (e) {
                return reject(e);
            }

            if (result.done) {
                return resolve(result.value)
            };

            var value = toPromise(result.value);

            value.then(function(data) {
                next(data);
            }, function(e) {
                reject(e)
            });
        }

        next()
    })

}

function isPromise(obj) {
    return 'function' == typeof obj.then;
}

function toPromise(obj) {
    if (isPromise(obj)) return obj;
    if ('function' == typeof obj) return thunkToPromise(obj);
    return obj;
}

function thunkToPromise(fn) {
    return new Promise(function(resolve, reject) {
        fn(function(err, res) {
            if (err) return reject(err);
            resolve(res);
        });
    });
}

module.exports = run;
```


co 模块的原理
为什么 co 可以自动执行 Generator 函数？

前面说过，Generator 就是一个异步操作的容器。
它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权。

两种方法可以做到这一点。

（1）回调函数。将异步操作包装成 Thunk 函数，在回调函数里面交回执行权。

（2）Promise 对象。将异步操作包装成 Promise 对象，用then方法交回执行权。

co 模块其实就是将两种自动执行器（Thunk 函数和 Promise 对象），包装成一个模块。
使用 co 的前提条件是，Generator 函数的yield命令后面，只能是 Thunk 函数或 Promise 对象。
如果数组或对象的成员，全部都是 Promise 对象，也可以使用 co，详见后文的例子。


## 模拟 async await
- async await = generator + run 
- async/await自带执行器，不需要手动调用next()就能自动执行下一步
- async函数返回值是Promise对象，而Generator返回的是生成器对象
- await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。

```js
function run(gen) {
  //把返回值包装成promise
  return new Promise((resolve, reject) => {
    var g = gen()

    function _next(val) {
      //错误处理
      try {
        var res = g.next(val) 
      } catch(err) {
        return reject(err); 
      }
      if(res.done) {
        return resolve(res.value);
      }
      //res.value包装为promise，以兼容yield后面跟基本类型的情况
      Promise.resolve(res.value).then(
        val => {
          _next(val);
        }, 
        err => {
          //抛出错误
          g.throw(err)
        });
    }
    _next();
  });
}

```
