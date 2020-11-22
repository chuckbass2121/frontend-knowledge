publicPath：
会在打包后的js路径前加上publicPath的值

例如打包后的js是 main.js,
结果就会是 \<script src="http://cdn.com.cn/main.js">
```js
output: {
    publicPath: 'http://cdn.com.cn',
    fileName:'[name].[contenthash].js', //在index.html中被直接引用的
    chuckFileName:'[name].[contenthash].chuck.js', // code splitting 出来的文件名，不在index.html中被直接引用的
    path:path.resolve(__dirname,'dist')
}
```






