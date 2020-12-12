(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{184:function(t,s,a){t.exports=a.p+"assets/img/box1.ee25c5c0.png"},185:function(t,s,a){t.exports=a.p+"assets/img/content-box.24b4fcf9.png"},186:function(t,s,a){t.exports=a.p+"assets/img/border-box.01f978de.png"},271:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"css-盒模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-盒模型"}},[t._v("#")]),t._v(" CSS 盒模型")]),t._v(" "),n("h2",{attrs:{id:"基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),n("p",[t._v("所有 HTML 元素都可以视为一个盒子，该盒子包括：边距(margin)、边框(border)、填充(padding)和实际内容(content)")]),t._v(" "),n("p",[n("img",{attrs:{src:a(184),alt:"css盒模型"}})]),t._v(" "),n("h2",{attrs:{id:"标准模型-w3c模型-和-ie-模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#标准模型-w3c模型-和-ie-模型"}},[t._v("#")]),t._v(" 标准模型（W3C模型）和 IE 模型")]),t._v(" "),n("p",[t._v("差异：宽高计算方式不同")]),t._v(" "),n("p",[t._v("标准模型：width/height 设置的是 content 的宽高")]),t._v(" "),n("p",[n("img",{attrs:{src:a(185),alt:"标准模型"}})]),t._v(" "),n("p",[t._v("IE模型：width/height 设置的是  content + padding + border 的宽高")]),t._v(" "),n("p",[n("img",{attrs:{src:a(186),alt:"IE模型"}})]),t._v(" "),n("h2",{attrs:{id:"如何设置两种模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何设置两种模型"}},[t._v("#")]),t._v(" 如何设置两种模型")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  // 设置标准模型\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  // 设置IE模型\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("box-sizing 的默认值是 content-box")]),t._v(" "),n("h2",{attrs:{id:"js-如何设置盒模型的宽高"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js-如何设置盒模型的宽高"}},[t._v("#")]),t._v(" JS 如何设置盒模型的宽高")]),t._v(" "),n("p",[t._v("假设已经获取节点 dom")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只能获取内联样式设置的宽高")]),t._v("\ndom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取渲染后即使运行的宽高，只支持IE")]),t._v("\ndom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取渲染后即时运行的宽高，兼容性很好")]),t._v("\ndom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getComputedStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取渲染后即使运行的宽高，兼容性很好，一般用来获取元素的绝对位置")]),t._v("\ndom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("height\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);