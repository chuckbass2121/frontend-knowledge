# JavaScript深入之继承的多种方式和优缺点

## ES5中最优的继承方式： 寄生组合式继承
```js
function Parent (name) {
    this.name = name;
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child (name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = Object.create(Parent.prototype);

var child1 = new Child('kevin', '18');

console.log(child1);
```
原型链示意图为：
![实例与实例原型的关系图](https://github.com/chuckbass2121/frontend-knowledge/raw/master/Images/prototype2.png)
## ES6 Class继承

Class 通过 extends 关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。

以上 ES5 的代码对应到 ES6 就是：
```js
class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); // 调用父类的 constructor(name)
        this.age = age;
    }
}

var child1 = new Child('kevin', '18');

console.log(child1);
```
ES6 的原型链示意图为：
![实例与实例原型的关系图](https://github.com/chuckbass2121/frontend-knowledge/raw/master/Images/prototype2.png)
