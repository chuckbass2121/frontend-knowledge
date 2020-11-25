```js
/**
 * 中文乱码
 * 3个字节表示一个中文
 */
const buf = Buffer.from('中文字符串');

for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buf.copy(b, 0, i); //把buf里面的内容copy到b里

  console.log(b.toString());
}

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
for (let i = 0; i < buf.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buf.copy(b, 0, i);

  console.log(decoder.write(b));
}
```
