# 为什么 componentDidMount() 里直接调用 setState()它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 render() 两次调用的情况下，用户也不会看到中间状态。

https://zhuanlan.zhihu.com/p/39512941