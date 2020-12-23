# react-redux
React Redux is the official React binding for Redux. 
It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

主要就是解决监听store的变化，然后更新组件。

同时可以获取到store中的state，和派发action的能力，也就是dispatch函数。


## 有2个重要的api

1. Provider

就是利用context传递store。

```js
import { Provider } from "react-redux";
<Provider store={store}>
// 被包裹并且connected子组件可以获取store中的 state 和 dispatch函数。
</Provider>
```

2. connect

利用高阶组件，监听store变化，传递state，dispatch给组件。

```js
import { connect } from "react-redux";
```

## 如何使用
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

// 返回一个function，这个function返回一个object
const mapDispatchToProps = (dispatch) => ({
  someAction: dispatch(actionCreator())
})

// 官方推荐的写法
// 返回一个object，每个key都是actionCreator函数
const mapDispatchToProps = ({
    actionCreator
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
```

# connect 的原理
```js
import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';

export const connect = (
    mapStateToProps = state => state,
    mapDispatchToProps = {}
) => WrapComponent => {
    return class ConnectComponent extends React.Component {
        static contextTypes = { store: PropTypes.object };
        constructor(props, context) {
            super(props, context);
            this.state = { props: {} };
        }
        componentDidMount() {
            const { store } = this.context;
            store.subscribe(() => this.update());
            this.update();
        }
        update() {
            const { store } = this.context;
            const stateProps = mapStateToProps(store.getState());
            const dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch);
            this.setState({ props: { ...this.state.props, ...stateProps, ...dispatchProps } });
        }
        render() {
            return <WrapComponent {...this.state.props}></WrapComponent>;
        }
    };
};
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

# Provider的实现原理
```js
import React from 'react'
import PropTypes from 'prop-types'
export class Provider extends React.Component {
    // 需要声明静态属性childContextTypes来指定context对象的属性,是context的固定写法  
    static childContextTypes = {
        store: PropTypes.object
    }

    // 实现getChildContext方法,返回context对象,也是固定写法  
    getChildContext() {
        return { store: this.store }
    }

    constructor(props, context) {
        super(props, context)
        this.store = props.store
    }

    // 渲染被Provider包裹的组件  
    render() {
        return this.props.children
    }
}
```