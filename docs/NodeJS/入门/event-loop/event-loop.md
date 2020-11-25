```js
/**
 * nodejs 事件执行顺序。
 *
 * 1. 执行setTimeout的callback
 * 2. 执行IO的callback
 * 3. 执行setImmediate的callback
 *
 * process.nextTick() 和 promise 会在每个阶段前执行。
 *
 *
 */

```


