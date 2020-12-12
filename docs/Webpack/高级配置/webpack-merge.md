1. webpack.dev.js

```js
var merge = require('docs/Webpack/高级配置/webpack-merge');
var devConfig = {
    mode: 'development'
}
module.exports = merge(commonConfig, devConfig)
```
2. webpack.prod.js

```js
var merge = require('docs/Webpack/高级配置/webpack-merge');
var prodConfig = {
    mode: 'production'
}
module.exports = merge(commonConfig, prodConfig)
```