# Symbol

唯一值，独一无二的值。
```js
let a = Symbol();
let b = Symbol();
console.log(a === b); // false

```

## 创建Symbol
```js
let firstName = Symbol("firstName");
let person = {};

person[firstName] = "Nicholas";
console.log(person[firstName])

// 注意 如果通过person.firstName = "Nicholas";
// 则是给person中加入一个字符串为 "firstName"的属性

```

## 识别Symbol
```js
let firstName = Symbol("firstName");
console.log(typeof firstName); // "symbol"
```

## 通过 [ ] 添加可计算Symbol属性 或 访问Symbol属性
```js
let firstName = Symbol("firstName");
let person = {
  [firstName]: "Nicholas"
}
```

## 使用Symbol.for(description) 创建全局共享的Symbol
```js
let uid = Symbol.for("uid");
let uid2 = Symbol.for("uid");
console.log(uid === uid2); // true
```

## 枚举Symbol属性
Symbol属性不能被Object.Keys(), Object.getOwnPropertyNames() 枚举 
```js
// 只获取Symbol属性
Object.getOwnPropertySymbols(obj);

// 可以获取可枚举的所有属性，包括Symbol属性
Reflect.ownKeys(obj);
```


## well-known Symbol
暴露语言内部方法

- Symbol.hasInstance() 方法

- Symbol.isConcatSpreadable

- Symbol.iterator 属性

用来定义对象的默认迭代器
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

