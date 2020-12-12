# code splitting
拆分 业务代码 和 第三方库。当业务代码改变时，只需要加载业务代码。

webpack 中有2中方式做code splitting. 底层都是用splitChunksPlugin

1. 同步代码
import _ from 'loadsh'


2. 异步代码
需要 @babel/plugin-syntax-dynamic-import
```js
import(/* webpackChunkName:"loadsh" */ 'loadsh').then(({default: _})=>{
	_.join();
})

plugins:[
	"@babel/plugin-syntax-dynamic-import"
]

/* webpackChunkName:"loadsh" */ 魔法注释，就是给split出来的文件起个名
```

3. optimization 中的splitChunks配置项会对同步或者异步code splitting起作用
```js
optimization：{
	splitChunks: {
		// all：对同步和异步代码都做代码分割
		// 'async':只对异步代码做分割
		// 'initial':只对同步代码做分割
		chucks: 'all'，
		// 大于minSize时才做分割
		minSize: 30000,
		// 被分割出来的文件大于maxSize时会继续分割
		maxSize: 50000,
		// 至少被引用1次时才做分割
		minChucks: 1，
		// 超过分割5个后就不会再分割
		maxAsyncRequests: 5,
		// 入口文件中最多分割出3个
		maxinitialRequests: 3，
		// split出来的文件和cacheGroups name之间的连接符 vendors ~ mian.js
		automaticNameDelimiter: '~',
		// The name of the split chunk.
		// Providing true will automatically generate a name
		// based on chunks and cache group key.
		name:true,
		// 分割同步代码时生效，指定分割出来的文件放到哪个组里
		cacheGroups: {
			vendors: {
                // 如果是从node_modules中引入的
				test: [[\\/]node_modules[\\/]],
                // 被分割的文件如果同时满足 vendors和default组，哪个priority大，放哪个组里。
				priority: -10, 
                // split 出来的文件名默认是 vendors ~ mian.js，可以通过fileName改变				
                fileName: 'vendors.js'
			},
			default: {
				priority: -20,
				reuseExistingChunk: true,
				fileName: 'common.js	
			}
		}
	}
}
```
