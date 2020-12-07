(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{475:function(e,t,n){"use strict";n.r(t);var s=n(6),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html")]),e._v(" "),n("p",[e._v("npm 脚本的原理非常简单。每当执行npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。")]),e._v(" "),n("p",[e._v("因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。")]),e._v(" "),n("p",[e._v("比较特别的是，npm run新建的这个 Shell，会将当前目录的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。")]),e._v(" "),n("p",[e._v("这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。")]),e._v(" "),n("p",[e._v("比如，当前项目的依赖里面有 Mocha，只要直接写mocha test就可以了。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('"test": "mocha test"\n')])])]),n("p",[e._v("而不用写成下面这样。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('"test": "./node_modules/.bin/mocha test"\n')])])]),n("p",[e._v("由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。")]),e._v(" "),n("p",[e._v("npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是0，npm 就认为这个脚本执行失败。")])])}),[],!1,null,null,null);t.default=l.exports}}]);