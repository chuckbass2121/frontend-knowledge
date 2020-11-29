(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{230:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bigint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bigint"}},[t._v("#")]),t._v(" BigInt")]),t._v(" "),a("p",[t._v("BigInt 是 ES2020 推出的新特性，以弥补过去 JS 无法做超大数字运算。")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("BigInt 是一个新型内置类型，主要是为了表达大于 "),a("code",[t._v("2^53-1")]),t._v(" 的整数。")]),t._v(" "),a("p",[t._v("我们定义一个 BigInt 类型的数据时有两种方式，第一个是在数字后面加 n，另外一种是调用 "),a("code",[t._v("BigInt()")]),t._v(" 方法。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" theBigInt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9007199254740991n")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" alsoHuge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BigInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9007199254740991")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" thiBigInt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bigint")]),t._v("\n")])])]),a("h2",{attrs:{id:"运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算"}},[t._v("#")]),t._v(" 运算")]),t._v(" "),a("p",[t._v("BigInt 支持一下运算 +、"),a("code",[t._v("*")]),t._v(" 、- 、"),a("code",[t._v("**")]),t._v(" 、%，并且支持了除了 >>>（无符号右移）之外的其他位运算。")]),t._v(" "),a("p",[t._v("值得注意的是，BigInt 不支持单目 + 运算，主要原因还是 BigInt 无法和 Number 类型直接运算，如果想要运算的话需要转换成同一个类型。但是，如果是 BigInt 转换成 Number 类型，有可能会丢失精度。")]),t._v(" "),a("p",[t._v("在比较运算符中，BigInt 和 Number 是不严格相等的，但是可以进行大小比较。")])])}),[],!1,null,null,null);s.default=e.exports}}]);