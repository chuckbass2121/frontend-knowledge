(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{228:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("当 JS 执行一段可执行代码时，会创建执行上下文，对于每个执行上下文，都有三个重要属性：")]),t._v(" "),a("ul",[a("li",[t._v("变量对象（Variable object）")]),t._v(" "),a("li",[t._v("作用域链（Scope chain）")]),t._v(" "),a("li",[t._v("this")])]),t._v(" "),a("h1",{attrs:{id:"变量对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量对象"}},[t._v("#")]),t._v(" 变量对象")]),t._v(" "),a("p",[t._v("变量对象是与执行上下文相关的数据作用域，存储了上下文中定义的变量和函数声明。")]),t._v(" "),a("p",[t._v("因为不同执行上下文中的变量对象稍有不同，所以我们主要讨论的是全局执行上下文和函数执行上下文的变量对象。")]),t._v(" "),a("h2",{attrs:{id:"全局上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局上下文"}},[t._v("#")]),t._v(" 全局上下文")]),t._v(" "),a("p",[t._v("从 W3C 中了解到关于 "),a("em",[a("strong",[t._v("全局对象")])]),t._v(" 的概念：")]),t._v(" "),a("blockquote",[a("p",[t._v("全局对象是预定义的对象，作为 JS 的全局函数和全局属性的占位符。通过全局对象，可以访问所有其他预定义的对象、函数和属性。")]),t._v(" "),a("p",[t._v("在顶层 JS 代码中，可以用关键字 this 引用全局对象。因为全局对象是作用域链的头，这意味着所有非限定性的变量和函数都会作为该对象的属性来查询。")])]),t._v(" "),a("p",[t._v("简单来说就是：")]),t._v(" "),a("ol",[a("li",[t._v("可以通过 this 引用，在客户端 JS 中，全局对象就是 Window 对象；")]),t._v(" "),a("li",[t._v("全局对象是由 Object 构造函数实例化的一个对象；")]),t._v(" "),a("li",[t._v("预定义了一堆属性和函数；")]),t._v(" "),a("li",[t._v("作为全局变量的宿主；")]),t._v(" "),a("li",[t._v("在客户端 JS 中，全局对象有 window 属性指向自己。")])]),t._v(" "),a("h2",{attrs:{id:"函数上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数上下文"}},[t._v("#")]),t._v(" 函数上下文")]),t._v(" "),a("p",[t._v("在函数上下文中，我们用活动对象（activation object，AO）来表示变量对象。")]),t._v(" "),a("p",[t._v("活动对象和变量对象其实是一个东西，。只是变量对象是规范上或者说是引擎中实现的，不可在 JS 环境中访问，只有当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，只有被激活的变量对象上的各种属性才可被访问。")]),t._v(" "),a("p",[t._v("活动对象是进入函数上下文时刻创建的，它通过函数的 arguments 属性初始化。")]),t._v(" "),a("h2",{attrs:{id:"执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行过程"}},[t._v("#")]),t._v(" 执行过程")]),t._v(" "),a("p",[t._v("执行上下文代码会分成两个阶段进行处理：分析和执行，也称为：")]),t._v(" "),a("ol",[a("li",[t._v("进入执行上下文")]),t._v(" "),a("li",[t._v("代码执行")])]),t._v(" "),a("h3",{attrs:{id:"进入执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入执行上下文"}},[t._v("#")]),t._v(" 进入执行上下文")]),t._v(" "),a("p",[t._v("当进入执行上下文时，这时候还没有执行代码，变量对象包括：")]),t._v(" "),a("ol",[a("li",[t._v("函数所有形参（如果是函数上下文）\n"),a("ul",[a("li",[t._v("由名称和对应值组成的一个对象的属性被创建")]),t._v(" "),a("li",[t._v("没有实参，属性值设为 undefined")])])]),t._v(" "),a("li",[t._v("函数声明\n"),a("ul",[a("li",[t._v("由名称和对应值（函数对象（function-object））组成一个变量对象的属性被创建")]),t._v(" "),a("li",[t._v("如果变量对象已经存在相同的名称，则完全替换这个属性")])])]),t._v(" "),a("li",[t._v("变量声明\n"),a("ul",[a("li",[t._v("由名称和对应值（undefined）组成一个变量对象的属性被创建")]),t._v(" "),a("li",[t._v("如果变量名称和已经声明的形式参数或函数相同，则变量名称不会干扰已经存在的这类属性")])])])]),t._v(" "),a("p",[t._v("举个例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进入执行上下文后，这时的 AO 是：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nAO = {\n\targuments: {\n\t\t0: 1,\n\t\tlength: 1,\n\t},\n\ta: 1,\n\tb: undefined,\n\tc: reference to function c(){} ,\n\td: undefined\n}\n\n*/")]),t._v("\n")])])]),a("h3",{attrs:{id:"代码执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码执行"}},[t._v("#")]),t._v(" 代码执行")]),t._v(" "),a("p",[t._v("代码执行阶段会顺序执行代码，根据代码修改变量对象的值，按照上面的例子，这时候的 AO 应该是：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\nAO = {\n\targuments: {\n\t\t0: 1,\n\t\tlength: 1,\n\t},\n\ta: 1,\n\tb: 3,\n\tc: reference to function c() {},\n\td: reference to FunctionExpression "d",\n}\n*/')]),t._v("\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ol",[a("li",[t._v("全局上下文的变量对象初始化是全局对象")]),t._v(" "),a("li",[t._v("函数上下文的变量对象初始化只包括 Arguments 对象")]),t._v(" "),a("li",[t._v("在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值")]),t._v(" "),a("li",[t._v("在代码执行阶段会再次修改这些属性值")])]),t._v(" "),a("h1",{attrs:{id:"思考题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考题"}},[t._v("#")]),t._v(" 思考题")]),t._v(" "),a("ol",[a("li",[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ??")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ??")]),t._v("\n")])])]),a("p",[t._v("第一段会报错，第二段打印1")]),t._v(" "),a("p",[t._v("因为函数 foo 内的 a 没有通过 var 来进行声明，所以不会放到 AO 里面，引擎在 AO 中找不到就去全局对象里面找，也没找到所以报错。当第二段执行 console 的时候，全局对象被赋予了 a 属性，所以可以在全局对象中找到并打印。")])]),t._v(" "),a("li",[a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("会打印函数，是因为在执行上下文时，首先会处理函数声明，然后才是变量声明，如果遇到同名，则变量声明不会干扰函数声明。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);