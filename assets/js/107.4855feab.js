(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{327:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript-深入之史上最全-5种-this-绑定全面解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-深入之史上最全-5种-this-绑定全面解析"}},[t._v("#")]),t._v(" JavaScript 深入之史上最全 -- 5种 this 绑定全面解析")]),t._v(" "),a("p",[a("code",[t._v("this")]),t._v(" 绑定规则总共有下面 5 种：")]),t._v(" "),a("ul",[a("li",[t._v("默认绑定（严格/非严格模式）")]),t._v(" "),a("li",[t._v("隐式绑定")]),t._v(" "),a("li",[t._v("显式绑定")]),t._v(" "),a("li",[t._v("new 绑定")]),t._v(" "),a("li",[t._v("箭头函数绑定")])]),t._v(" "),a("h2",{attrs:{id:"调用位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用位置"}},[t._v("#")]),t._v(" 调用位置")]),t._v(" "),a("p",[t._v("调用位置就是函数在代码中 "),a("strong",[t._v("被调用的位置")]),t._v("（不是声明的位置）。")]),t._v(" "),a("p",[t._v("查找方法：")]),t._v(" "),a("ul",[a("li",[t._v("分析调用栈：调用位置就是当前正在执行的函数的 "),a("strong",[t._v("前一个调用中")])]),t._v(" "),a("li",[t._v("使用开发工具得到调用栈：设置断点或者插入 "),a("code",[t._v("debugger;")]),t._v(" 语句，运行时调试器会在那个位置暂停，同时展示当前位置的函数调用列表，这就是 "),a("strong",[t._v("调用栈")]),t._v("。找到栈中 "),a("strong",[t._v("第二个元素")]),t._v("，这就是真正的调用位置。")])]),t._v(" "),a("h2",{attrs:{id:"绑定规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定规则"}},[t._v("#")]),t._v(" 绑定规则")]),t._v(" "),a("h3",{attrs:{id:"默认绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认绑定"}},[t._v("#")]),t._v(" 默认绑定")]),t._v(" "),a("h4",{attrs:{id:"独立函数调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独立函数调用"}},[t._v("#")]),t._v(" 独立函数调用")]),t._v(" "),a("p",[t._v("可以把默认绑定看作是无法应用其他规则时的默认规则，this 指向 "),a("strong",[t._v("全局对象")]),t._v("；")]),t._v(" "),a("h4",{attrs:{id:"严格模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格模式"}},[t._v("#")]),t._v(" 严格模式")]),t._v(" "),a("p",[t._v("严格模式下，不能将全局对象用于默认绑定，this 会绑定到 undefined。只有函数运行在 非严格模式下，默认绑定才能绑定到全局对象。在严格模式下调用函数则不影响默认绑定。")]),t._v(" "),a("h3",{attrs:{id:"隐式绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式绑定"}},[t._v("#")]),t._v(" 隐式绑定")]),t._v(" "),a("p",[t._v("当函数引用有 "),a("strong",[t._v("上下文对象")]),t._v(" 时，隐式绑定规则会把函数中 this 绑定到这个上下文对象，对象属性引用链只有上一层或者说最后一层在调用中起作用。")]),t._v(" "),a("h4",{attrs:{id:"隐式丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式丢失"}},[t._v("#")]),t._v(" 隐式丢失")]),t._v(" "),a("p",[t._v("被隐式绑定的函数在特定情况下会丢失绑定对象，应用默认绑定，把 this 绑定到全局对象或者 undefined 上。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bar()是一个不带任何修饰的函数调用，应用默认绑定。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" foo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数别名")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oops, global"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a是全局对象的属性")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "oops, global"')]),t._v("\n")])])]),a("p",[t._v("参数传递就是一种隐式赋值，传入函数时也会被隐式赋值。回调函数丢失 this 绑定是非常常见的。")]),t._v(" "),a("h3",{attrs:{id:"显式绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显式绑定"}},[t._v("#")]),t._v(" 显式绑定")]),t._v(" "),a("p",[t._v("通过 call 或者 apply 方法进行绑定，第一个参数是一个对象，在调用函数时会将这个对象绑定到 this。")]),t._v(" "),a("p",[t._v("显式绑定无法解决绑定丢失问题。")]),t._v(" "),a("h3",{attrs:{id:"new-绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-绑定"}},[t._v("#")]),t._v(" new 绑定")]),t._v(" "),a("p",[t._v("在 JS 中，"),a("strong",[t._v("构造函数")]),t._v(" 只是使用 new 操作符时被调用的普通函数，它们不属于某个类，也不会实例化一个类。")]),t._v(" "),a("p",[t._v("包括内置对象函数在内的所有函数都可以使用 new 操作符来调用，这种函数调用被称为构造函数调用。")]),t._v(" "),a("p",[t._v("实际上并不存在所谓的构造函数，只有对函数的 "),a("strong",[t._v("构造调用")]),t._v("。")]),t._v(" "),a("p",[t._v("使用 new 来调用函数，会自动执行下面的操作：")]),t._v(" "),a("ol",[a("li",[t._v("创建一个新对象")]),t._v(" "),a("li",[t._v("这个新对象会被执行 [[Prototype]] 连接")]),t._v(" "),a("li",[t._v("这个新对象会绑定到函数调用的 this")]),t._v(" "),a("li",[t._v("如果函数没有返回其他对象，那么 new 表达式中函数调用会自动返回这个新对象")])]),t._v(" "),a("h2",{attrs:{id:"优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),a("p",[t._v("new 绑定 -> 显式绑定 -> 隐式绑定 -> 默认绑定")]),t._v(" "),a("h2",{attrs:{id:"绑定例外"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定例外"}},[t._v("#")]),t._v(" 绑定例外")]),t._v(" "),a("h3",{attrs:{id:"被忽略的-this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#被忽略的-this"}},[t._v("#")]),t._v(" 被忽略的 this")]),t._v(" "),a("p",[t._v("把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值在调用时会被忽略，实际应用的是默认绑定。")]),t._v(" "),a("p",[t._v("总是传入 null 来忽略 this 绑定可能会产生一些副作用，如果某个函数确实使用了 this，那默认绑定规则会把 this 绑定到全局对象中。")]),t._v(" "),a("p",[t._v("更安全的做法是传入一个特殊的对象（空对象），把 this 绑定到这个对象中不会对你的程序产生任何的副作用。")]),t._v(" "),a("h3",{attrs:{id:"间接引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#间接引用"}},[t._v("#")]),t._v(" 间接引用")]),t._v(" "),a("p",[t._v("间接引用下，调用这个函数会应用默认绑定规则。间接引用最容易在 "),a("strong",[t._v("赋值")]),t._v(" 时发生。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// p.foo = o.foo的返回值是目标函数的引用，所以调用位置是foo()而不是p.foo()或者o.foo()")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),a("h3",{attrs:{id:"软绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软绑定"}},[t._v("#")]),t._v(" 软绑定")]),t._v(" "),a("ul",[a("li",[t._v("硬绑定可以把 this 强制绑定到指定对象（new 除外），防止函数调用应用默认绑定规则，但是会降低函数的灵活度，使用 "),a("strong",[t._v("硬绑定后就无法使用隐式绑定或者显式绑定来修改 this")]),t._v("。")]),t._v(" "),a("li",[t._v("如果给默认绑定制定一个全局对象和 undefined 以外的值，那就实现和硬绑定相同的效果，同时保留隐式绑定或显式绑定修改 this 的能力。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认绑定规则，优先级排最后")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果this绑定到全局对象或者undefined，那就把指定的默认对象obj绑定到this,否则不会修改this")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("softBind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("softBind")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 捕获所有curried参数")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" curried "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("bound")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            \t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" \n                \tobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                curried"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" curried"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        bound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" bound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"this-词法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-词法"}},[t._v("#")]),t._v(" this 词法")]),t._v(" "),a("p",[t._v("ES6 新增了一种特殊函数类型：箭头函数，箭头函数无法使用上述四种规则，而是根据外层（函数或全局）作用域（词法作用域）来决定 this。")]),t._v(" "),a("p",[t._v("箭头函数的绑定无法被修改。")])])}),[],!1,null,null,null);s.default=r.exports}}]);