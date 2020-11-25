```js
/**
 * normilaze根据平台的不同把路径规范化
 * 不用手动去掉多余的 / 和 路径查找 ..
 */
const { normalize } = require('path');
console.log(normalize('usr//local/bin')); //usr\local\bin
console.log(normalize('usr/local/../bin')); //usr\bin
console.log('----------------------');

/**
 * join内部使用了normalize
 * 作用是拼接成一个符合平台规范的路径
 */
const { join } = require('path');
console.log(join('usr', '//local', 'bin')); //usr\local\bin
console.log(join('usr', 'local', '../bin')); //usr\bin
console.log('----------------------');

/**
 * 把一个相对路径解析成绝对路径
 */
const { resolve } = require('path');
console.log(resolve('./'));
console.log('----------------------');

/**
 * basename: 文件名
 * dirname： 文件夹路径
 * extname：拓展名
 */
const { basename, dirname, extname } = require('path');
const filePath = '/usr/local/bin/no.txt';
console.log(basename(filePath));
console.log(dirname(filePath));
console.log(extname(filePath));
console.log('----------------------');

/**
 * parse: 解析路径为一个对象
 * format：作相反的操作
 */
const { parse, format } = require('path');
const filePath1 = '/usr/local/node_modules/n/package.json';
const ret = parse(filePath1);
console.log(ret);
console.log(format(ret));
console.log('----------------------');

/**
 * sep: 当前平台的路径中的分隔符
 * delimiter: 当前平台的路径之间分隔符。 例如: 环境变量中用;来分割多个路径
 * win32: window平台
 * posix: posix平台
 */
const { sep, delimiter, win32, posix } = require('path');
console.log('sep: ', sep);
console.log('posix sep: ', posix.sep);
console.log('delimiter: ', delimiter);
console.log('posix delimiter: ', posix.delimiter);
```


