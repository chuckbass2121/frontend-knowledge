(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{331:function(e,r,t){"use strict";t.r(r);var s=t(6),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"前端模块化-commonjs-amd-cmd-es6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端模块化-commonjs-amd-cmd-es6"}},[e._v("#")]),e._v(" 前端模块化：CommonJS，AMD，CMD，ES6")]),e._v(" "),t("p",[e._v("模块化的开发方式可以提高代码复用率，方便进行代码的管理。通常一个文件就是一个模块，有自己的作用域，只对外暴露特定的变量和函数。目前流行的 JS 模块化规范有 CommonJS，AMD，CMD 以及 ES6 的模块系统。参考阮一峰的"),t("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/module-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("module-loader"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"commonjs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[e._v("#")]),e._v(" CommonJS")]),e._v(" "),t("p",[e._v("Node.JS 是 CommonJS 规范的主要践行者，它有四个重要的环境变量为模块化的实现提供支持：module、exports、require、global。实际使用时，推荐使用 module.exports 定义当前模块对外输出的接口，用 require 加载模块。")]),e._v(" "),t("p",[e._v("CommonJS 用同步的方式加载模块，在服务端，模块文件都存在本地磁盘，读取速度非常快，所以问题不大。但在浏览器，受限于网络原因，更合理的方式是使用异步加载。")]),e._v(" "),t("h2",{attrs:{id:"amd-和-require-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amd-和-require-js"}},[e._v("#")]),e._v(" AMD 和 require.js")]),e._v(" "),t("p",[e._v("AMD 规范采用异步方式加载模块，模块的加载不影响后面语句的运行。所以依赖这个模块的语句，都定义在一个回调函数中，等加载完成后，回调函数才会执行。")]),e._v(" "),t("p",[e._v("require.js 实现 AMD 规范的方式：用 require.config() 指定引用路径等，用 define() 定义模块，用 require() 加载模块。")]),e._v(" "),t("h2",{attrs:{id:"cmd-和-sea-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd-和-sea-js"}},[e._v("#")]),e._v(" CMD 和 sea.js")]),e._v(" "),t("p",[e._v("require.js 在声明依赖的模块时，会第一时间加载并执行模块内的代码。")]),e._v(" "),t("p",[e._v("而 CMD 是另一种 JS 模块化方案，与 AMD 类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD 推崇依赖就近、延迟执行。")]),e._v(" "),t("h2",{attrs:{id:"es-module"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#es-module"}},[e._v("#")]),e._v(" ES Module")]),e._v(" "),t("p",[e._v("ES6 在语言标准的层面上，实现了模块功能，旨在成为浏览器和服务器通用的模块解决方案。其模块解决方案主要有两个命令构成：export 和 import。")]),e._v(" "),t("p",[e._v("使用 import 命令的时候，用户需要知道所要加载的变量名和函数名。另外 ES6 还提供了默认导出 export default 命令，为模块指定默认输出。")]),e._v(" "),t("p",[e._v("ES6 的模块不是对象，import 命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正是因为这个，使得静态分析成为可能。")]),e._v(" "),t("p",[e._v("目前最新的 ES2020 已经实现 ES Module 的动态加载 import()。")])])}),[],!1,null,null,null);r.default=a.exports}}]);