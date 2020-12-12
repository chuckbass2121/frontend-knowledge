# 如何打包图片

### file-loader:
1. 移动file到dist
2. 返回生成的文件名
```js
import avatar from './avatar.jpg';
console.log(avatar)
// 输出的是文件名 例如ababafbadf.jpg。可以通过配置options来控制文件名
{
	rules:[{
		test:/\.(jpg|png|gif)$/,
		use:{
			loader: 'file-loader',
			options:{
				name:'[name]_[hash].[ext]',
				outputPath:'images/'
			}
		}
	}]
}
```
[name]是原来的文件名

[hash]是图片的hash值

[ext]是原来的扩展名


### url-loader 与 file-loader的区别

url-loader 在文件大小（单位 byte）小于limit时把图片转成base64格式。
大于limit时跟file-loader一样，返回一个url地址。
   
最佳实践：
在options中配置limit，只把小图片转成base64.
如果图片过大，虽然减少了图片的请求，但是js加载解析图片的时间过长，白屏时间就长。
```js
{
	rules:[{
		test:/\.(jpg|png|gif)/,
		use:{
			loader: 'url-loader',
			options: {
				// 小于 5kb 的图片用 base64 格式产出
				// 否则，依然延用 file-loader 的形式，产出 url 格式
				limit: 5 * 1024,
				name:'[name]_[hash].[ext]',
				outputPath:'images/',
				// 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
				publicPath: 'http://cdn.abc.com'
			},
		}
	}]
}
```


