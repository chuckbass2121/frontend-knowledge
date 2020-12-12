source-map:
会生成.map文件

inline-source-map：
不会生成.map文件, 但是会在打包的js文件底部加上base64的map字符串

cheap-inline-source-map：
cheap的作用是，报错时，只提示哪一行出错，不会提示那一列。
不会给第三方模块加map

cheap-module-inline-source-map：
module 会给第三方模块加map

eval:
在打包的js中以eval()形式执行，性能最好


### 最佳实践
```js
mode:development,
devtool:'cheap-module-inline-eval-source-map'
```

```js
mode:production,
devtool:'cheap-module-source-map'
```



