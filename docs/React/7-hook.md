# hook
函数组件中用来代替生命周期的函数。

以下生命周期没有对应的hook。

- getDerivdStateFromProps()
- getSnapShotBeforeUpdate()
- getDerivdStateFromError()
- componentDidCatch()

## 为什么需要 hook

1. 类组件中逻辑复用通常使用需要使用 HOC 或者 render props。
但是  HOC 或者 render props 会增加不必要的DOM节点。

2. 逻辑分散在各个生命周期函数中，比如事件的监听和取消。

3. this指向问题
就是事件的handler中this问题。要么使用bind，要么使用public class field.

# useState()

用来代替 state 和 setState()

```
const [state, setState] = useState(initialState | ()=>{} );
```

**参数**：

useState()可以传入默认值或者一个用来生成默认值的函数。

当传入函数时，这个函数只会执行一次。当默认值计算比较耗时时，建议使用。

**返回值**：

第一个是初始值。

第二个是更新初始值的函数。这个更新函数和this.setState()的参数一样，
可以传值或者函数。

**什么时候使用函数**:
```js
setState(prevState => prevState + 1)
```
1. 当更新state的值依赖上一次的state的值时。
2. 当在setTimeout或在callback中调用setState()时。


# useEffect()

副作用，用来代替 componentDidMount, componentDidUpdate, componentWillUnmount.

```jsx
useEffect(()=>{
  // 清除函数
  return ()=>{}
}, [deps])
```

**参数**：
1. 需要执行的函数()=>{}
2. 重新运行的依赖
   
   - 当不穿依赖时，在每次渲染都会运行。
   - 当传入 []时，只在componentDidMount时运行。
   - 当传入 [a,b,c]时，只在a或者b或者c变化时运行。

3. 如果执行函数中返回清除函数，清除函数会在组件重新渲染或者卸载时运行。 

# Memo api

```Memo(fn)```
只应用于函数组件，用来代替 shouldComponentUpdate()

# useMemo()

```jsx
useMemo(()=>{},[deps])
```
**参数**：
1. 需要执行的函数()=>{}
2. 重新运行的依赖

useMemo() 不是用来代替生命周期函数的。
它的作用是性能优化的。比如优化耗时计算，传递函数给子组件。

# useCallback()
```jsx
useCallback(fn, [deps])
```
等同于
```jsx
useMemo(()=>fn, [deps])
```
都是用来性能优化的。当父组件传递 函数 给子组件时用。

# useRef()
```jsx
const refContainer = useRef(initialValue);
```
**参数**：
initialValue

**返回值**：

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
返回的 ref 对象在组件的整个生命周期内保持不变。

**作用**：
1. 代替只能在类组件中使用的 React.createRef()。
 用来获取DOM元素。
 
2. 用来保存多次渲染不变的变量，相当于实例字段。

不同于state的是，改变ref.current的值不会引起重新渲染。

3. 实现 componentWillReceiveProps。也就是监控props的变化。

```jsx
const prevProps = useRef(currentProps);
if(prevProps !== currentProps){
  prevProps.current = currentProps;
}
```

# useContext()

# useReducer()
和Redux中的reducer一样，不过Redux的reducer控制的是store中的state。
useReducer控制的是组件中的state。

# 自定义hook
1. 可以返回JSX
2. 可以返回 [value, setValue] 等。

# hook 规则
1. 只能在函数组件中使用
2. 只能写在函数组件顶层，不能写在循环，if语句中。
3. 自定义hook要以use开头
4. 使用eslint-plugin-react-hooks检查
```
"eslintConfig": {
    "extends": "react-app",
    "plugins": [
      "react-hooks"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  },
```





