shimming:
通过webpack.ProvidePlugin来实现。
当一些第三方模块依赖某些模块但是并没有引用时。
可以通过webpack.ProvidePlugin来提供。


```js
var webpack = require('webpack')

plugins:[
	new webpack.ProvidePlugin({
		$: 'jquery',
		_: 'lodash'
	})
]
```

当第三方模块中引用 $，_ 时，webpack会第三方模块中自动加上
import $ from 'jquery';
import _ from 'lodash';


改变this指向
在模块中this默认指向这模块，可以使用imports-loader?this=>window
改变this指向window
```js
rules:[
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: [{
			loader: 'babel-loader'
		},{
			loader: 'imports-loader?this=>window'
		}]
		
	}
]
```

