1. webpack.dev.js
```js
var merge = require('webpack-merge');
var devConfig = {
	mode:'development'
}
module.exports = merge(commonConfig, devConfig)
```
2. webpack.prod.js
```js
var merge = require('webpack-merge');
var prodConfig = {
	mode:'production'
}
module.exports = merge(commonConfig, prodConfig)
```