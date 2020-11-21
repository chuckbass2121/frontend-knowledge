(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{258:function(s,t,v){"use strict";v.r(t);var a=v(6),_=Object(a.a)({},(function(){var s=this,t=s.$createElement,v=s._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h1",{attrs:{id:"是什么原因导致了-js-中的-this-指向问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#是什么原因导致了-js-中的-this-指向问题"}},[s._v("#")]),s._v(" 是什么原因导致了 JS 中的 this 指向问题？")]),s._v(" "),v("blockquote",[v("p",[s._v("原文链接：是什么原因导致了 JS 中的 this 指向问题？ - doodlewind的回答 - 知乎 https://www.zhihu.com/question/412637481/answer/1539325572")])]),s._v(" "),v("p",[s._v("每门语言里影响深远的设计问题，基本都可以代入历史上设计者的视角去解读。你说为什么 JS 会搞出这么一个别扭的缝合怪式设计呢？因为在 JS 诞生那会儿，发明它的 Brendan Eich 大叔正心猿意马呢......")]),s._v(" "),v("p",[s._v("在讲历史故事前，我们得先明确一点： "),v("strong",[s._v("JS 中的 this 指向到底有没有问题？")]),s._v(" 不用长篇大论，你就看看下面这个 this，到底可能指向哪些东西呢？")]),s._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("f")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),v("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a "),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" a "),v("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ???")]),s._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),v("p",[s._v("对此，很多做题家可能马上开始背规范，告诉你「"),v("em",[s._v("this 明明很好用，你不懂是你没理解原理")]),s._v("」什么什么的，然后就是什么「四种指向」啊「寄生组合继承」啊之类难懂的话，空气里弥漫着吊打面试官的快活气息......")]),s._v(" "),v("p",[s._v("实际上，几乎只有 JS 程序员需要记忆这套规则。 "),v("strong",[s._v("因为允许 this 出现在独立函数里，基本属于 JavaScript 的独创。")]),s._v(" 作为对比，我们来看看最常见的几门「经典」语言是怎么做的：")]),s._v(" "),v("ul",[v("li",[s._v("C 语言支持独立函数，没有 this；")]),s._v(" "),v("li",[s._v("Java 不支持独立函数，this 只能出现在 class 方法里；")]),s._v(" "),v("li",[s._v("C++ 支持独立函数，但 this 只能出现在 class 方法里；")]),s._v(" "),v("li",[s._v("Python 支持独立函数，但 this 只能出现在 class 方法里；")]),s._v(" "),v("li",[s._v("PHP 支持独立函数，但 $this 只能出现在 class 方法里。")])]),s._v(" "),v("p",[s._v("但是独创的发明未必就是错的啊，这个设计难道不好吗？")]),s._v(" "),v("p",[s._v("我不必展开论证，因为这早已经是正史钦定的设计问题，我们来看看 Brendan Eich 自己是怎么给自己「秉笔直书」的吧：")]),s._v(" "),v("blockquote",[v("p",[s._v("每个函数都有一个隐式的 this 形参，将函数作为方法调用时，这个参数会被设置为用于访问该方法的对象。这和大多数面向对象中的 this（或 self）含义相同。但是 JavaScript 在「关联到对象的方法」与「独立函数」这两者之间，使用了单一的定义形式。 "),v("strong",[s._v("这使 this 导致了许多程序员的困惑和 bug。")])]),s._v(" "),v("p",[s._v("——《JavaScript》第一部分，下同")])]),s._v(" "),v("p",[s._v("你看，人家自己都承认 this 的设计是坑了，靠这个秀优越感我看着都尴尬......")]),s._v(" "),v("p",[s._v("到这里，关于「this 有没有问题」和「this 有什么问题」这两点，相信已经没有好争议的了。关键的地方来了， "),v("strong",[s._v("JS 为什么会设计成这样呢？")])]),s._v(" "),v("p",[s._v("这就是产品经理给程序员瞎鸡儿提需求的后果了。")]),s._v(" "),v("p",[s._v("1995 年，Netscape 在实现最早的 JavaScript 时，其内部的需求是这样的：")]),s._v(" "),v("blockquote",[v("p",[s._v("......这种 Java 的辅助语言必须「"),v("strong",[s._v("看起来像 Java")]),s._v("」，保持易用性并「基于对象」，"),v("strong",[s._v("而不是像 Java 这种基于类。")])]),s._v(" "),v("p",[s._v("......所有人都认可 Mocha（最早的 JS 引擎）将会「基于对象」 "),v("strong",[s._v("但没有类")]),s._v(" ，因为支持类将花费很长时间，并有与 Java 竞争的风险。")])]),s._v(" "),v("p",[s._v("所以，出于政治因素，JavaScript 不能有 class，并且又要长得像 Java，这是需求背景一。")]),s._v(" "),v("p",[s._v("然后，BE 也有自己的小九九，搬运一下他自己的原话：")]),s._v(" "),v("blockquote",[v("p",[s._v("尽管 Scheme 的诱惑已经不再，Brendan Eich 仍然发现 Lisp 式的函数一等公民概念很有吸引力。")])]),s._v(" "),v("p",[s._v("自己给自己写正史，当然必须写得很委婉。这话换成大白话解读一下就是——「"),v("strong",[s._v("老子当时真的很想抄这个！")]),s._v("」")]),s._v(" "),v("p",[s._v("BE 想支持函数一等公民，这样一来函数就不必被包含在类中，这是需求背景二。")]),s._v(" "),v("p",[s._v("但是，OO 讲究的就是「"),v("em",[s._v("把数据和行为组合成一等公民")]),s._v("」呀，这样独立函数就必须要以某种机制，找到自己所属的实例对象。这时候既要长得像 Java，又不让有 class，该怎么办呢？揉在一起就是新发明——让函数里面也支持 this 就行了嘛！")]),s._v(" "),v("p",[s._v("然后 this 的指向就变成了现在「祖宗之法不可变」的 Web Reality 了。")]),s._v(" "),v("p",[s._v("但是，那个混乱的 this 终归是 1995 年的设计了。不难发现，现在只要基于 ES6 以上的语法，很容易做到 "),v("strong",[s._v("class 之外不完全使用 this。")]),s._v(" Static TypeScript 就这样直接把独立函数的 this 砍掉了，六年级小朋友拿它写起游戏也完全没问题。另外，闭包也可以替代 this 实例来管理状态。")]),s._v(" "),v("p",[s._v("砍掉独立函数的 this，对于性能是相当有益的。通俗地说，对于函数里跳出的 this，除非你给它加上类型标注，否则编译期根本就没法知道它是什么类型的，这样也就没法静态化，只能搞运行时的 Tracing JIT。而让 this 回归 class 后，我们理论上还完全可以把添加了类型标注的 JS class 映射为 C++ 的 class，用虚函数表的机制来建模类的层次结构，抛弃披着 class 外衣的原型继承，直接使用类式继承。这样的话，我们就能把 TS 的子集静态编译成机器码了（这个属于暴论，但是大家可以自己拿 LLVM 试试，其实未必有你想象中的难）。")]),s._v(" "),v("p",[s._v("并且，在现在这个属于 Composition API 与 Hooks 的新时代，对于传统上带来 this 动态性的 call / apply / bind 三件套，可以预期它们会被逐渐边缘化掉，甚至今天连完全抛弃 class 的呼声都已经不低了。当然个人感觉这些都有些过于激进，这里不展开讨论。")]),s._v(" "),v("p",[s._v("好了，现在是时候做个「盖棺定论」式的总结了：")]),s._v(" "),v("ul",[v("li",[s._v("this 的灵活指向，属于 JS 自己发明的语言特性；")]),s._v(" "),v("li",[s._v("this 指向存在的问题是公认的；")]),s._v(" "),v("li",[s._v("this 的这种设计既不利于代码可读性，也不利于性能优化，完全可对其施加限制；")]),s._v(" "),v("li",[v("strong",[s._v("this 设计问题的根源，使产品营销需求与设计者个人偏好之间的冲突。")])])]),s._v(" "),v("p",[s._v("最后，又到了我们喜闻乐见的苏联笑话时间：")]),s._v(" "),v("p",[s._v("Brendan Eich 开车来到一个岔路口，发现两块路标一块写着 Scheme，另一块写着 Java。怎么办？只见他略一沉思，将车头对准了两块路标中间。一脚油门下去，加速！")]),s._v(" "),v("p",[s._v("然后就翻车了。")])])}),[],!1,null,null,null);t.default=_.exports}}]);