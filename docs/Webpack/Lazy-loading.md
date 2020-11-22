懒加载 按需加载

在做路由时，只有进入到某个路由时才去加载对应的js。
提高首页加载速度。
```js
const RecommendComponent = lazy(() => import("../application/Recommend/"));
const SingersComponent = lazy(() => import("../application/Singers/"));
```
