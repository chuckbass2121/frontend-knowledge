```js
const EventEmitter = require('events');
class CustomEvent extends EventEmitter {}

const ce = new CustomEvent();

ce.on('test', () => {
  console.log('this is a test');
});
ce.emit('test');

//触发事件时可以传入参数
const ce2 = new CustomEvent();

ce2.on('error', (err, time) => {
  console.log(err);
  console.log(time);
});

ce2.emit('error', new Error('oops'), Date.now());

//只触发一次
const ce3 = new CustomEvent();

ce3.once('testOnce', () => {
  console.log('test once');
});

setInterval(() => {
  ce3.emit('testOnce');
}, 500);

//移除事件处理函数
function fn1() {
  console.log('fn1');
}
function fn2() {
  console.log('fn2');
}

const ce4 = new CustomEvent();
ce4.on('testRemove', fn1);
ce4.on('testRemove', fn2);

setInterval(() => {
  ce4.emit('testRemove');
}, 500);

setTimeout(() => {
  //移除 单个事件处理函数
  ce4.removeListener('testRemove', fn2);
  //移除 所有事件处理函数
  //   ce.removeAllListeners('testRemove');
}, 1500);
```


