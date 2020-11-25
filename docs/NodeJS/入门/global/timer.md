```js
setImmediate(() => {
  console.log('setImmediate');
});

setTimeout(() => {
  console.log('setTimeout');
});

process.nextTick(() => {
  console.log('nextTick');
});

Promise.resolve().then(() => console.log('Promise'));
// nextTick
// Promise
// setTimeout
// setImmediate
// http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html
// process.nextTick和Promise的回调函数，追加在本轮循环，即同步任务一旦执行完成，就开始执行它们
// 而setTimeout、setInterval、setImmediate的回调函数，追加在次轮循环。
// 由于setTimeout在 timers 阶段执行，而setImmediate在 check 阶段执行。所以，setTimeout会早于setImmediate完成。
```


