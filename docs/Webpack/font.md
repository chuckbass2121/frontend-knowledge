使用file-loader打包字体文件
就是把字体文件移动到dist下

```js
rules:[
	{
		test:/\.(eot|ttf|svg)$/,
		use:[
			{
				loader:'file-loader',
			},
		]
	}
}]
```






