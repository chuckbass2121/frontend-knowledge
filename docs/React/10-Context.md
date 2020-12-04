# Context 
>提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。

使用场景：语言，主题

```jsx
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light');
class App extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// 类组件中消费
class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}

// 函数组件中消费1
function ThemedButton(props) {
  const contextType = useContext(ThemeContext);
  return (
    <Button theme={contextType} />
  );
}

// 函数组件中消费2
function ThemedButton(props) {
  const contextType = useContext(ThemeContext);
  return (
    <ThemeContext.Consumer>
       { value => <p>link's theme is {value}</p> }
    </ThemeContext.Consumer>
  );
}
```

# API 
## React.createContext
```jsx
const MyContext = React.createContext(defaultValue);
```
只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
这有助于在不使用 Provider 包装组件的情况下对组件进行测试。

## Context.Provider
```jsx
<MyContext.Provider value={/* 某个值 */}>
```
## Context.Consumer
```
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```