(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{282:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"设计-es6-中-class-实现私有属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计-es6-中-class-实现私有属性"}},[s._v("#")]),s._v(" 设计 ES6 中 class 实现私有属性")]),s._v(" "),a("h2",{attrs:{id:"为什么会出现-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现-class"}},[s._v("#")]),s._v(" 为什么会出现 class")]),s._v(" "),a("p",[s._v("其实学过其他面向对象语言的人应该对 class 非常熟悉，那为什么 js 里面要引入 class 呢？")]),s._v(" "),a("p",[s._v("在 ES6 之前，虽然 JS 和其他面向对象语言一样都是 OOP（面向对象），但是在 JS 中只有对象而没有类的概念。")]),s._v(" "),a("p",[s._v("ES6 中 class 的出现拉近了 JS 和传统 OOP 语言的距离，但是它仅仅是一个 "),a("strong",[s._v("语法糖")]),s._v(" ，不能实现传统 OOP 语言一样的功能，这其中一个比较大的痛点就是私有属性问题。")]),s._v(" "),a("h3",{attrs:{id:"何为私有属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何为私有属性"}},[s._v("#")]),s._v(" 何为私有属性？")]),s._v(" "),a("p",[s._v("私有属性是面向对象编程（OOP）中一个非常常见的特性，一般满足以下特点：")]),s._v(" "),a("ul",[a("li",[s._v("能被 class 内部的不同方法访问，但不能在 class 外部访问；")]),s._v(" "),a("li",[s._v("子类不能继承父类的私有属性。")])]),s._v(" "),a("p",[s._v("在 Java 中，可以使用 private 实现私有变量，但可惜 JS 中并未实现该功能。")]),s._v(" "),a("h2",{attrs:{id:"私有属性提案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#私有属性提案"}},[s._v("#")]),s._v(" 私有属性提案")]),s._v(" "),a("p",[s._v("2015 年 6 月，ES6 发布成为标准，为了纪念这个历史性时刻，这个标准又被称为 ES2015。至此，JavaScript 的 class 从备胎转正，但是还是没有解决私有属性的问题，产生了一个新的提案 -- 在属性前加 "),a("code",[s._v("#")]),s._v(" 用于表示私有属性。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  #a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义私有属性")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("construtor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("#a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("上述代码私有属性的声明需要先经过 Babel 编译之后才能正常使用。")])]),s._v(" "),a("p",[s._v("至于为什么不用 private 关键字？参考大佬说法是 ES6 之后，JS 逐步开始朝 Python 靠拢。")]),s._v(" "),a("h2",{attrs:{id:"如何设计私有属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设计私有属性"}},[s._v("#")]),s._v(" 如何设计私有属性")]),s._v(" "),a("p",[s._v("上文我们介绍了 class 出现的原因以及它没有解决私有属性这个问题，那么我们尝试自己来解决一下。")]),s._v(" "),a("h3",{attrs:{id:"约定命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#约定命名"}},[s._v("#")]),s._v(" 约定命名")]),s._v(" "),a("p",[s._v("目前使用最广泛的方式： "),a("strong",[s._v("约定命名")]),s._v(" 。通常在变量前加一个下划线，以此来表示这个变量是一个私有变量，这样只需要大家都遵循规范，就可以假装实现了私有属性。")]),s._v(" "),a("p",[s._v("这种方式实现最简单，也最快速，但是约定就需要人来遵守，并没有从根本上解决问题。")]),s._v(" "),a("h3",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[s._v("#")]),s._v(" 闭包")]),s._v(" "),a("p",[s._v("闭包的一个好处就是可以保护内部属性，做法就是将属性定义在构造器作用域内：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("construtor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" _x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("getX")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" _x\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("优点在于实现简单，同时代码可读性高。但是问题在于，代码看起来过于臃肿，一旦属性增多，维护起来难度加大，同时定义在构造器中的私有属性在 class 内部也变得无法访问了。")]),s._v(" "),a("h3",{attrs:{id:"进阶版闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进阶版闭包"}},[s._v("#")]),s._v(" 进阶版闭包")]),s._v(" "),a("p",[s._v("可以通过 IIFE（立即执行函数）建立一个闭包，在其中建立一个变量以及 class，通过 class 引用变量实现私有变量。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Class "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" _x\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InnerClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("construtor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      _x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" _x\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" InnerClass\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("这种方式就有点 "),a("strong",[s._v("模块化")]),s._v(" 思想了。")]),s._v(" "),a("h3",{attrs:{id:"闭包产生的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包产生的问题"}},[s._v("#")]),s._v(" 闭包产生的问题")]),s._v(" "),a("p",[s._v("上述利用闭包生成的私有属性的最大的问题便是会引发变量共享，虽然生成了不同的几个实例，但是他们操作的都是同一个属性，这显然是不可取的。")]),s._v(" "),a("h3",{attrs:{id:"symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[s._v("#")]),s._v(" Symbol")]),s._v(" "),a("p",[s._v("利用 Symbol 变量可以作为对象 key 的特点，我们可以模拟实现更加真实的私有属性。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" _x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("construtor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// b.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Class "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./a.js'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" demo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("因为对象要使用 "),a("code",[s._v(".")]),s._v(" 语法，它对应的 key 必须是字符串，而 Symbol 作为 key 则必须使用 "),a("code",[s._v("[]")]),s._v(" 语法，但是我们在导出类的时候并没有导出对应的 symbol 变量，因此一定程度上可以算作是一个私有变量。")]),s._v(" "),a("p",[s._v("当然这也不是毫无破绽的：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getOwnPropertySymbols")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("ES6 中新增的 API 可以获取 symbol 属性。")]),s._v(" "),a("h3",{attrs:{id:"weakmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weakmap"}},[s._v("#")]),s._v(" WeakMap")]),s._v(" "),a("p",[s._v("为了解决上述问题，我们又要引入一个新的东西： "),a("strong",[s._v("WeakMap")]),s._v(" 。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Class "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" _x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WeakMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InnerClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("construtor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      _x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" _x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" InnerClass\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);