PWA：就是当服务器down了时候，依然可以访问网站。
当然，访问的是缓存的js，css等。

在webpack中使用workbox-webpack-plugin：来生成service-worker.js 和 precache-manifest.js
来实现PWA应用。
```js
plugins: [
    new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
    })
],
```
