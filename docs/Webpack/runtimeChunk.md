runtimeChunk: 就是入口文件和chunk文件之间的引用关系的文件。
老版本的webpack打包时，即使文件内容没变， 但是contenthash还是改变了。
就是因为runtimeChunk变了。
可以用下面的配置把runtimeChunk提取出来。
```js
optimization: {
  // Keep the runtime chunk separated to enable long term caching
  // https://twitter.com/wSokra/status/969679223278505985
  runtimeChunk: true,
},
```
