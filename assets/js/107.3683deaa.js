(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{305:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modA "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modA'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modB'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("modB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// modeB:  A")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// modeA:  BB")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AA")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// BB")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Commonjs循环依赖执行流程。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// require 加载一个模块时，会执行被加载模块,第二次require同一个模块时，会从缓存读取")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.modA 先执行，其对外输出值为A")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.modB 执行，由于其require modA，而这时modA并未完全执行完，所以modB只能拿到modA的当前输出值A")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印modeB:  A， 并全部执行完，对外输出BB")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. modA中modB全部加载完， 打印 modeA:  BB，并全部执行完，对外输出AA")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. 这时modA， modB都已经全部加载执行完。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以打印为 AA BB")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);