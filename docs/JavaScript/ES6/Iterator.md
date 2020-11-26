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



