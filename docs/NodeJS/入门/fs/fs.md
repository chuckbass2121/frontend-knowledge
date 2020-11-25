```js
const fs = require('fs');
/**
 * 异步读文件
 * 不指定utf8的话， 读出的内容是buffer
 */
fs.readFile('./test.js', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

/**
 * 同步读文件
 * 不指定utf8的话， 读出的内容是buffer
 */
const data = fs.readFileSync('./test.js', 'utf8');
console.log(data);

/**
 * 异步写文件
 */
fs.writeFile('./test1', 'this is a test', { encoding: 'utf8' }, (err) => {
  if (err) {
    throw err;
  }
  console.log('done');
});

const buf = Buffer.from('this is a test');
fs.writeFile('./test2', buf, (err) => {
  if (err) {
    throw err;
  }
  console.log('done');
});
/**
 * 读文件夹里面的内容
 */
fs.readdir('./', (err, files) => {
  if (err) {
    throw err;
  }
  console.log(files); //[ 'fs.js', 'test.js', 'test1', 'test2' ]
});

fs.watch('./', { recursive: true }, (eventType, filename) => {
  console.log(eventType, filename);
});
```

