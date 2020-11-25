```js
/**
 * __dirname, __filename 总是返回文件的绝对路径
 * process.cwd() 总是返回执行node命令所在的文件夹
 */
const path = require('path');

//在 E:\NodeJS\入门>
//下执行 node path/path1.js
console.log('__dirname: ', __dirname);
console.log('__filename: ', __filename);
console.log('process.cwd(): ', process.cwd());
console.log('./: ', path.resolve('./'));
```

