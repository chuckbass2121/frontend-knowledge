```js
//process对象
const { argv, argv0, execArgv, execPath } = process;

// 执行 node process.js --test a=1 b=2
// 输出以下
// E:\programs\node\node.exe
// E:\NodeJS\入门\global\argv.js
// --test
// a=1
// b=2
// 第一个是node的路径
// 第二是文件的路径
// 后面是执行文件对应的参数
argv.forEach((element) => {
  console.log(element);
});

// 执行 node --inpect process.js
console.log(argv0); // node
console.log(execArgv); // node后文件前的参数，例如执行 node --inpect argv.js。execArgv是[ '--inspect' ]
console.log(execPath); // 启动process的node的路径

const { env } = process;
console.log(env);
```


