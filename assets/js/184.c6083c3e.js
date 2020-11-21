(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{371:function(v,_,t){"use strict";t.r(_);var s=t(6),e=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"高德一面-一个-tcp-连接能发几个-http-请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高德一面-一个-tcp-连接能发几个-http-请求"}},[v._v("#")]),v._v(" [高德一面] 一个 tcp 连接能发几个 http 请求")]),v._v(" "),t("p",[v._v("如果是 HTTP 1.0，默认不支持长连接，所以 一个 TCP 发送 一个 HTTP 请求；")]),v._v(" "),t("p",[v._v("如果是 HTTP 1.1，支持了长连接，只要 TCP 连接不断开，便可以一直发送 HTTP 请求，HTTP 2.0 同理")]),v._v(" "),t("h1",{attrs:{id:"腾讯一面-v-dom-的优势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#腾讯一面-v-dom-的优势"}},[v._v("#")]),v._v(" [腾讯一面] V-DOM 的优势")]),v._v(" "),t("p",[v._v("DOM 引擎 、JS 引擎相互独立，又工作在同一线程。JS 代码调用 DOM API 必须挂起 JS 引擎、转换传入参数数据、激活 DOM 引擎，DOM 重绘后再转换可能有的返回值，最后激活 JS 引擎并继续执行。若频繁的 DOM API 调用，重新计算布局、重新绘制图像会引起更大的性能消耗。")]),v._v(" "),t("p",[v._v("优势：")]),v._v(" "),t("ol",[t("li",[v._v("V-DOM 不会立马进行重排和重绘")]),v._v(" "),t("li",[v._v("V-DOM 进行频繁修改，然后一次性比较并修改真实 DOM 中需要改的部分，最后在真实 DOM 中进行排版重绘，减少过多的 DOM 节点排版与重绘损耗")]),v._v(" "),t("li",[v._v("V-DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部")])]),v._v(" "),t("h1",{attrs:{id:"字节跳动-commonjs-和-es6-模块引用的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字节跳动-commonjs-和-es6-模块引用的区别"}},[v._v("#")]),v._v(" [字节跳动] CommonJS 和 es6 模块引用的区别")]),v._v(" "),t("p",[v._v("目前浏览器端虽写法是以 esm 为主，但是各种前端工具转换为 cjs，差别：")]),v._v(" "),t("ol",[t("li",[v._v("cjs 模块输出的是一个值的拷贝，esm 模块输出的是值的引用")]),v._v(" "),t("li",[v._v("cjs 模块是运行时加载，esm 模块是编译时输出接口")]),v._v(" "),t("li",[v._v("cjs 是单个值导出，esm 允许导出多个")]),v._v(" "),t("li",[v._v("cjs 是动态语法，可以写在判断内，esm 是静态语法，只能写在顶层")]),v._v(" "),t("li",[v._v("cjs 的 this 是当前模块，esm 的 this 是 undefined")])]),v._v(" "),t("h1",{attrs:{id:"cookie-token-和-session-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie-token-和-session-的区别"}},[v._v("#")]),v._v(" cookie token 和 session 的区别")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/157",target:"_blank",rel:"noopener noreferrer"}},[v._v("浏览器系列之 cookie 和 samesite 属性"),t("OutboundLink")],1)]),v._v(" "),t("h1",{attrs:{id:"头条-如何选择图片格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#头条-如何选择图片格式"}},[v._v("#")]),v._v(" [头条] 如何选择图片格式")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("图片格式")]),v._v(" "),t("th",[v._v("压缩方式")]),v._v(" "),t("th",[v._v("透明度")]),v._v(" "),t("th",[v._v("动画")]),v._v(" "),t("th",[v._v("浏览器兼容")]),v._v(" "),t("th",[v._v("适应场景")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("JPEG")]),v._v(" "),t("td",[v._v("有损压缩")]),v._v(" "),t("td",[v._v("不支持")]),v._v(" "),t("td",[v._v("不支持")]),v._v(" "),t("td",[v._v("所有")]),v._v(" "),t("td",[v._v("复杂颜色及形状、尤其是照片")])]),v._v(" "),t("tr",[t("td",[v._v("GIF")]),v._v(" "),t("td",[v._v("无损压缩")]),v._v(" "),t("td",[v._v("支持")]),v._v(" "),t("td",[v._v("支持")]),v._v(" "),t("td",[v._v("所有")]),v._v(" "),t("td",[v._v("简单颜色、动画")])]),v._v(" "),t("tr",[t("td",[v._v("PNG")]),v._v(" "),t("td",[v._v("无损压缩")]),v._v(" "),t("td",[v._v("支持")]),v._v(" "),t("td",[v._v("不支持")]),v._v(" "),t("td",[v._v("所有")]),v._v(" "),t("td",[v._v("需要透明度时")])]),v._v(" "),t("tr",[t("td",[v._v("APNG")]),v._v(" "),t("td",[v._v("无损压缩")]),v._v(" "),t("td",[v._v("支持")]),v._v(" "),t("td",[v._v("支持")]),v._v(" "),t("td",[v._v("Firefox、Safari、IOS Safari")]),v._v(" "),t("td",[v._v("需要半透明效果的动画")])]),v._v(" "),t("tr",[t("td",[v._v("WebP")]),v._v(" "),t("td",[v._v("有损压缩")]),v._v(" "),t("td",[v._v("支持")]),v._v(" "),t("td",[v._v("支持")]),v._v(" "),t("td",[v._v("Chrome、Opera、Android、Chrome Android、Browser")]),v._v(" "),t("td",[v._v("复杂颜色以及形状，浏览器平台可预知")])]),v._v(" "),t("tr",[t("td",[v._v("SVG")]),v._v(" "),t("td",[v._v("无损压缩")]),v._v(" "),t("td",[v._v("支持")]),v._v(" "),t("td",[v._v("支持")]),v._v(" "),t("td",[v._v("所有（IE8以上）")]),v._v(" "),t("td",[v._v("简单图形，需要良好的缩放体验，需要动态控制图片特效")])])])]),v._v(" "),t("h1",{attrs:{id:"首屏和白屏时间如何计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首屏和白屏时间如何计算"}},[v._v("#")]),v._v(" 首屏和白屏时间如何计算")]),v._v(" "),t("p",[v._v("首屏时间计算，可以由 Native WebView 提供类似 onload 的方法实现，在 ios 下对应的是 webViewDidFinishLoad，在 android 下对应的是 onPageFinished 事件。")]),v._v(" "),t("p",[v._v("白屏的定义有很多种，场景不同，时间计算方式不同。")]),v._v(" "),t("h1",{attrs:{id:"小程序-和-h5-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序-和-h5-的区别"}},[v._v("#")]),v._v(" 小程序 和 H5 的区别")]),v._v(" "),t("ol",[t("li",[v._v("渲染方式不同，小程序时 native 渲染，同时也支持 web 渲染")]),v._v(" "),t("li",[v._v("小程序特有的双线程设计")])]),v._v(" "),t("h1",{attrs:{id:"如何判断-0-1-0-2-与-0-3-相等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何判断-0-1-0-2-与-0-3-相等"}},[v._v("#")]),v._v(" 如何判断 0.1 + 0.2 与 0.3 相等？")]),v._v(" "),t("ol",[t("li",[v._v("非 ES 独有")]),v._v(" "),t("li",[v._v("IEEE754 标准中 64 位的存储格式，比如 11 位存偏移值")]),v._v(" "),t("li",[v._v("其中涉及的三次精度丢失")])]),v._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/155",target:"_blank",rel:"noopener noreferrer"}},[v._v("JavaScript 深入之浮点数精度"),t("OutboundLink")],1)]),v._v(" "),t("p",[v._v("参考 math.js big.js")]),v._v(" "),t("h1",{attrs:{id:"腾讯二面-v8-引擎执行一段-js-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#腾讯二面-v8-引擎执行一段-js-代码"}},[v._v("#")]),v._v(" [腾讯二面] v8 引擎执行一段 js 代码")]),v._v(" "),t("p",[v._v("在执行一段代码时，JS 引擎首先会创建一个执行栈")]),v._v(" "),t("p",[v._v("然后 JS 引擎会创建一个全局执行上下文，并 push 到执行栈中，这个过程 JS 引擎会为这段代码中所有的变量分配内存并赋一个初始值(undefined)，在创建完成之后，JS 引擎会进入执行阶段，这个过程 JS 引擎会逐行执行代码，并为之前分配好内存的变量逐个赋真实值。")]),v._v(" "),t("p",[v._v("如果这段代码中存在 function的声明和调用，那么 JS 引擎会创建一个函数执行上下文，并 push 到执行栈中，其创建过程与全局执行上下文一样。但有特殊情况，即当函数中存在对其他函数的调用时，JS 引擎会在父函数执行的过程中，将子函数的全局执行上下文 push 到执行栈，这也是为什么子函数能够访问到父函数内所声明的变量。")]),v._v(" "),t("p",[v._v("还有一种特殊情况是，在子函数执行的过程中，父函数已经 return 了，这种情况下，JS 引擎会讲父函数的上下文从执行栈中移除，与此同时，JS 引擎会为还在执行的子函数上下文创建一个闭包，这个闭包里保存了父函数内生命的变量以及其赋值，子函数仍然能够在其上下文中访问并使用这些变量/常量。当子函数执行完毕，JS 引擎才会将子函数的上下文以及闭包一并从执行栈中移除。")])])}),[],!1,null,null,null);_.default=e.exports}}]);