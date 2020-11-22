# 函数的this指向

在调用时决定，谁调用指向谁。

如果没有调用对象，相当于在全局环境下执行。在非严格模式下，this为全局对象window或者global。
严格模式下，this为undefined。

## 为什么需要 this.handleClick.bind(this);

```jsx
class MyComponent extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log(this);  
  }

  render(){
    <button onClick={this.handleClick}>click</button>
  } 
}
```
上面相当于

```js
var name = "The Window"; 
var object = { 
 name : "My Object", 
 getNameFunc : function(){ 
  // var that = this; 
  return this.name; 
 } 
}; 
var handleClick = object.getNameFunc();
alert(handleClick()); //"The Window"
```

当一个函数在全局调用时，在非严格模式下，this为全局对象window或者global。严格模式下，this为undefined。

由于ES6的 class 是运行在严格模式下的，所以this为undefined。

## 当函数不作为对象的方法调用时，在非严格模式下，this为全局对象window或者global。严格模式下，this为undefined。

1. foo()
2. var aFoo = obj.foo;
aFoo();
3. (obj.foo = obj.foo)();
4. (false || obj.foo)();
5. (obj.foo, obj.foo)();

## 当函数作为对象的方法调用时，this指向调用对象。
1. obj.foo();

## 使用call, apply, bind改变this指向。

function.call(this, a, b) // 参数列表
function.apply(this, [a, b]) // 参数数组
function.bind(this, a, b) // 参数列表，并返回一个新的函数

## new Constructor, this指向实例对象。

## 箭头函数的 this 为外层第一个不是箭头函数中的 this



