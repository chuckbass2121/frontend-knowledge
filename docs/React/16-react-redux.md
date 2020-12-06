# react-redux
React Redux is the official React binding for Redux. 
It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

```jsx
const App = (props)=>{
  const { someProp, someAction } = props;
  
  return (
    <div>
      {someProp}
      <button onClick={someAction}>click</button>
    </div>
  );
}

const mapStateToProps = (state)=> ({
  someProp: state.someProp
})

const mapDispatchToProps = (dispatch) => ({
  someAction: dispatch(actionCreator())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

connect： 
1. 自动订阅store。
2. 返回一个高阶组件。
3. 什么时候被包裹的组件 re-render

|  表头   | (state) => stateProps  | (state, ownProps) => stateProps |
|  ----  | ----  |----  |
| mapStateToProps runs when:  | store state changes | store state changes or any field of ownProps is different  |
| component re-renders when:  | any field of stateProps is different | any field of stateProps is different or any field of ownProps is different |

4. 使用reselect 缓存 mapStateToProps的结果。