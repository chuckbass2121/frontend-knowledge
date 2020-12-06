# setState特点
- Do Not Modify State Directly（不可变值）
- State Updates May Be Asynchronous（可能异步更新）
- State Updates are Merged （合并）


## Do Not Modify State Directly（不可变值）
```jsx
// state 初始化
// 在类组件的construct中或者作为public class field 初始化
// 在函数组件中使用useState(initialState) 初始化

// 更新基础值
this.setState({
  counter: this.state.counter + 1
})

// 更新数组
const list5Copy = [...this.state.list5]; // this.state.list5.slice()
list5Copy.splice(2, 0, 'a') // 中间插入/删除
this.setState({
    list1: this.state.list1.concat(100), // 追加
    list2: [...this.state.list2, 100], // 追加
    list3: this.state.list3.slice(0, 3), // 截取
    list4: this.state.list4.filter(item => item > 100), // 筛选
    list5: list5Copy // 其他操作
})
// 注意，不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值

// 更新对象
this.setState({
    obj1: Object.assign({}, this.state.obj1, {a: 100}),
    obj2: {...this.state.obj2, a: 100}
})
// 注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值

```

## State Updates May Be Asynchronous（可能异步更新）
1. 直接调用this.setState({}), 再去访问this.state 拿不到更新后的state

解决办法：传入函数 this.setState( (prevState, prevProps) => stateChange) )

2. setTimeout中， setState 是同步的
3. 原生DOM事件中，setState 是同步的

```jsx
class StateDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        return <div>
            <p>{this.state.count}</p>
            <button onClick={this.increase}>累加</button>
        </div>
    }
    increase = () => {
        // setState 可能是异步更新（有可能是同步更新） ----------------------------
        
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('count by callback', this.state.count) // 回调函数中可以拿到最新的 state
        })
        console.log('count', this.state.count) // 异步的，拿不到最新值

        // // setTimeout 中 setState 是同步的
        // setTimeout(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        //     console.log('count in setTimeout', this.state.count)
        // }, 0)

        // 自己定义的 DOM 事件，setState 是同步的。再 componentDidMount 中

        // 第四，state 异步更新的话，更新前会被合并 ----------------------------
        
        // // 传入对象，会被合并（类似 Object.assign ）。执行结果只一次 +1
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
        
        // 传入函数，不会被合并。执行结果是 +3
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        })
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        })
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    // bodyClickHandler = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     console.log('count in body event', this.state.count)
    // }
    // componentDidMount() {
    //     // 自己定义的 DOM 事件，setState 是同步的
    //     document.body.addEventListener('click', this.bodyClickHandler)
    // }
    // componentWillUnmount() {
    //     // 及时销毁自定义 DOM 事件
    //     document.body.removeEventListener('click', this.bodyClickHandler)
    //     // clearTimeout
    // }
}
```

2. 更新 state
更新state的值时不能直接操作state，需要调用setState() 或者 useState()返回的更新函数。

3. setState(updater, [callback]);
updater 可以是 object，也可以是 (state, props) => stateChange

由于state，props的更新可能是异步的，使用(state, props) => stateChange
可以确保拿到之前更新好的state，props。



