```js
/**
 * buffer 是用来处理二进制的
 */

//Buffer上的静态方法
console.log(Buffer.alloc(10));
console.log(Buffer.alloc(5, 1));
console.log(Buffer.allocUnsafe(5, 1));
console.log(Buffer.from([1, 2, 3]));
console.log(Buffer.from('test'));
console.log(Buffer.from('test', 'base64'));

console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('测试'));

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1, 2, 3])));

const buf1 = Buffer.from('a');
const buf2 = Buffer.from('test');
const buf = Buffer.concat([buf1, buf2]);
console.log(buf.toString());

//Buffer的实例方法
const instance = Buffer.from('This is a test!');
console.log(instance.length); //15
console.log(instance.toString()); //默认是UTF-8编码
console.log(instance.toString('base64'));

const instance2 = Buffer.allocUnsafe(10);
console.log(instance2);
console.log(instance2.fill(10, 2, 6));

const buf4 = Buffer.from('test');
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test!');
console.log(buf4.equals(buf5));
console.log(buf4.equals(buf6));

console.log(buf4.indexOf('es'));
console.log(buf4.indexOf('esa'));
```