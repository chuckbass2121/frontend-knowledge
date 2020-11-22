# 如何打包css

**css-loader:**
1. 合并css文件，处理 @import 和 url()语句
2. 生成js形式

**style-loader:**
把 css-loader生成的结果插入到 style标签中
```js
import './avatar.css';

rules:[
  {
    test:/\.css$/,
    use:['style-loader', 'css-loader']
  }
]
```

**sass-loader:** 把sass转成css
```js
import './avatar.scss';
rules:[
  {
    test:/\.scss$/,
    use:['style-loader', 'css-loader', 'sass-loader'] 
  }
]
```

**postcss-loader**:
1. 给css加前缀
2. 使用最新的css语法

需要postcss.config.js
```js
module.exports = {
 plugins:[
  require('autoprefix')
 ]
}
```
由于postcss-loader 只能处理css，因此Use it after css-loader and style-loader, but before other preprocessor loaders like e.g sass|less|stylus-loader

```js
import './avatar.scss';
rules: [
 {
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
 },
];
```







