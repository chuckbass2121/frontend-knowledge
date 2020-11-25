```js
// 一个commonsjs模块，由 module.exports 对外提供输出。
// exports 默认指向 module.exports，即 exports = module.exports
// 所以不能给exports赋值成对象
// 例如： exports = {a：1}
// 这样改变了exports的指向，对外输出就变成了undefined
// 可以改成module.exports = {a：1}
```


