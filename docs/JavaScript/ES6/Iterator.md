# Iterator 迭代器
>所谓迭代器，其实就是一个具有 next() 方法的对象，每次调用 next() 都会返回一个结果对象，
>该结果对象有两个属性，value 表示当前的值，done 表示遍历是否结束
>Iterator的出现是为了统一遍历的接口。
```js
function createIterator(items) {
    var i = 0;
    return {
        next: function() {
            var done = i >= item.length;
            var value = !done ? items[i++] : undefined;

            return {
                done: done,
                value: value
            };
        }
    };
}

// iterator 就是一个迭代器对象
var iterator = createIterator([1, 2, 3]);

console.log(iterator.next()); // { done: false, value: 1 }
console.log(iterator.next()); // { done: false, value: 2 }
console.log(iterator.next()); // { done: false, value: 3 }
console.log(iterator.next()); // { done: true, value: undefined }
```

## Generator 生成器
>为了简化迭代器的编写。es6引入了 Generator 生成器

1. 生成器函数声明
```js
function *createIterator(items) {
  for(let i = 0; i < items.length; i++) {
    yield items[i];
  }
}
```
2. 生成器函数表达式
```js
let createIterator = function *(items) {
  for(let i = 0; i < items.length; i++) {
    yield items[i];
  }
}
```
3. 作为对象的方法
```js
let obj = {
  createIterator: function *(items) {
   for(let i = 0; i < items.length; i++) {
      yield items[i];
   }
  },
  *createIterator(items) {
   for(let i = 0; i < items.length; i++) {
      yield items[i];
   }
  }
};
```

## 可迭代对象 与 for-of
>只有实现了 Symbol.iterator 的对象才是可迭代对象。
>才能被 for-of 和 ... 遍历。

for-of循环 通过调用可迭代对象的Symbol.iterator 方法获取迭代器。

随后迭代器的next方法被多次调用，其返回对象的value属性被赋值给变量 color.

当done为true时，循环退出。因此不会输出undefined。
```js
const colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}
// red
// green
// blue
```

## 默认迭代器
通过 Symbol.iterator 访问默认迭代器
```js
let values = [1, 2, 3];
let iterator = values[Symbol.iterator];
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

## 创建可迭代对象
默认对象不可迭代，设置 Symbol.iterator属性为Generator函数，使其可迭代。
```js
let collection = {
  *[Symbol.iterator](){
    yield 1;
  }
  // 上面是简写形式
  // [Symbol.iterator]: function* () {
  //  yield 1;
  // }
};

for (let item of collection){
  console.log(item);
}
```

## 内建迭代器
ES6 为数组、Map、Set 集合内建了以下三种迭代器：

1. entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。对于数组，键名就是索引值。
2. keys() 返回一个遍历器对象，用来遍历所有的键名。
3. values() 返回一个遍历器对象，用来遍历所有的键值。

>而且每个集合类型都有一个默认的迭代器，
>在 for-of 循环中，如果没有显式指定则使用默认的迭代器。
>数组和Set集合的默认迭代器是 values() 方法，Map 集合的默认迭代器是 entries() 方法。

```js
let colors = ["red", "green", "blue"];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map([ ["title", "es6"], ["format", "print"] ]);

// 相当于 for(let value of colors.values())
for(let value of colors){ 
 console.log(value);
}

// 相当于 for(let mum of tracking.values())
for(let mum of tracking){ 
 console.log(num);
}

// 相当于 for(let entry of data.entries())
for(let entry of data){ 
 console.log(entry);
}

```

## for-of 遍历字符串
```js
let message = "A 吉 B";
for(let char of message){ 
 console.log(char);
}
// A
// 空
// 吉
// 空
// B
```

## for-of 遍历NodeList
```js
let divs = document.getElementByTagName("div");
for(let div of divs){ 
 console.log(div.id);
}
```

## 使用展开运算符 ... 转换迭代对象为数组。

```js
let set = new Set([1, 2, 3]);
let array = [...set];
console.log(array); // [1, 2, 3]


let map = new Map([ ["title", "es6"], ["format", "print"] ]);
let array = [...map];
console.log(array); // [["title", "es6"], ["format", "print"]]
``` 

## Iterator 高级用法，next传参数
yield表达式本身没有返回值，或者说总是返回undefined。
next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。
V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。
从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。

```js
function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}
var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }

// 调用next，返回第一个yield表达式的值，但是 等号左边的语句并没有执行。
// 等号左边的语句会在下一次调用next执行。
// 上面代码第一次调用b的next方法时，返回x+1的值6；
// 第二次调用next方法，将上一次yield表达式的值设为12，因此y等于24，返回y / 3的值8；
// 第三次调用next方法，将上一次yield表达式的值设为13，因此z等于13，这时x等于5，y等于24，
// 所以return语句的值等于42。
```

### next()、throw()、return() 的共同点
next()、throw()、return()这三个方法本质上是同一件事，可以放在一起理解。
它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。

```js
const g = function* (x, y) {
  let result = yield x + y;
  return result;
};

const gen = g(1, 2);
gen.next(); // Object {value: 3, done: false}

// next()是将yield表达式替换成一个值。
gen.next(1); // Object {value: 1, done: true}
// 相当于将 let result = yield x + y
// 替换成 let result = 1;
// 上面代码中，第二个next(1)方法就相当于将yield表达式替换成一个值1。
// 如果next方法没有参数，就相当于替换成undefined。

// throw()是将yield表达式替换成一个throw语句。
gen.throw(new Error('出错了')); // Uncaught Error: 出错了
// 相当于将 let result = yield x + y
// 替换成 let result = throw(new Error('出错了'));

// return()是将yield表达式替换成一个return语句。
gen.return(2); // Object {value: 2, done: true}
// 相当于将 let result = yield x + y
// 替换成 let result = return 2;
```

建议去看Generator自动执行.md



