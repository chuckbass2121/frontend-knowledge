(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{444:function(e,t,a){"use strict";a.r(t);var s=a(6),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"零距离接触-websocket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#零距离接触-websocket"}},[e._v("#")]),e._v(" 零距离接触 WebSocket")]),e._v(" "),a("h2",{attrs:{id:"什么是-websocket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-websocket"}},[e._v("#")]),e._v(" 什么是 WebSocket")]),e._v(" "),a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[e._v("#")]),e._v(" 定义")]),e._v(" "),a("p",[e._v("WebSocket 是一个持久化的网络通信协议，可以在单个 TCP 连接上进行 "),a("strong",[e._v("全双工通讯")]),e._v(" ，没有了 "),a("strong",[e._v("Request")]),e._v(" 和 "),a("strong",[e._v("Response")]),e._v(" 的概念，两者地位完全平等，连接一旦建立，客户端和服务端之间可以实时进行双向数据传输。")]),e._v(" "),a("h3",{attrs:{id:"关联和区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联和区别"}},[e._v("#")]),e._v(" 关联和区别")]),e._v(" "),a("h4",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[e._v("#")]),e._v(" HTTP")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("HTTP 是非持久协议，客户端想知道服务端的处理进度只能通过长轮询或者是 long poll 的方式，但是前者对服务器压力大，后者则会因为一直等待响应造成阻塞。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2308134eee1949129438e15b945792b9~tplv-k3u1fbpfcp-zoom-1.image?imageslim",alt:"img"}})])]),e._v(" "),a("li",[a("p",[e._v("虽然 http1.1 默认开启了 keep-alive 长连接保持了这个 TCP 通道使得在一个 HTTP 连接中可以发送多个请求，接受多个响应，但是一个请求只能有一个响应，而且这个响应也是被动的，不能主动发起。")])]),e._v(" "),a("li",[a("p",[e._v("WebSocket 虽然是独立于 HTTP 的一种协议，但是 WebSocket 必须依赖 HTTP 协议进行一次握手（在握手阶段是一样的），我手成功后，数据就直接从 TCP 通道传输，与 HTTP 无关了，可以用一张图理解两者有交集，但并不是全部。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93f1390c965f4bb28f97eeced69652d0~tplv-k3u1fbpfcp-zoom-1.image?imageslim",alt:"img"}})])])]),e._v(" "),a("h4",{attrs:{id:"socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socket"}},[e._v("#")]),e._v(" socket")]),e._v(" "),a("ol",[a("li",[e._v("socket 也被称为套接字，与 HTTP 和 WebSocket 不一样，socket 不是协议，它是在程序层面上对传输层协议（可以主要理解为 TCP / IP）的接口封装。可以理解为一个能够提供端对端的通信的调用接口（API）。")]),e._v(" "),a("li",[e._v("对于程序员而言，其需要在 A 端创建一个 socket 实例，并为这个实例提供其所要连接的 B 端的 IP 地址和端口号，而在 B 端创建另一个 socket 实例，并且绑定本地端口号来进行监听。当 A 和 B 建立连接后，双方就建立了一个端对端的 TCP 连接，从而可以进行双向通信。WebSocket 借鉴了 socket 的思想，为客户端和服务端之间提供了类似的双向通信机制。")])]),e._v(" "),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[e._v("#")]),e._v(" 应用场景")]),e._v(" "),a("p",[e._v("WebSocket 可以做弹幕、消息订阅、多玩家游戏、协同编辑、股票基金实时报价、视频会议、在线教育、聊天室等应用实时监听服务端变化。")]),e._v(" "),a("h2",{attrs:{id:"webcocket-握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webcocket-握手"}},[e._v("#")]),e._v(" WebCocket 握手")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("WebSocket 握手请求报文")]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token property"}},[e._v("GET")]),e._v(" /chat HTTP/1.1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Host:")]),e._v(" server.example.com\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Upgrade:")]),e._v(" websocket\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" Upgrade\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Key:")]),e._v(" x3JJHMbDL1EzLkh9GBhXDw==\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Protocol:")]),e._v(" chat, superchat\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Version:")]),e._v(" 13\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Origin:")]),e._v(" http://example.com\n")])])]),a("p",[e._v("下面是与传统 HTTP 报文不同的地方：")]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Upgrade:")]),e._v(" websocket\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" Upgrade\n")])])]),a("p",[e._v("表示发起的是 WebSocket 协议")]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Key:")]),e._v(" x3JJHMbDL1EzLkh9GBhXDw==\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Protocol:")]),e._v(" chat, superchat\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Version:")]),e._v(" 13\n")])])]),a("p",[a("code",[e._v("Sec-WebSocket-Key")]),e._v(" 是由浏览器随机生成的，验证是否可以进行 WebSocket 通信，防止恶意或者无意的连接；")]),e._v(" "),a("p",[a("code",[e._v("Sec-WebSocket-Protocol")]),e._v(" 是用户自定义的字符串，用来标识服务所以需要的协议；")]),e._v(" "),a("p",[a("code",[e._v("Sec-WebSocket-Version")]),e._v(" 表示支持的 WebSocket 版本。")])]),e._v(" "),a("li",[a("p",[e._v("服务端响应")]),e._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[e._v("HTTP/1.1 101 \nSwitching Protocols\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Upgrade:")]),e._v(" websocket\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Connection:")]),e._v(" Upgrade\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Accept:")]),e._v(" HSmrc0sMlYUkAGmm5OPpG2HaGWk=\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("Sec-WebSocket-Protocol:")]),e._v(" chat\n")])])]),a("p",[e._v("101 响应码 表示要转换协议。")]),e._v(" "),a("p",[a("code",[e._v("Connection: Upgrade")]),e._v(" 表示升级新协议请求。")]),e._v(" "),a("p",[a("code",[e._v("Upgrade: websocket")]),e._v(" 表示升级为 WebSocket 协议。")]),e._v(" "),a("p",[a("code",[e._v("Sec-WebSocket-Accept")]),e._v(" 是经过服务器确认，并加密过后的 "),a("code",[e._v("Sec-WebSocket-Key")]),e._v(" ，用来证明客户端和服务端之间能够进行通信了。")]),e._v(" "),a("p",[a("code",[e._v("Sec-WebSocket-Protocol")]),e._v(" 表示最终使用的协议。")])])]),e._v(" "),a("p",[e._v("至此，客户端和服务器握手成功建立了 WebSocket 连接，HTTP 已经完成了他所有工作，接下来就是完全按照 WebSocket 协议进行通信。")]),e._v(" "),a("h2",{attrs:{id:"关于-websocket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-websocket"}},[e._v("#")]),e._v(" 关于 WebSocket")]),e._v(" "),a("h3",{attrs:{id:"websocket-心跳"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket-心跳"}},[e._v("#")]),e._v(" WebSocket 心跳")]),e._v(" "),a("p",[e._v("可能会有某些未知情况导致 socket 断开，而客户端和服务端却不知道，需要客户端定时发送一个 "),a("strong",[e._v("心跳 ping")]),e._v(" 让服务端知道自己在线，服务端也需要回复一个 "),a("strong",[e._v("心跳 pong")]),e._v(" 告诉客户端自己可用，否则视为断开。")]),e._v(" "),a("h3",{attrs:{id:"websocket-状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket-状态"}},[e._v("#")]),e._v(" WebSocket 状态")]),e._v(" "),a("p",[e._v("WebSocket 对象中的 readyState 属性有四种状态：")]),e._v(" "),a("ul",[a("li",[e._v("0：表示正在连接")]),e._v(" "),a("li",[e._v("1：表示连接成功，可以通信了")]),e._v(" "),a("li",[e._v("2：表示连接正在关闭")]),e._v(" "),a("li",[e._v("3：表示连接已经关闭，或者打开连接失败")])])])}),[],!1,null,null,null);t.default=r.exports}}]);