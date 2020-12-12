1. analyse：
分析打包依赖，时间等。

2. prefetching：
当浏览器加载完主要的js,css后，网络空闲时，加载 './click.js'

```js
import(/* webpackPrefetch:true */ './click.js').then(({default: func})=>{
	func();
})
```

3. preloading：
'./click.js' 会和主要的js,css一起加载。
```js
import(/* webpackPreload:true */ './click.js').then(({default: func})=>{
	func();
})
```

为什么会有prefetching和preloading
是因为lazy-loading的时候，是按需加载的，让用户点击时才去加载。
有可能不是那么流畅，这时候可以使用prefetching和preloading来提前加载。
提升速度。
