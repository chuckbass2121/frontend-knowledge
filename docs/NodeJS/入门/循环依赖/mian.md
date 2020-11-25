```js
const modA = require('./modA');
const modB = require('./modB');

console.log(modA.test);
console.log(modB.test);

// modeB:  A
// modeA:  BB
// AA
// BB

// Commonjs循环依赖执行流程。
// require 加载一个模块时，会执行被加载模块,第二次require同一个模块时，会从缓存读取
// 1.modA 先执行，其对外输出值为A
// 2.modB 执行，由于其require modA，而这时modA并未完全执行完，所以modB只能拿到modA的当前输出值A
// 打印modeB:  A， 并全部执行完，对外输出BB
// 3. modA中modB全部加载完， 打印 modeA:  BB，并全部执行完，对外输出AA
// 4. 这时modA， modB都已经全部加载执行完。
// 所以打印为 AA BB
```


