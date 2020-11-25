```js
module.exports.test = 'A';

const modB = require('./modB');
console.log('modeA: ', modB.test);

module.exports.test = 'AA';
```

