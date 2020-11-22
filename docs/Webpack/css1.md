# css-loader 的配置项
```js
import './index.css';

//index.css
@import avatar.scss

//avatar.scss
.test {
  color:red
}

rules:[
	{
		test:/\.css$/,
		use:[
			'style-loader', 
			{
				loader:'css-loader',
				options:{
					importloaders：1
				}
			},
			'sass-loader'
		]
	}
]

options:
	{
		importloaders：1
	}
```

	
importloaders 的作用是保证在css文件中所有使用@import的文件都要
先去执行前面一个loader，也就是sass-loader。

如果是importloaders：2，就是先执行前面两个loader







