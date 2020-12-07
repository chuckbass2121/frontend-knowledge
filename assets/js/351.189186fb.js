(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{583:function(t,s,a){"use strict";a.r(s);var v=a(6),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),a("p",[t._v("常见的 7 种时间复杂度")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("O(1)")]),t._v(" 常数复杂度")]),t._v(" "),a("li",[a("code",[t._v("O(log n)")]),t._v(" 对数复杂度")]),t._v(" "),a("li",[a("code",[t._v("O(n)")]),t._v(" 线性时间复杂度")]),t._v(" "),a("li",[a("code",[t._v("O(n^2)")]),t._v(" 平方")]),t._v(" "),a("li",[a("code",[t._v("O(n^3)")]),t._v(" 立方")]),t._v(" "),a("li",[a("code",[t._v("O(2^n)")]),t._v(" 指数")]),t._v(" "),a("li",[a("code",[t._v("O(n!)")]),t._v(" 阶乘")])]),t._v(" "),a("blockquote",[a("p",[t._v("最简单判断时间复杂度的方法：查看当前函数执行的次数")])]),t._v(" "),a("p",[t._v("我们不需要考虑常数系数，即")]),t._v(" "),a("p",[a("code",[t._v("O(2n) === O(n)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/LaamGinghong/pics/master/img/20200904213919.png",alt:"时间复杂度曲线"}})]),t._v(" "),a("p",[t._v("所以，我们在写程序的时候，需要严格的考虑时间空间复杂度。")]),t._v(" "),a("h2",{attrs:{id:"计算-1-2-3-4-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算-1-2-3-4-n"}},[t._v("#")]),t._v(" 计算 1 + 2 + 3 + 4 + ... + n")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("从 1 到 n 的循环累加")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("因为进行了 n 次循环，所以时间复杂度是 "),a("code",[t._v("O(n)")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("求和公式 "),a("code",[t._v("sum = n * (n + 1) / 2")])]),t._v(" "),a("p",[t._v("程序只执行了一次，所以时间复杂度是 "),a("code",[t._v("O(1)")]),t._v("。")])])]),t._v(" "),a("h2",{attrs:{id:"面试四要素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试四要素"}},[t._v("#")]),t._v(" 面试四要素")]),t._v(" "),a("ol",[a("li",[t._v("首先和面试官确认题目的意思")]),t._v(" "),a("li",[t._v("想尽所有可能解决的方案")]),t._v(" "),a("li",[t._v("比较各个方法之间的时间和空间复杂度，找出最优的解决方案")]),t._v(" "),a("li",[t._v("测试结果")])]),t._v(" "),a("h2",{attrs:{id:"递归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归"}},[t._v("#")]),t._v(" 递归")]),t._v(" "),a("blockquote",[a("p",[t._v("核心：理解递归直线了多少次。")])]),t._v(" "),a("p",[t._v("方法：利用递归的执行顺序，画出递归的树形结构，称之为递归状态树。")]),t._v(" "),a("h3",{attrs:{id:"求斐波那契数列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#求斐波那契数列"}},[t._v("#")]),t._v(" 求斐波那契数列")]),t._v(" "),a("blockquote",[a("p",[t._v("递推公式："),a("code",[t._v("F(n) = F(n - 1) + F(n - 2)")])])]),t._v(" "),a("p",[t._v("分析最简单的解决方案：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/LaamGinghong/pics/master/img/20200904215438.png",alt:""}})]),t._v(" "),a("p",[t._v("我们可以看到两个现象：")]),t._v(" "),a("ol",[a("li",[t._v("每多展开一层，节点数比上一层多一倍，所以大概判断在第 n 层的节点数为 2 ^ n 次方个，呈指数型增长；")]),t._v(" "),a("li",[t._v("各层之间的节点存在重复出现的节点 ，所以有非常多的冗余数据")])]),t._v(" "),a("h2",{attrs:{id:"主定理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主定理"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%B8%BB%E5%AE%9A%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("主定理"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("任何递归、分治的方法都可以使用主定理来计算时间复杂度")]),t._v(" "),a("p",[t._v("主要有下面四种情况：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/LaamGinghong/pics/master/img/20200904215657.png",alt:""}})]),t._v(" "),a("p",[t._v("翻译成中文：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("算法")]),t._v(" "),a("th",[t._v("时间复杂度")]),t._v(" "),a("th",[t._v("递推公式")]),t._v(" "),a("th",[t._v("解释")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("二分查找")]),t._v(" "),a("td",[a("code",[t._v("O(logn)")])]),t._v(" "),a("td",[a("code",[t._v("T(n) = T(n / 2) + O(1)")])]),t._v(" "),a("td",[t._v("每次都一分为二，越分越小")])]),t._v(" "),a("tr",[a("td",[t._v("二叉树遍历")]),t._v(" "),a("td",[a("code",[t._v("O(n)")])]),t._v(" "),a("td",[a("code",[t._v("T(n) = 2 * T(n / 2) + O(1)")])]),t._v(" "),a("td",[t._v("每次都一分为二，但是每一边都是相等的时间复杂度")])]),t._v(" "),a("tr",[a("td",[t._v("排序二维矩阵二分查找")]),t._v(" "),a("td",[a("code",[t._v("O(n)")])]),t._v(" "),a("td",[a("code",[t._v("T(n) = 2 * T(n / 2) + O(logn)")])]),t._v(" "),a("td",[t._v("一维二分查找的平方")])]),t._v(" "),a("tr",[a("td",[t._v("归并排序")]),t._v(" "),a("td",[a("code",[t._v("O(nlogn)")])]),t._v(" "),a("td",[a("code",[t._v("T(n) = 2 * T(n / 2) + O(n)")])]),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题"}},[t._v("#")]),t._v(" 面试题")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("二叉树的前序、中序、后序遍历的时间复杂度")]),t._v(" "),a("p",[a("code",[t._v("O(n)")]),t._v("：二叉树的每个节点有且仅访问一次")])]),t._v(" "),a("li",[a("p",[t._v("图的遍历时间复杂度")]),t._v(" "),a("p",[a("code",[t._v("O(n)")]),t._v("：图中的每个节点有且仅访问一次")])]),t._v(" "),a("li",[a("p",[t._v("搜索算法：DFS（深度优先）、BFS（广度优先） 时间复杂度是多少？")]),t._v(" "),a("p",[t._v("都是 "),a("code",[t._v("O(n)")]),t._v("，因为每个节点都只复杂一次。")])]),t._v(" "),a("li",[a("p",[t._v("二分查找的时间复杂度")]),t._v(" "),a("p",[a("code",[t._v("O(logn)")])])])]),t._v(" "),a("h1",{attrs:{id:"空间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[t._v("#")]),t._v(" 空间复杂度")]),t._v(" "),a("p",[t._v("关键点：")]),t._v(" "),a("ol",[a("li",[t._v("数组的长度")]),t._v(" "),a("li",[t._v("递归的深度")])])])}),[],!1,null,null,null);s.default=_.exports}}]);