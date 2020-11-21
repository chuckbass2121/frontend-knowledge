(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{314:function(a,t,s){"use strict";s.r(t);var e=s(6),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"graphql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graphql"}},[a._v("#")]),a._v(" Graphql")]),a._v(" "),s("h2",{attrs:{id:"什么是-graphql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-graphql"}},[a._v("#")]),a._v(" 什么是 Graphql")]),a._v(" "),s("p",[a._v("Graphql 是一种 API 查询语言。API 接口的返回值可以从静态变为动态，即调用者来声明接口返回什么数据，可以进一步解耦前后端。在 Graphql 中，预先定义好 Schema 和声明 Type 来达到动态获取接口的目的：")]),a._v(" "),s("ul",[s("li",[a._v("对接口模型的抽象通过 Type 来描述")]),a._v(" "),s("li",[a._v("对接口获取数据的逻辑是通过 Schema 来描述的")])]),a._v(" "),s("h2",{attrs:{id:"为什么要使用-graphql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用-graphql"}},[a._v("#")]),a._v(" 为什么要使用 Graphql")]),a._v(" "),s("ul",[s("li",[a._v("接口数量众多，维护成本高")]),a._v(" "),s("li",[a._v("接口扩展成本高")]),a._v(" "),s("li",[a._v("接口响应的数据格式无法预知")]),a._v(" "),s("li",[a._v("减少无用数据的请求，按需获取")]),a._v(" "),s("li",[a._v("强类型约束（API 的数据格式让前端来定义，而不是后端定义）")])]),a._v(" "),s("h2",{attrs:{id:"与-restful-相比-graphql-的优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与-restful-相比-graphql-的优势"}},[a._v("#")]),a._v(" 与 restful 相比，Graphql 的优势")]),a._v(" "),s("h3",{attrs:{id:"较少的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#较少的数据"}},[a._v("#")]),a._v(" 较少的数据")]),a._v(" "),s("p",[a._v("你所使用的大部分后段数据都是某个数据库提供的，如果你直接使用 SQL 数据库，那么便会知道，请求所需字段而非所有字段会更高效。")]),a._v(" "),s("p",[a._v("在 rest 中，几乎不可能仅仅返回所需的字段，这样的后果便是后段返回了过多无用的字段，这导致了请求体包的体积过大，而 Graphql 因为是前端规定接口返回的字段，所以可以做到所需即所得，有效的控制了请求体的大小。")]),a._v(" "),s("h3",{attrs:{id:"合并多个请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并多个请求"}},[a._v("#")]),a._v(" 合并多个请求")]),a._v(" "),s("p",[a._v("Graphql 另一个令人称赞的地方就是，它可以合并多个请求。如果你曾使用 rest，那么你可能已经习惯了“痛苦之链”：")]),a._v(" "),s("ol",[s("li",[a._v("我们需要展示一个小组，那么我们调用 "),s("code",[a._v("/team/:id")]),a._v(" 接口")]),a._v(" "),s("li",[s("code",[a._v("team")]),a._v(" 里面有一个 "),s("code",[a._v("userIds")]),a._v(" ，我们需要用这个字段去请求另一个接口 "),s("code",[a._v("/user/:id")])]),a._v(" "),s("li",[a._v("我们还想展示 user 还加入了其它哪些小组，所以我们又一次调用了 "),s("code",[a._v("/team/:id")]),a._v(" 这个接口，每个小组，每个用户一次")])]),a._v(" "),s("p",[a._v("一旦数量增多，那么我们需要发送的请求数量便会大幅度增加。")]),a._v(" "),s("p",[a._v("而在 Graphql 中，我们可以这样做达到合并请求：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" query "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\n  query TEAM_USERS {\n    team(id: $teamID) {\n      users {\n        edges {\n          node {\n            avatarURL\n            displayName\n            teams {\n              edges {\n                node {\n                  displayName\n                }\n              }\n            }\n          }\n        } \n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),a._v("\n")])])]),s("p",[a._v("如此一来可以提高性能，在单个请求中完成，而不是递归调用三个不同的查询，从而降低前端应用程序中的代码复杂度。")]),a._v(" "),s("h3",{attrs:{id:"订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#订阅"}},[a._v("#")]),a._v(" 订阅")]),a._v(" "),s("p",[a._v("Graphql 的最后一个优势是订阅 -- 进行查询或变动并自动获取更新的能力。通常，这是使用 WebSockets 在 Graphql 服务端实现的。")]),a._v(" "),s("p",[a._v("假设我们要使用 GraphQL 创建聊天应用，我们可能会执行以下的操作：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" subscription "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("\n  subscription MESSAGES() {\n    messagesSubscribe(last: 200) {\n      edges {\n        node {\n          text\n          author {\n            avatarURL\n            userName\n          }\n        }\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),a._v("\n")])])]),s("p",[a._v("在我们的应用中，"),s("code",[a._v("messagesSubscribe.edges")]),a._v(" 是一系列的消息，每次我们发送消息都会自动更新。否则我们必须很频繁发送请求，从而在短时间内产生数百个调用")]),a._v(" "),s("p",[a._v("使用订阅，建立连接后唯一传输的数据是发送和接收消息的时间（可能是建立连接本身的那一点数据）")]),a._v(" "),s("h2",{attrs:{id:"type-数据模型的抽象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-数据模型的抽象"}},[a._v("#")]),a._v(" Type（数据模型的抽象）")]),a._v(" "),s("p",[a._v("Type 可以简单分为两种：")]),a._v(" "),s("ul",[s("li",[a._v("Scalar Type（标量模型）：内建的标量包含：String、Int、Float、Boolean、Enum")]),a._v(" "),s("li",[a._v("Object Type（对象类型）：感觉类似于 TS 的接口类型")]),a._v(" "),s("li",[a._v("Type Modifier（类型修饰符）：用于表明是否必填等")])]),a._v(" "),s("h2",{attrs:{id:"schema-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema-模式"}},[a._v("#")]),a._v(" Schema（模式）")]),a._v(" "),s("p",[a._v("定义了字段的类型，数据的结构，描述了接口数据请求的规则")]),a._v(" "),s("h3",{attrs:{id:"query-查询、操作类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-查询、操作类型"}},[a._v("#")]),a._v(" Query（查询、操作类型）")]),a._v(" "),s("ul",[s("li",[a._v("query（查询）：当获取数据时，选用 Query 类型")]),a._v(" "),s("li",[a._v("mutation（更改）：当尝试修改数据时，选用 mutation 类型")]),a._v(" "),s("li",[a._v("subscription（订阅）：当希望数据更改时，可以进行消息推送，选用 subscription 类型")])]),a._v(" "),s("h2",{attrs:{id:"resolver-解析函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolver-解析函数"}},[a._v("#")]),a._v(" Resolver（解析函数）")]),a._v(" "),s("p",[a._v("提供相关 Query 所返回数据的逻辑。Query 和与之对应的 Resolver 是同名的，这样在 Graphql 才能对应起来。解析过程可能是递归的，只要遇到非标量类型，会尝试继续解析，如果遇到标量类型，那么解析完成，这个过程叫解析链")])])}),[],!1,null,null,null);t.default=r.exports}}]);