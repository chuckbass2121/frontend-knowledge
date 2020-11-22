HotModuleReplacementPlugin
作用就是不需要刷新浏览器，就可以看到改动。
```js
devServer:{
	conentBase:'./dist',
	open:true
	proxy:{
		'/api': 'http://localhost:3000'
	}，
	
	//开启HMR
	hot:true,
	hotOnly:true // HMR失效时，不需要刷新页面
}

//开启HMR
plugins:[
	new webpack.HotModuleReplacementPlugin()

]
```

1. css文件不需要额外配置
css文件改动时，页面不刷新，但是自动生效。
因为css-loader中做了module.hot.accept

2. js文件需要额外配置

因为当开启HMR时浏览器不会刷新，所以需要强制执行
改动的文件。
```js
// 当开启HMR，并且number.js文件改动时，只执行number文件
// 其他文件不会执行。
if(module.hot){
	module.hot.accept('./number', ()=>{
		number();
	});
}
```




