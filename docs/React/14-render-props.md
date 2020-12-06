# Render Props

具有 render prop 的组件接受一个返回 React 元素的函数，并在组件内部通过调用此函数来实现自己的渲染逻辑.

```jsx
// 1. 具有公共逻辑的Mouse
class Mouse extends React.Component {
  constructor(props){
    super(props);
    this.state = {x:0,y:0};
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {/* 2. 根据传入的render函数, 来显示不同的内容*/}
        {this.props.render(this.state)}
      </div>
    );
  }
}



const App = (props)=>{
  return (
    <div>
      <Mouse render={
         /* render 是一个函数组件 */
          ({ x, y }) => <h1>The mouse position is ({x}, {y})</h1>
      } 
      />
    </div>
  )
}

export default App;

```