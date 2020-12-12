(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{203:function(t,a,s){t.exports=s.p+"assets/img/redux1.f90e44b3.png"},375:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"flux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flux"}},[t._v("#")]),t._v(" Flux")]),t._v(" "),n("p",[t._v("FLux是一种架构是想，单向数据流。")]),t._v(" "),n("p",[t._v("要点：")]),t._v(" "),n("h2",{attrs:{id:"dispatcher"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dispatcher"}},[t._v("#")]),t._v(" dispatcher：")]),t._v(" "),n("p",[t._v("分发action到所有store")]),t._v(" "),n("h2",{attrs:{id:"store"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[t._v("#")]),t._v(" store")]),t._v(" "),n("p",[t._v("监听dispatch分发过来的action，根据action类型更新state。\n一个应用可以有多个store。")]),t._v(" "),n("h2",{attrs:{id:"views-and-controller-views"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#views-and-controller-views"}},[t._v("#")]),t._v(" Views and Controller-Views")]),t._v(" "),n("p",[t._v("监听store中state的更新，更新view")]),t._v(" "),n("h2",{attrs:{id:"action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" action")]),t._v(" "),n("p",[t._v("就是个对象")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("{\n  type:'',\n  payload:''\n}\n")])])]),n("h1",{attrs:{id:"redux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" Redux")]),t._v(" "),n("p",[t._v("Redux 是Flux的一种实现，但是Redux只有一个store。")]),t._v(" "),n("p",[t._v("流程图：")]),t._v(" "),n("p",[n("img",{attrs:{src:s(203),alt:"redux1"}})]),t._v(" "),n("h2",{attrs:{id:"store-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#store-2"}},[t._v("#")]),t._v(" store")]),t._v(" "),n("p",[t._v("创建store时，传入处理action的reducer，和初始state。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const store = createStore(reducer, initialState)\n")])])]),n("h2",{attrs:{id:"reducer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reducer"}},[t._v("#")]),t._v(" reducer")]),t._v(" "),n("p",[t._v("reducer是一个纯函数，根据action，返回新的state。\n不能直接修改state值。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reducer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" action"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" constants"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("payload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"action-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#action-2"}},[t._v("#")]),t._v(" action")]),t._v(" "),n("h3",{attrs:{id:"同步action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同步action"}},[t._v("#")]),t._v(" 同步action")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("actionCreator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    payload"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"异步action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异步action"}},[t._v("#")]),t._v(" 异步action")]),t._v(" "),n("p",[t._v("需要使用 redux-thunk 中间件")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("actionCreator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dispatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        payload"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);