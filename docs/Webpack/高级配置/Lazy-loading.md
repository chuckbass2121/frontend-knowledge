懒加载 按需加载 通常配合路由使用。

在做路由时，只有进入到某个路由时才去加载对应的js。
提高首页加载速度。
```js
const RecommendComponent = lazy(() => import(/* webpackChunkName:"Recommend" */ "../application/Recommend/"));
const SingersComponent = lazy(() => import(/* webpackChunkName:"Singers" */ "../application/Singers/"));
```

webpack 会生成2个单独的文件 Recommend.js 和 Singers.js

