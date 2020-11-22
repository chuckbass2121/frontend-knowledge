# 如何打包图片

### file-loader:
1. 移动file到dist
2. 返回生成的文件名
```js
import avatar from './avatar.jpg';
console.log(avatar)
// 输出的是文件名 例如ababafbadf.jpg。可以通过配置options来控制文件名

rules:[{
	test:/\.(jpg|png|gif)$/,
	use:{
		loader： 'file-loader',
		options：{
			name:'[name]_[hash].[ext]'，
			outputPath：'images/'
		},
	}
}]

[name]是原来的文件名
[hash]是图片的hash值
[ext]是原来的土扩展名
```

### url-loader 与 file-loader的区别

1. 默认是把图片转成 base64的，并打包到js文件中。
如果图片过大，虽然减少了图片的请求，但是js加载的时间过长，
白屏时间就长。

最佳实践：
在options中配置limit，只把小图片转成base64.
rules:[{
	test:/\.(jpg|png|gif)/,
	use:{
		loader： 'url-loader',
		options：{
			name:'[name]_[hash].[ext]',
			outputPath：'images/',
			limit:10240
		},
	}
}]

