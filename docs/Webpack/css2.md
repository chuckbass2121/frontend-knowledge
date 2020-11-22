# css module
```js
//import from './index.scss' 样式会应用的到全局

import style from './index.scss' //局部样式

rules:[
	{
		test:/\.css$/,
		use:[
			'style-loader', 
			{
				loader:'css-loader',
				options:{
					importloaders：1,
					modules:true // 开启css module
				}
			},
			'sass-loader'
		]
	}
}]
```






