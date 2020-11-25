```js
const fs = require('fs');
/**
 * 解决回调地狱
 */
const promisify = require('util').promisify;

const read = promisify(fs.readFile);

// read('./test.js')
//   .then((data) => {
//     console.log(data.toString());
//   })
//   .catch((ex) => {
//     console.log(ex);
//   });

async function asyncRead() {
  try {
    const content = await read('./test.js');
    console.log(content.toString());
  } catch (error) {
    console.log(error);
  }
}

asyncRead();
```


