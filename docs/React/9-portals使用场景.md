# Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

```jsx
ReactDOM.createPortal(child, container)
```
**参数：**
第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。

第二个参数（container）是一个 DOM 元素。

**使用场景**
一个 portal 的典型用例是当父组件有 overflow: hidden 或 z-index 样式时，
但你需要子组件能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框：


```jsx
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        // // 正常渲染
        // return <div className="modal">
        //     {this.props.children} {/* vue slot */}
        // </div>

        // 使用 Portals 渲染到 body 上。
        return ReactDOM.createPortal(
            <div className="modal">{this.props.children}</div>,
            document.body // DOM 节点
        )
    }
}
```