```js
module.exports.test = 'B';

const modA = require('./modA');
console.log('modeB: ', modA.test);

module.exports.test = 'BB';
```

