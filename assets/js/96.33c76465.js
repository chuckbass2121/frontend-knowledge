(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{285:function(s,t,a){"use strict";a.r(t);var e=a(6),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-性能优化"}},[s._v("#")]),s._v(" webpack 性能优化")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("blockquote",[a("p",[s._v("webpack 打包优化并没有什么固定的模式，一般我们常见的有话就是拆包、分块、压缩等，并不是对每一个项目都适用，针对特定项目，需要不断调试不断优化。")]),s._v(" "),a("p",[s._v("对于 webpack4，建议从零开始配置，在项目初期使用 webpack4 默认的配置。")])]),s._v(" "),a("h2",{attrs:{id:"分析打包速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析打包速度"}},[s._v("#")]),s._v(" 分析打包速度")]),s._v(" "),a("p",[s._v("优化 webpack 构建速度的第一步是知道需要将精力集中在哪里。我们可以通过 speed-measure-webpack-plugin 测量你的 webpack 构建期间各个阶段花费的时间：")]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" SpeedMeasurePlugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'speed-measure-webpack-plugin'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" smp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SpeedMeasurePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" smp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h2",{attrs:{id:"分析影响打包速度环节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析影响打包速度环节"}},[s._v("#")]),s._v(" 分析影响打包速度环节")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("开始打包，我们需要获取所有的依赖模块")])]),s._v(" "),a("p",[s._v("搜索所有的依赖模块，这需要占用一定的时间，即我们优化的第一个时间是 "),a("strong",[s._v("搜索时间")]),s._v("。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("解析所有的依赖模块（解析成浏览器可运行的代码）")])]),s._v(" "),a("p",[s._v("webpack 根据我们配置的 loader 解析相应的文件。日常开发中我们需要使用 loader 对 js、css、图片、字体等文件进行转换处理，并且转换处理的文件的数量也是十分大。由于 js 单线程的特性使得这些操作不能并发处理，而是需要一个个文件处理。")]),s._v(" "),a("p",[s._v("所以我们需要优化的第二个时间是 "),a("strong",[s._v("解析时间")]),s._v("。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("将所有依赖模块打包到一个文件")])]),s._v(" "),a("p",[s._v("将所有解析完成的代码，打包到一个文件中，为了使浏览器加载的包更小（减少白屏时间），所以 webpack 会对代码进行优化。")]),s._v(" "),a("p",[s._v("JS 压缩时发布编译的最后阶段，时间耗费会比较久，因为压缩 JS 需要将代码解析成 AST 语法树，然后根据复杂的规则去解析和处理 AST，最后将 AST 还原回 JS。")]),s._v(" "),a("p",[s._v("所以我们需要优化的第三个时间是 "),a("strong",[s._v("压缩时间")]),s._v("。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("二次打包")])]),s._v(" "),a("p",[s._v("当我们只改动了项目中的一个小小的文件，所有文件都会重新打包，但大部分文件并没有变更。")]),s._v(" "),a("p",[s._v("所以我们需要优化的第四个时间是 "),a("strong",[s._v("二次打包时间")]),s._v("。")])])]),s._v(" "),a("h2",{attrs:{id:"优化搜索时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化搜索时间"}},[s._v("#")]),s._v(" 优化搜索时间")]),s._v(" "),a("blockquote",[a("p",[s._v("缩小文件搜索范围，减少不必要的编译工作")])]),s._v(" "),a("p",[s._v("webpack 打包时，会从配置的 entry 出发，解析入口文件的导入语句，再递归解析。")]),s._v(" "),a("p",[s._v("在遇到导入语句时，webpack 会做两件事情：")]),s._v(" "),a("ul",[a("li",[s._v("根据导入语句去寻找对应的要导入的文件；")]),s._v(" "),a("li",[s._v("根据找到要导入文件的后缀，使用配置中的 loader 去处理文件。例如：使用了 ES Next 语法需要用到 babel-loader。")])]),s._v(" "),a("p",[s._v("这两件事情一旦项目文件数量增多，速度会显著降低，所以虽然无法避免以上两件事情，但是可以尽量减少事情的发生以提高速度。")]),s._v(" "),a("ol",[a("li",[a("p",[a("strong",[s._v("优化 loader 配置")])]),s._v(" "),a("p",[s._v("使用 loader 时可以通过 test、include、exclude 三个配置项来命中 loader 要应用规则的文件；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("优化 resolve.modules 配置")])]),s._v(" "),a("p",[s._v("resolve.modules 用于配置 webpack 去哪些目录下寻找第三方模块，resolve.modules 的默认值是 ['node_modules']，含义是先去当前目录下的 ./node_modules 寻找，没有找到就去上一级目录中找，一路递归；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("优化 resolve.alias 配置")])]),s._v(" "),a("p",[s._v("resolve.alias 配置项通过别名来把原导入路径映射成新的导入路径，减少耗时的递归解析操作；")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("优化 resolve.extensions 配置")])]),s._v(" "),a("p",[s._v("在导入语句中没带文件后缀时，webpack 会根据 resolve.extensions 自动带上后缀去尝试询问文件是否存在，所以配置 resolve.extensions 应注意：")]),s._v(" "),a("ul",[a("li",[s._v("resolve.extensions 列表要尽可能小，不要把不存在的后缀添加进去；")]),s._v(" "),a("li",[s._v("高频后缀名放在前面，以便尽快退出超找过程；")]),s._v(" "),a("li",[s._v("在写代码时，尽可能带上后缀名，从而避免寻找过程。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("优化 resolve.mainFields 配置")])]),s._v(" "),a("p",[s._v("有一些第三方模块会针对不同环境提供几分代码，路径一般会写在 package.json 中。")]),s._v(" "),a("p",[s._v("webpack 会根据 mainFields 中配置去决定优先采用哪份代码，只会使用找到的第一个。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("优化 module.noParse 配置")])]),s._v(" "),a("p",[s._v("module.noParse 配置项可以让 webpack 忽略对部分没采用模块化的文件的递归处理，这样做的好处是能提高构建性能。原因是部分年代比较久远的库体积庞大且没有采用模块化标准，让 webpack 去解析这些文件没有任何意义")])])]),s._v(" "),a("h2",{attrs:{id:"优化解析时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化解析时间"}},[s._v("#")]),s._v(" 优化解析时间")]),s._v(" "),a("p",[s._v("运行在 Node.JS 上的 webpack 是单线程模式，也就是说 webpack 打包只能逐个文件处理，当文件数量比较多时，打包时间就会比较漫长，所以我们需要开启多线程来提高解析速度。")]),s._v(" "),a("h3",{attrs:{id:"thread-loader-webpack4-官方推荐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thread-loader-webpack4-官方推荐"}},[s._v("#")]),s._v(" thread-loader（webpack4 官方推荐）")]),s._v(" "),a("p",[s._v("把这个 loader 放在其他 loader 之前，放置在其之后的 loader 就会在一个单独的 worker【worker pool】池里运行，一个 worker 就是一个 Node.JS 进程，每个单独进程处理时间上限为 600ms，各个进程的数据交换也会限制在这个时间内。")]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Configuration "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Configuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'thread-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.less$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'thread-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'less-loader'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("strong",[s._v("注意：")]),s._v(" 由于工作原理的限制，thread-loader 需要放在 style-loader 之后，原因是 thread-loader 后的 loader 没法存取文件，也没法获取 webpack 的选项配置。")]),s._v(" "),a("p",[s._v("官方说每个 worker 大概都要花费 600ms，所以为了防止启动 worker 时的高延迟，提供了对 worker 池的优化："),a("strong",[s._v("预热")])]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" threadLoader "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'thread-loader'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" jsWorkerPool "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 产生的 worker 数量，默认是cpu核心数 - 1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当 require('os').cpus() 是 undefined时则为 1")]),s._v("\n  worker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 闲置时定时删除 worker 进程")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认为 500ms")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以设置为无穷大，监视模式(--watch)下可以保持 worker 持续存在")]),s._v("\n  poolTimeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" cssWorkerPool "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 一个 worker 进程中并行执行工作的数量")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认为 20")]),s._v("\n  wokerParallelJobs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  poolTimeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nthreadLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("warmup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jsWorkerPool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nthreadLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("warmup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cssWorkerPool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("**注意：**请仅在耗时的 loader 上使用")]),s._v(" "),a("h2",{attrs:{id:"优化压缩时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化压缩时间"}},[s._v("#")]),s._v(" 优化压缩时间")]),s._v(" "),a("p",[s._v("webpack 4 默认使用 terser-webpack-plugin 压缩插件压缩优化代码，该插件使用 terser 来缩小 JavaScript。")]),s._v(" "),a("h3",{attrs:{id:"terser-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terser-是什么"}},[s._v("#")]),s._v(" terser 是什么")]),s._v(" "),a("blockquote",[a("p",[s._v("官方定义：用于 ES Next 的 JavaScript 解析器、mangler/compressor（压缩器）工具包。")])]),s._v(" "),a("p",[s._v("为什么 webpack 选择 terser")]),s._v(" "),a("blockquote",[a("p",[s._v("不再维护 uglify-es，并且 uglify-js 不支持 es6+。")]),s._v(" "),a("p",[s._v("terser 时 uglify-es 的一个分支，主要保留了与 uglify-es 和 uglify-js@3 的 API 和 CLI 兼容性。")])]),s._v(" "),a("h3",{attrs:{id:"启动多进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动多进程"}},[s._v("#")]),s._v(" 启动多进程")]),s._v(" "),a("p",[s._v("使用多进程来并行运行提高构建速度，默认并发数量为 os.cspus().length - 1")]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Configuration "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" TerserPlugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'terser-webpack-plugin'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Configuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    minimizer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TerserPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        parallel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"优化二次打包时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化二次打包时间"}},[s._v("#")]),s._v(" 优化二次打包时间")]),s._v(" "),a("p",[s._v("将改动少的文件缓存起来，二次打包直接读取缓存，显著提升打包时间。")]),s._v(" "),a("p",[s._v("使用 webpack 缓存的方法有几种，例如 cache-loader，HardSourceWebpackPlugin 或 babel-loader 的 cacheDirectory 标志。这些缓存方法都有启动开销，重新运行期间在本地节省的时间很大，但是初次启动实际上会更慢。")]),s._v(" "),a("h3",{attrs:{id:"cache-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-loader"}},[s._v("#")]),s._v(" cache-loader")]),s._v(" "),a("p",[s._v("和 thread-loader 用法一样，在性能开销比较大的 loader 之前添加此 loader，以将结果缓存到磁盘")]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Configuration "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" resolve "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Configuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cache-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("loaders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    \t\tinclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"hardsourcewebpackplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardsourcewebpackplugin"}},[s._v("#")]),s._v(" HardSourceWebpackPlugin")]),s._v(" "),a("ul",[a("li",[s._v("第一次构建将花费正常时间")]),s._v(" "),a("li",[s._v("第二次构建将显著加快（大约提升 90% 的构建速度）")])]),s._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Configuration "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" HardSourceWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hard-source-webpack-plugin'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Configuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HardSourceWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);