(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{198:function(t,a,s){t.exports=s.p+"assets/img/click-jacking1.0f79c659.png"},199:function(t,a,s){t.exports=s.p+"assets/img/click-jacking2.da051a64.png"},200:function(t,a,s){t.exports=s.p+"assets/img/click-jacking3.cafed3b7.png"},201:function(t,a,s){t.exports=s.p+"assets/img/click-jacking4.4546c4b1.png"},336:function(t,a,s){"use strict";s.r(a);var n=s(6),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"点击劫持-clickjacking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#点击劫持-clickjacking"}},[t._v("#")]),t._v(" 点击劫持 (clickjacking)")]),t._v(" "),n("h2",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),n("p",[t._v("攻击网站使用 iframe包装目标网站，并把透明设为0")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("目标网站\n"),n("img",{attrs:{src:s(198),alt:"目标网站"}})])]),t._v(" "),n("li",[n("p",[t._v("攻击网站\n"),n("img",{attrs:{src:s(199),alt:"攻击网站"}})])]),t._v(" "),n("li",[n("p",[t._v("结果为\n"),n("img",{attrs:{src:s(200),alt:"攻击网站"}})])]),t._v(" "),n("li",[n("p",[t._v("把透明设为0.5 结果为\n"),n("img",{attrs:{src:s(201),alt:"攻击网站"}})])])]),t._v(" "),n("h2",{attrs:{id:"防御"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#防御"}},[t._v("#")]),t._v(" 防御")]),t._v(" "),n("p",[t._v("禁止网站被iframe内嵌。")]),t._v(" "),n("ol",[n("li",[t._v("使用js禁止内嵌（不推荐）")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个没有被内嵌的网站")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// top == window")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// top.location == window.location")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个被内嵌的网站")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// top为攻击网站，window为目标网站")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果不相等，则说明被内嵌了，那么就跳转到目标网站")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("top"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  top"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("X-Frame-Options（推荐）")])]),t._v(" "),n("p",[t._v("X-Frame-Options HTTP 响应头是用来给浏览器指示允许一个页面可否在\n<frame>, </iframe> 或者 <object> 中展现的标记。")]),t._v(" "),n("p",[t._v("网站可以使用此功能，来确保自己网站的内容没有被嵌套到别人的网站中去，也从而避免了点击劫持 (clickjacking) 的攻击。")]),t._v(" "),n("p",[t._v("X-Frame-Options三个参数:")]),t._v(" "),n("ul",[n("li",[t._v("DENY")])]),t._v(" "),n("p",[t._v("表示该页面不允许在frame中展示，即便是在相同域名的页面中嵌套也不允许。")]),t._v(" "),n("ul",[n("li",[t._v("SAMEORIGIN")])]),t._v(" "),n("p",[t._v("表示该页面可以在相同域名页面的frame中展示。")]),t._v(" "),n("ul",[n("li",[t._v("ALLOW-FROM uri")])]),t._v(" "),n("p",[t._v("表示该页面可以在指定来源的frame中展示。")])])}),[],!1,null,null,null);a.default=r.exports}}]);