(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{295:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"proxy-和-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-和-defineproperty"}},[t._v("#")]),t._v(" proxy 和 defineProperty")]),t._v(" "),a("p",[t._v("目前开发 Web 应用的主流框架是 React 和 Vue，这两个框架都能通过一定手段实现响应式编程，比如 Vue 本身就实现了双向绑定以及 React + Mobx 实现类似于 Vue 的操作，这个时候就是 "),a("code",[t._v("Object.defineProperty")]),t._v(" 登场的时候。")]),t._v(" "),a("p",[t._v("但是随着 Vue3.0 以及 Mobx5 的推出，Proxy 取代了 "),a("code",[t._v("Object.defineProperty")]),t._v(" 成为双向绑定的底层原理。")]),t._v(" "),a("p",[t._v("我们先以 "),a("code",[t._v("Object.defineProperty")]),t._v(" 作为引入，之后讲解 Proxy，最后比较二者之间的优劣。")]),t._v(" "),a("h2",{attrs:{id:"object-defineproperty-数据劫持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty-数据劫持"}},[t._v("#")]),t._v(" "),a("code",[t._v("Object.defineProperty")]),t._v(" 数据劫持")]),t._v(" "),a("p",[a("code",[t._v("Object.defineProperty")]),t._v(" 方法会直接在对象上定义一个新的属性，或者修改一个对象的现有属性，并返回次对象。")]),t._v(" "),a("p",[t._v("该方法接受三个参数，第一个是要定义属性的对象，第二个是要定义或修改属性的名称，第三个参数是要定义或修改的属性描述符。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 18")]),t._v("\n")])])]),a("p",[t._v("函数的第三个参数属性描述符有两种形式：数据描述符和存取描述符。")]),t._v(" "),a("p",[t._v("数据描述符是一个具有值的属性，该值可以是可写的，也可以是不可写的。存取描述符是由 getter 和 setter 所描述的属性。这两种描述符是互斥的。")]),t._v(" "),a("p",[t._v("这两种同时拥有下列两种键值：")]),t._v(" "),a("ul",[a("li",[t._v("configurable：当且仅当该属性为 true 时，该属性的描述符才能被改变，同时该属性也能从对应的对象上被删除，默认为 false；")]),t._v(" "),a("li",[t._v("enumerable：当且仅当该属性为 true 时，该属性才会出现在对象的枚举属性中，默认为 false。")])]),t._v(" "),a("p",[t._v("数据描述符还具有以下的可选键值：")]),t._v(" "),a("ul",[a("li",[t._v("value：该属性对应的值，可以是任意有效的 JS 值，默认为 undefined；")]),t._v(" "),a("li",[t._v("writable：当且仅当该属性为 true 时，当前属性对应的值（也就是上面的 value）才能被赋值运算符改变，默认为 false。")])]),t._v(" "),a("p",[t._v("存取描述符还具有以下的可选键值：")]),t._v(" "),a("ul",[a("li",[t._v("get：属性的 getter 函数，当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的 this 并不一定是定义该属性的对象）。该函数的返回值被用作属性的值；")]),t._v(" "),a("li",[t._v("set：属性的 setter 函数，当属性值被修改时会调用此函数。该方法会接收一个参数（被赋予的新值），会传入赋值时的 this 对象。")])]),t._v(" "),a("h2",{attrs:{id:"proxy-数据拦截"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-数据拦截"}},[t._v("#")]),t._v(" Proxy 数据拦截")]),t._v(" "),a("p",[a("code",[t._v("Object.defineProperty")]),t._v(" 只能对对象中现有的键进行拦截，对于动态新增的键是无能为力的。同时 "),a("code",[t._v("Object.defineProperty")]),t._v(" 只能重定义获取和设置行为。")]),t._v(" "),a("p",[t._v("而 Proxy 相当于一个升级，它可以进行更多的重定义。")]),t._v(" "),a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("首先 Proxy 是一个构造函数，可以通过 new 来创建它的实例。它接受两个参数，第一个是被拦截的目标对象，第二个是 handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理实例的行为。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"handler-对象的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handler-对象的属性"}},[t._v("#")]),t._v(" handler 对象的属性")]),t._v(" "),a("p",[t._v("handler 中的所有属性都是可选的，如果没有定义，那就会保留原对象的默认行为。")]),t._v(" "),a("h4",{attrs:{id:"get"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get")]),t._v(" "),a("p",[t._v("对象的 getter 函数，用于拦截对象的读取操作。")]),t._v(" "),a("h4",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" set")]),t._v(" "),a("p",[t._v("对象的 setter 函数，用于拦截设置属性值的操作行为。")]),t._v(" "),a("h4",{attrs:{id:"apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply"}},[t._v("#")]),t._v(" apply")]),t._v(" "),a("p",[t._v("用于拦截函数的调用。当需要被代理拦截的对象是一个函数的时候，可以通过设置 apply 来进行拦截。")]),t._v(" "),a("h4",{attrs:{id:"has"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#has"}},[t._v("#")]),t._v(" has")]),t._v(" "),a("p",[t._v("用于拦截 in 操作符的代理。当对目标对象使用 in 操作符时，会触发这个函数的执行。")]),t._v(" "),a("h4",{attrs:{id:"construct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#construct"}},[t._v("#")]),t._v(" construct")]),t._v(" "),a("p",[t._v("用于拦截 new 操作符。为了使 new 操作符在生成的 Proxy 对象上生效，用于初始化代理的目标对象本身必须具有 "),a("code",[t._v("[[Construct]]")]),t._v(" 内部方法（即 "),a("code",[t._v("new Target")]),t._v(" 必须是有效的）。")]),t._v(" "),a("h4",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" delete")]),t._v(" "),a("p",[t._v("用于拦截 delete 操作符。用于拦截对对象属性进行 delete 操作。")]),t._v(" "),a("h4",{attrs:{id:"defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defineproperty"}},[t._v("#")]),t._v(" defineProperty")]),t._v(" "),a("p",[t._v("用于拦截对象属性上的 "),a("code",[t._v("Object.defineProperty")]),t._v(" 。当对对象进行键代理时，会触发这个方法。")]),t._v(" "),a("h4",{attrs:{id:"getownpropertydescriptor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getownpropertydescriptor"}},[t._v("#")]),t._v(" getOwnPropertyDescriptor")]),t._v(" "),a("p",[t._v("用于拦截 "),a("code",[t._v("Object.getOwnPropertyDescriptor")]),t._v(" 。")]),t._v(" "),a("h4",{attrs:{id:"getprototypeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getprototypeof"}},[t._v("#")]),t._v(" getPrototypeOf")]),t._v(" "),a("p",[t._v("当访问对象的原型时，会触发这个方法。")]),t._v(" "),a("p",[t._v("触发这个方法的条件有五个：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Object.getPrototypeOf()")])]),t._v(" "),a("li",[a("code",[t._v("Reflect.getPrototypeOf()")])]),t._v(" "),a("li",[a("code",[t._v("__proto__")])]),t._v(" "),a("li",[a("code",[t._v("Object.prototype.isPrototypeOf()")])]),t._v(" "),a("li",[a("code",[t._v("instanceof")])])]),t._v(" "),a("h4",{attrs:{id:"isextensible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isextensible"}},[t._v("#")]),t._v(" isExtensible")]),t._v(" "),a("p",[t._v("用于拦截对象的 "),a("code",[t._v("Object.isExtensible()")])]),t._v(" "),a("h4",{attrs:{id:"ownkeys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ownkeys"}},[t._v("#")]),t._v(" ownKeys")]),t._v(" "),a("p",[t._v("用于拦截对象自身属性的读取操作。")]),t._v(" "),a("p",[t._v("具体拦截如下：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Object.getOwnPropertyNames()")])]),t._v(" "),a("li",[a("code",[t._v("Object.getOwnPropertySymbols()")])]),t._v(" "),a("li",[a("code",[t._v("Object.keys()")])]),t._v(" "),a("li",[a("code",[t._v("for...in 循环")])])]),t._v(" "),a("p",[t._v("该方法有几个约束条件：")]),t._v(" "),a("ul",[a("li",[t._v("ownKeys 结果必须是一个数组")]),t._v(" "),a("li",[t._v("数组的元素类型要么是字符串要么是 Symbol")]),t._v(" "),a("li",[t._v("结果列表必须包含目标对象的所有不可配置（non-configurable）、自由属性的 key")]),t._v(" "),a("li",[t._v("如果目标对象不可扩展，那么结果列表必须包含目标对象的所有自由属性的 key，不能有其他值")])]),t._v(" "),a("h4",{attrs:{id:"preventextensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preventextensions"}},[t._v("#")]),t._v(" preventExtensions")]),t._v(" "),a("p",[t._v("用于设置对 "),a("code",[t._v("Object.perventExtensions")]),t._v(" 的拦截。")]),t._v(" "),a("h4",{attrs:{id:"setprototypeof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setprototypeof"}},[t._v("#")]),t._v(" setPrototypeOf")]),t._v(" "),a("p",[t._v("用来拦截 "),a("code",[t._v("Object.setPrototypeOf")]),t._v(" 。")]),t._v(" "),a("h2",{attrs:{id:"proxy-和-object-defineproperty-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-和-object-defineproperty-的区别"}},[t._v("#")]),t._v(" Proxy 和 "),a("code",[t._v("Object.defineProperty")]),t._v(" 的区别")]),t._v(" "),a("p",[t._v("这两个属性本身就不是在同一个领域工作的，我们通常说的区别，也仅仅是针对使用了这两个 API 的 Vue 的双向绑定机制的实现。")]),t._v(" "),a("p",[t._v("因此，在回答的时候，通常可以直接说出 Vue 来使用这两种机制来实现双向绑定的优劣势。")]),t._v(" "),a("h3",{attrs:{id:"object-defineproperty-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty-版本"}},[t._v("#")]),t._v(" "),a("code",[t._v("Object.defineProperty")]),t._v(" 版本")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get val'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newVal\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" input "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keyup'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("可以看出这个简单版本透露出来一个很明显的缺点，那就是只能对对象的属性进行监听，如果需要监听多个属性，则需要进行遍历。同时，这个 API 无法监听数组。")]),t._v(" "),a("p",[t._v("当然他的优点就是兼容性好。")]),t._v(" "),a("h3",{attrs:{id:"proxy-版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy-版"}},[t._v("#")]),t._v(" Proxy 版")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" input "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" receiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("getting ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" receiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" receiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" receiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Reflect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" receiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ninput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'keyup'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("从上述可以看到，Proxy 可以对整个对象进行代理拦截，并且返回一个新的对象。除此之外还可以对数组进行拦截。")]),t._v(" "),a("p",[t._v("Proxy 最大的问题便是兼容性不好，并且无法通过 polyfill 磨平。")])])}),[],!1,null,null,null);s.default=e.exports}}]);