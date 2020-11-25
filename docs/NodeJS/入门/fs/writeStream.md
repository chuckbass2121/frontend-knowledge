```js
const fs = require('fs');
const ws = fs.createWriteStream('./testWriteStream');

const tid = setInterval(() => {
  const num = parseInt(Math.random() * 10);
  if (num < 8) {
    ws.write(num + '');
  } else {
    clearInterval(tid);
    ws.end();
  }
}, 200);

ws.on('finish', () => {
  console.log('done');
});
```


