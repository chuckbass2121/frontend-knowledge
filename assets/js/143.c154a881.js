(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{330:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"谈谈你对-webpack-的看法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#谈谈你对-webpack-的看法"}},[a._v("#")]),a._v(" 谈谈你对 webpack 的看法")]),a._v(" "),t("p",[a._v("webpack 是一个模块打包工具，可以使用 webpack 管理模块依赖，并编译输出模块们所需的静态文件。它能很好地管理、打包 web 开发中所用到的 html、css、js 以及各种静态文件（图片、字体等），让开发过程更加高效。对于不同类型的资源，webpack 有对应的模块加载器。webpack 模块打包器会分析模块间的依赖关系，最后生成了优化且合并后的静态资源。")]),a._v(" "),t("h2",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[a._v("#")]),a._v(" 特点")]),a._v(" "),t("ol",[t("li",[a._v("对 CommonJS、AMD、ES6 的语法做了兼容处理")]),a._v(" "),t("li",[a._v("对 js、css、图片等资源文件都支持打包")]),a._v(" "),t("li",[a._v("串联模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如对 ES6 的支持")]),a._v(" "),t("li",[a._v("可以将代码切割成不同的 chunk，实现按需加载，降低了初始化的时间")]),a._v(" "),t("li",[a._v("支持 sourcemap，易于调试")]),a._v(" "),t("li",[a._v("具有强大的 plugin 接口，大多是内部插件，使用起来比较灵活")])]),a._v(" "),t("h1",{attrs:{id:"webpack-与-grunt、gulp、rollup-的不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-与-grunt、gulp、rollup-的不同"}},[a._v("#")]),a._v(" webpack 与 grunt、gulp、rollup 的不同")]),a._v(" "),t("h2",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" 优点")]),a._v(" "),t("ul",[t("li",[a._v("专注于模块化项目")]),a._v(" "),t("li",[a._v("plugins 能做很多事情")]),a._v(" "),t("li",[a._v("社区非常活跃")])]),a._v(" "),t("h2",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[a._v("#")]),a._v(" 缺点")]),a._v(" "),t("ul",[t("li",[a._v("上手难度高")]),a._v(" "),t("li",[a._v("plugins 繁多，需要不断学习才能灵活掌握，经常出现文章中推荐的 plugin，但是实际上已经停止维护")]),a._v(" "),t("li",[a._v("对于初学者，调试很难定位问题")]),a._v(" "),t("li",[a._v("构建速度较慢，这也是后起之秀主要针对的点")])]),a._v(" "),t("h1",{attrs:{id:"什么情况下选择-webpack-什么情况下选择-rollup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下选择-webpack-什么情况下选择-rollup"}},[a._v("#")]),a._v(" 什么情况下选择 webpack？什么情况下选择 rollup？")]),a._v(" "),t("ul",[t("li",[a._v("webpack 适用于构建大型复杂的前端站点")]),a._v(" "),t("li",[a._v("rollup 适用于基础库的打包")])]),a._v(" "),t("p",[a._v("从另一个角度说：如果你需要进行代码分割，或者你有很多静态资源，再或者你的项目深度依赖于 CommonJS，选择 webpack。")]),a._v(" "),t("p",[a._v("如果你的代码基于 ES6 模块编写，并且做出来的是供他人使用，可以考虑 rollup")]),a._v(" "),t("h1",{attrs:{id:"webpack-有什么优劣势"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-有什么优劣势"}},[a._v("#")]),a._v(" webpack 有什么优劣势")]),a._v(" "),t("p",[a._v("grunt 和 gulp 是基于任务和流（Task、Stream）的，找到一个（或一类）文件，对其做一些链式操作，更新流上的数据，整条链式操作构成一个任务，多个任务就构成整个 web 构建流程。")]),a._v(" "),t("p",[a._v("rollup 和 webpack 类似，但更专注于 ES6 的模块打包。它最大亮点是利用 ES6 模块设计，生成更简洁、更简单的代码。")]),a._v(" "),t("p",[a._v("webpack 是模块化管理工具和打包工具，它是基于入口。webpack 会自动递归解析入口所需要加载的所有资源文件，然后用不同的 loader 来处理不同的文件，用 Plugin 来扩展 webpack 功能。")]),a._v(" "),t("p",[a._v("虽然目前主流方向是 webpack，但是一些轻量化的任务还是会用 gulp 来处理，比如单独打包 CSS 文件；另外一些库也会使用 rollup 打包。")]),a._v(" "),t("h1",{attrs:{id:"loader-和-plugin-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader-和-plugin-的区别"}},[a._v("#")]),a._v(" loader 和 plugin 的区别")]),a._v(" "),t("h2",{attrs:{id:"从功能上说"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从功能上说"}},[a._v("#")]),a._v(" 从功能上说")]),a._v(" "),t("p",[a._v("loader 用于加载待打包的资源，Plugin 用于扩展 webpack 功能。")]),a._v(" "),t("p",[a._v("loader 本质上就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果，主要用于加载某些资源文件。因为 webpack 只会加载 js 和 json，这就需要对应的 loader 将资源转化，加载进来。")]),a._v(" "),t("p",[a._v("plugin 用于扩展 webpack 的功能（loader 其实也是扩展功能，但是只专注于转化文件这一领域），在 webpack 运行的生命周期中会广播许多生命周期钩子事件，plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。")]),a._v(" "),t("h2",{attrs:{id:"从运行时机角度区分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从运行时机角度区分"}},[a._v("#")]),a._v(" 从运行时机角度区分")]),a._v(" "),t("p",[a._v("loader 运行在打包文件之前（loader 为模块加载时的预处理文件）")]),a._v(" "),t("p",[a._v("plugin 在整个编译周期都起作用")]),a._v(" "),t("h2",{attrs:{id:"从使用角度区分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从使用角度区分"}},[a._v("#")]),a._v(" 从使用角度区分")]),a._v(" "),t("p",[a._v("loader 在 rules 中配置，类型为数组，每一项都是一个 Object，内部包含了 test（类型文件）、loader、options（参数）等属性")]),a._v(" "),t("p",[a._v("plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入")]),a._v(" "),t("h1",{attrs:{id:"webpack-构建过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-构建过程"}},[a._v("#")]),a._v(" webpack 构建过程")]),a._v(" "),t("p",[a._v("webpack 的运行流程是一个串行的过程")]),a._v(" "),t("h2",{attrs:{id:"初始化参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化参数"}},[a._v("#")]),a._v(" 初始化参数")]),a._v(" "),t("p",[a._v("从配置文件和 Shell 语句中读取与合并参数，得出最终的参数")]),a._v(" "),t("h2",{attrs:{id:"开始编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始编译"}},[a._v("#")]),a._v(" 开始编译")]),a._v(" "),t("p",[a._v("用上一部得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译")]),a._v(" "),t("h2",{attrs:{id:"确定入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#确定入口"}},[a._v("#")]),a._v(" 确定入口")]),a._v(" "),t("p",[a._v("根据配置中的 "),t("code",[a._v("entry")]),a._v(" 找出所有文件的入口")]),a._v(" "),t("h2",{attrs:{id:"编译模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译模块"}},[a._v("#")]),a._v(" 编译模块")]),a._v(" "),t("p",[a._v("从入口文件出发，调用所有配置的 loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过本步骤处理")]),a._v(" "),t("h2",{attrs:{id:"完成模块编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完成模块编译"}},[a._v("#")]),a._v(" 完成模块编译")]),a._v(" "),t("p",[a._v("再经过第 4 步使用 loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系")]),a._v(" "),t("h2",{attrs:{id:"输出资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出资源"}},[a._v("#")]),a._v(" 输出资源")]),a._v(" "),t("p",[a._v("根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 chunk，再把每个 chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会")]),a._v(" "),t("h2",{attrs:{id:"输出完成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出完成"}},[a._v("#")]),a._v(" 输出完成")]),a._v(" "),t("p",[a._v("在确定输出内容后，根据配置确定输出的路径和文件名，把文件内容写入文件系统")]),a._v(" "),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),t("p",[a._v("以上过程中，webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 webpack 提供 API 改变 webpack 的运行结果")]),a._v(" "),t("p",[a._v("简单来说：")]),a._v(" "),t("ul",[t("li",[a._v("初始化：启动构建，读取与合并配置参数，加载 plugin，实例化 Compiler")]),a._v(" "),t("li",[a._v("编译：从 entry 出发，针对每个 Module 串行调用对应的 loader 去翻译文件的内容，在找到该 module 依赖的 module，递归的进行编译处理")]),a._v(" "),t("li",[a._v("输出：将编译后的 module 组合成 chunk，将 chunk 转换成文件，输出到文件系统中")])]),a._v(" "),t("h1",{attrs:{id:"webpack-如何解析代码路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-如何解析代码路径"}},[a._v("#")]),a._v(" webpack 如何解析代码路径")]),a._v(" "),t("p",[a._v("webpack 依赖 enhanced-resolve 来解析代码模块路径，这个模块像 Node.js 那一套模块路径解析的增强版，有很多可以自定义的解析配置。")]),a._v(" "),t("p",[a._v("模块解析规则分三种：")]),a._v(" "),t("ul",[t("li",[a._v("解析相对路径\n"),t("ol",[t("li",[a._v("查找想对当前模块的路径下是否有对应的文件或文件夹，是 "),t("strong",[a._v("文件")]),a._v(" 则直接加载")]),a._v(" "),t("li",[a._v("如果是文件夹则找到对应文件夹下是否有 "),t("code",[a._v("package.json")]),a._v(" 文件")]),a._v(" "),t("li",[a._v("有的话就按照文件中的 "),t("code",[a._v("main")]),a._v(" 字段的文件名来查找文件")]),a._v(" "),t("li",[a._v("没有 "),t("code",[a._v("package.json")]),a._v(" 或 "),t("code",[a._v("main")]),a._v(" 字段，则查找 "),t("code",[a._v("index.js")]),a._v(" 文件")])])]),a._v(" "),t("li",[a._v("解析绝对路径：直接查找对应路径文件，不建议使用，因为不同的机器会用绝对路径查找不到")]),a._v(" "),t("li",[a._v("解析模块名：查找当前文件目录，父级直至根目录下的 node_modules 文件夹，看是否有对应名称的模块")])]),a._v(" "),t("p",[a._v("通过配置 "),t("code",[a._v("resolve.alias")]),a._v("、"),t("code",[a._v("resolve.extensions")]),a._v(" 、"),t("code",[a._v("resolve.modules")]),a._v("等字段优化路径查找速度")]),a._v(" "),t("h1",{attrs:{id:"sourcemap-的作用和原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sourcemap-的作用和原理"}},[a._v("#")]),a._v(" sourcemap 的作用和原理")]),a._v(" "),t("p",[a._v("sourcemap 是将编译、打包、压缩之后的代码映射回源码的过程。打包压缩后，代码不具备良好的可读性，想要调试源码就需要 sourcemap，出错的时候控制台会直接显示原始代码出错的位置。")]),a._v(" "),t("p",[a._v("map 文件只要不打开开发者工具，浏览器是不会加载的。")]),a._v(" "),t("h1",{attrs:{id:"模块打包原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块打包原理"}},[a._v("#")]),a._v(" 模块打包原理")]),a._v(" "),t("p",[a._v("webpack 根据 "),t("code",[a._v("webpack.config.js")]),a._v(" 中的入口文件，在入口文件里识别模块依赖，不管这里的模块依赖是用 CommonJS 写的，还是 ES6 Module 规范写的，webpack 会自动进行分析，并通过转换、编译代码，打包成最终文件。"),t("strong",[a._v("最终文件中的模块实现是基于 webpack 自己实现的 webpack_require（es5 代码）")]),a._v("，所以打包后的文件可以跑在浏览器上。")]),a._v(" "),t("p",[a._v("同时意味着在 webpack 环境中，你可以使用 es6 语法，也可以使用 commonjs 语法，因为从 webpack2 开始内置了对 ES6、CommonJS、AMD 模块化语句的支持，"),t("strong",[a._v("webpack 会对各种模块进行语法分析，并作转换编译")]),a._v("。")]),a._v(" "),t("p",[a._v("另外，针对异步模块："),t("strong",[a._v("webpack 实现模块的异步加载方式有点像 jsonp 的流程")]),a._v("。")]),a._v(" "),t("p",[a._v("遇到异步模块时，使用 "),t("code",[a._v("__webpack_require__.e")]),a._v(" 函数去把异步代码加载进来。该函数会在 html 的 head 中动态增加 script 标签，src 指向指定的异步模块存放的文件。")]),a._v(" "),t("p",[a._v("加载的异步模块文件会执行 "),t("code",[a._v("webpackJsonpCallback")]),a._v(" 函数，把异步模块加载到主文件中。")]),a._v(" "),t("p",[a._v("所以后续可以像同步模块一样，直接使用 "),t("code",[a._v('__webpack_require__("**.js")')]),a._v(" 加载异步模块。")]),a._v(" "),t("h1",{attrs:{id:"文件监听原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件监听原理"}},[a._v("#")]),a._v(" 文件监听原理")]),a._v(" "),t("p",[a._v("发现源码发生改变时，自动重新构建出新的输出文件")]),a._v(" "),t("p",[a._v("缺点：每次需要手动刷新浏览器")]),a._v(" "),t("p",[a._v("原理：轮询判断文件的最后编辑时间是否变化，初次构建是把文件的修改时间储存起来，下次有修改时会和上次的修改时间做比对，发现不一致时，不会立即告诉监听者，而是缓存起来，等 "),t("code",[a._v("aggregateTimeout")]),a._v(" 后，把变更列表一起构建，并生成到 bundle 文件夹")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("export "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 默认为 false，也就是不开启")]),a._v("\n  watch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  watchOptions"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 默认为空，不监听的文件夹或文件，支持正则匹配")]),a._v("\n    ignore"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("node_modules")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 监听到变化发生后会等 300ms，再去执行，默认 300ms")]),a._v("\n    aggregateTimeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 判断文件是否发生变化的轮询在1s内发生的次数")]),a._v("\n    poll"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h1",{attrs:{id:"webpack-热更新原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-热更新原理"}},[a._v("#")]),a._v(" webpack 热更新原理")]),a._v(" "),t("p",[a._v("Webpack 的热更新也称热替换（Hot Module Replacement），这个机制可以做到不用刷新浏览器而将变更的模块替换掉旧的模块。")]),a._v(" "),t("p",[a._v("相对于手动刷新页面，HMR 的优势在于可以保存应用的状态，提高开发效率。")]),a._v(" "),t("ol",[t("li",[a._v("webpack 构建的项目，分为 server 端和 client 端，项目启动时，双方会保持一个 socket 连接用于通话")]),a._v(" "),t("li",[a._v("当本地资源发生变化时，server 向浏览器发送新资源的 hash 值，浏览器调用 reloadApp 方法，检查是否有变化，有差异会向 server 发起 ajax 获取更改内容（文件列表、hash），这样浏览器继续借助这些信息向 server 端发起请求，通过 jsonp 的方式获取 chunk 的增量更新")])]),a._v(" "),t("h1",{attrs:{id:"文件指纹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹"}},[a._v("#")]),a._v(" 文件指纹")]),a._v(" "),t("p",[a._v("文件指纹是指打包后输出的文件后缀")]),a._v(" "),t("ul",[t("li",[a._v("Hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改")]),a._v(" "),t("li",[a._v("Chunkhash：和 webpack 打包的 chunk 有关，不同的 entry 会生成不同的 chunkhash")]),a._v(" "),t("li",[a._v("Contenthash：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变")])]),a._v(" "),t("p",[a._v("js 文件指纹设置：")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  entry"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    app"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./src/app.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    search"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./src/search.js'")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  output"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[name][chunkhash:8].js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" __dirname "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/dist'")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("css 文件指纹设置：")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MiniCssExtractPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[name][contenthash:8].css'")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ExtractTextPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'[name][contenthash].css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("图片文件指纹设置 file-loader 或 url-loader 的 name，使用 hash")]),a._v(" "),t("h1",{attrs:{id:"webpack-如何保证各个-loader-的执行顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-如何保证各个-loader-的执行顺序"}},[a._v("#")]),a._v(" webpack 如何保证各个 loader 的执行顺序")]),a._v(" "),t("p",[a._v("通过配置 "),t("code",[a._v("module.rules")]),a._v(" 中的 enforce 字段，将 loader 分为 "),t("code",[a._v("preLoader")]),a._v("、"),t("code",[a._v("postLoader")]),a._v(" 和 "),t("code",[a._v("loader")]),a._v(" 三种，执行顺序为 pre -> loader -> inline -> post。")]),a._v(" "),t("p",[a._v("pre 代表所有正常 loader 之前执行，post 是所有 loader 之后执行，inline 官方不推荐使用")]),a._v(" "),t("h1",{attrs:{id:"代码分割的意义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码分割的意义"}},[a._v("#")]),a._v(" 代码分割的意义")]),a._v(" "),t("p",[t("strong",[a._v("用可接受的服务器性能压力增加来换取更好的用户体验")])]),a._v(" "),t("ul",[t("li",[a._v("复用的代码抽离到公共模块，解决代码冗余")]),a._v(" "),t("li",[a._v("公共模块再按照使用的页面多少（或其他思路）进一步拆分，用来减小文件体积，顺便优化首屏速度")])]),a._v(" "),t("p",[a._v("拆分原则：")]),a._v(" "),t("p",[a._v("如何拆分因项目而异，但是普遍使用的原则：")]),a._v(" "),t("ul",[t("li",[a._v("业务代码和第三方库代码分离打包，实现代码分割")]),a._v(" "),t("li",[a._v("业务代码中的公共业务模块提取打包到一个模块")]),a._v(" "),t("li",[a._v("首屏相关模块单独打包")])])])}),[],!1,null,null,null);s.default=r.exports}}]);