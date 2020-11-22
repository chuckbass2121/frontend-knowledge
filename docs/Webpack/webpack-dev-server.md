devServer的作用就是给打包好的文件提供一个server，方便调试ajax请求。
直接打开index.html是file://协议，ajax请求会跨域。
文件改动时，自动build和刷新浏览器。

```js
devServer:{
	conentBase:'./dist',
	open:true
	proxy:{
		'/api': 'http://localhost:3000'
	}
}
```



