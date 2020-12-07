# 事件 handler 为何bind this

因为handler相当于是在全局调用的。这时this指向window对象，但是class内部是在严格模式下运行的，
所以this为undefined。

如何绑定this
1. 在constructor中绑定this
2. 箭头函数
3. public class field

```jsx
class myComponent extends React.Component {
  constructor(props) {
    super(props);
    // 1. 在controller中绑定this
    this.handler = this.handler.bind(this);
  }
  
  handler(){
    console.log(this);
  }
  
  // 3. public class field
  // handler = ()=>{
  //  console.log(this);
  // }

  render() {
    <button onClick={this.handler}>button</button>
    // 2. 用箭头函数
    // <button onClick={()=>{this.handler()}>button</button>
  } 
}
```

# 事传参数
1. 通过 bind 的方式，事件对象将会被隐式传递
2. 用箭头函数必须显式的进行传递
3. public class field 隐式 或者 显示
```jsx
class myComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }
  // 1. 通过 bind 的方式，事件对象将会被隐式传递
  handler(event){
    console.log(this);
  }
  
  // 3. public class field 隐式 或者 显示
  // handler = (event, otherParam) => {
  //  console.log(this);
  // }

  render() {
    // 1. 通过 bind 的方式，事件对象以及更多的参数将会被隐式传递
    <button onClick={this.handler}>button</button>
    // 2. 用箭头函数必须显式的进行传递
    // <button onClick={(event)=>{this.handler(event)}>button</button>
    
    // 3. public class field 隐式
    // <button onClick={this.handler}>button</button>
    
    // 3. public class field 显示
    // <button onClick={(event)=>{this.handler(event, otherParam)}>button</button>
  } 
}
```

# React合成事件机制
1. event对象 是 SyntheticEvent ，模拟出来 DOM 事件所有能力
2. event.nativeEvent 是原生事件对象
3. 所有的事件，都被挂载到 document 上

好处：
1. 更好的兼容性和跨平台
2. 挂载在document上，减少内存消耗，避免忘记绑。
![原理之-合成事件机制](23-原理之-合成事件机制.md)