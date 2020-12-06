JSX 就是 createElement(type, config, children)语法糖，
返回一个react element 对象。

```jsx
<div id="1">hello</div>
// 相当于
React.createElement("div", {
  id: "1"
}, "hello");

// 返回的 ReactElement对象
const ReactElement = function(type, key, ref, self, source, owner, props) {
  const element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner,
  };


  return element;
};
```

1. type 可以是 DOM 标签（小写） 或者 组件（必须大写）

```js
class AppClass extends React.Component {
  render() {
    return <p>ClassComponent</p>
  }
}
console.log('这是ClassComponent：', AppClass);
console.log('这是Element：', <AppClass/>);


function AppFunc() {
  return <p>FunctionComponent</p>;
}
console.log('这是FunctionComponent：', AppFunc);
console.log('这是Element：', <AppFunc/>);
```

```js
// "这是ClassComponent："
class AppClass extends React.Component {
render() {
  return React.createElement("p", null, "ClassComponent")
}
}
// "这是Element："
[object Object] {
  $$typeof: [object Symbol] { ... },
  _owner: null,
  _store: [object Object] { ... },
  key: null,
  props: [object Object] { ... },
  ref: null,
  type: class AppClass extends React.Component {
    render() {
      return React.createElement("p", null, "ClassComponent")
    }
  }
}
// "这是FunctionComponent："
function AppFunc() {
return React.createElement("p", null, "FunctionComponent");
}
// "这是Element："
[object Object] {
  $$typeof: [object Symbol] { ... },
  _owner: null,
  _store: [object Object] { ... },
  key: null,
  props: [object Object] { ... },
  ref: null,
  type: function AppFunc() {
    return React.createElement("p", null, "FunctionComponent");
  }
}
```

[原文](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)


