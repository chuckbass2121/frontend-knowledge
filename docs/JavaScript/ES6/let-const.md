es6引入了块级作用域。一般是用大括号包裹 `{ }`

es5之前只有
全局作用域， 函数作用域，
 
let const 
1. 都是块级作用域中有效
2. 必须 先声明 在使用。
3. 不存声明提升
4. 全局作用域中 用let，const声明的变量不会加在window对象上。
   但是var会。

#### let
1. 可以重新赋值


#### const
1. 声明时必须赋值
2. 不能重新赋值

#### var
用var声明的变量，会被提升到当前作用域的顶部。