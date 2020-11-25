```js
const fs = require('fs');
/**
 * stream 流
 * readFile 是直接读到内存中。接好一桶水，直接放到内存。
 * createReadStream 是以流的形式，可以想象用水管来接水。
 */
const rs = fs.createReadStream('./test.js');
rs.pipe(process.stdout);
```

