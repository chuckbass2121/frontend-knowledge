(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{296:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ol",[a("li",[t._v("升级node webpack")]),t._v(" "),a("li",[t._v("exclude不需要转换的文件")]),t._v(" "),a("li",[t._v("尽量使用官方plugin")]),t._v(" "),a("li",[t._v("配置resolve")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import child from 'child' 可以不指定扩展名。")]),t._v("\n    extensions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.jsx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import child from 'child' 实际上是import child from '..src/a/b/c/child' ")]),t._v("\n    alias"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        child"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../src/a/b/c/child'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("第三方模块打包放到dll文件夹\n在代码中引用dll文件夹下的包，而不是引用node_modeules中的。")])]),t._v(" "),a("p",[t._v("在webpack中需要使用AddAssetHtmlWebpackPlugin， webpack.DllReferencePlugin， webpack.DllPlugin")]),t._v(" "),a("p",[t._v("webpack.DllPlugin: 生成xxx.dll.js的manifest.json(影射文件)")]),t._v(" "),a("p",[t._v("webpack.DllReferencePlugin： 引用manifest.json")]),t._v(" "),a("p",[t._v("AddAssetHtmlWebpackPlugin：往index.html中注入生成的 xxx.dll.js")]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[t._v("合理使用source map")])]),t._v(" "),a("li",[a("p",[t._v("借助打包分析工具")])]),t._v(" "),a("li",[a("p",[t._v("thread-loader")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);