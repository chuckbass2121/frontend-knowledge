(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{281:function(e,t,_){"use strict";_.r(t);var v=_(6),s=Object(v.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"说说微信扫码背后的实现原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说说微信扫码背后的实现原理"}},[e._v("#")]),e._v(" 说说微信扫码背后的实现原理")]),e._v(" "),_("h2",{attrs:{id:"基本技术原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本技术原理"}},[e._v("#")]),e._v(" 基本技术原理")]),e._v(" "),_("h3",{attrs:{id:"扫码登录功能到底是什么样的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#扫码登录功能到底是什么样的"}},[e._v("#")]),e._v(" 扫码登录功能到底是什么样的？")]),e._v(" "),_("p",[e._v("现在大部分手机上都有微信、qq 和淘宝这一类 APP，而这些 APP 都有对应的网页端。为了让用户在使用网页端的时候可以更安全方便，使用手机扫一扫就可以登录的服务，就显得自然而然了。")]),e._v(" "),_("p",[e._v("扫码登录时的界面效果如下：")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/561d86e36b7f4107b03e81569c87c963~tplv-k3u1fbpfcp-zoom-1.image?imageslim",alt:"img"}})]),e._v(" "),_("p",[e._v("那么，此时问题来了，我们访问某个网页，这个网页怎么就出现了这个二维码呢？有了这个二维码了，它是怎么知道是是谁扫的？")]),e._v(" "),_("h3",{attrs:{id:"二维码是怎么出现的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二维码是怎么出现的"}},[e._v("#")]),e._v(" 二维码是怎么出现的？")]),e._v(" "),_("p",[e._v("首先，用户打开网站的登录页面时，浏览器就会相对应网站服务器发送获取 "),_("strong",[e._v("登录二维码")]),e._v(" 的请求，服务器收到请求后，会随机生成一个 uuid，将这个 uuid 作为 key 存在 redis 服务器，同时设置一个过期时间，一旦过期后，用户登录二维码需要进行刷新重新获取。")]),e._v(" "),_("p",[e._v("同时将这个 key 和公司的验证字符串合并一起，通过二维码生成接口，生成一个二维码图片，然后将二维码的 url 和 uuid 一同返回给客户端。")]),e._v(" "),_("p",[e._v("例如，对于某个登录的网页（我打开的是力扣的微信登录地址），我们习惯性地打开了浏览器的开发者工具，我发现当我在登录页面停滞一小会（大概30秒样子），请求链接会不断发生变化，如下图所示：")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e9201b75bde42758839ecbcffe3004c~tplv-k3u1fbpfcp-zoom-1.image?imageslim",alt:"img"}})]),e._v(" "),_("p",[e._v("其中就有一个 uuid，伴随着链接的更新而自增变化。这就很好解释了上文，服务端会通过这个 uuid 调用相关接口来返回给浏览器一个二维码。")]),e._v(" "),_("p",[e._v("所以，二维码是谁生成的呢？别急，继续分析：")]),e._v(" "),_("ul",[_("li",[e._v("当用户打开网站后，网站后台根据微信 "),_("code",[e._v("OAuth2.0")]),e._v(" 协议向微信开发平台请求授权登录，并传递事先在微信开发平台中审核通过的 AppID 和 AppSecrect 等参数；")]),e._v(" "),_("li",[e._v("微信开发平台对 AppID 等参数进行验证，并向网站后台返回二维码；")]),e._v(" "),_("li",[e._v("网站后台将二维码传送至网站前端进行显示。")])]),e._v(" "),_("p",[e._v("原来，还有微信开发平台参与，由它来生成我们的二维码，OK，我们接着下一个问题的思考。")]),e._v(" "),_("h3",{attrs:{id:"怎么知道是我扫了这个二维码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#怎么知道是我扫了这个二维码"}},[e._v("#")]),e._v(" 怎么知道是我扫了这个二维码？")]),e._v(" "),_("p",[e._v("上文我们了解到了二维码的生成，并且在将 uuid 作为 key 存入了 redis 服务器，那么只有这个 key，哪里来的用户相关信息呢？")]),e._v(" "),_("p",[e._v("上文我们获取了网页二维码，现在来到了用户扫这个二维码的时候了，当用户拿出手机扫描二维码，就可以得到一个验证信息和一个 uuid。由于手机端已经进行过了登录，在访问手机端的服务器时，参数都会携带一个用户的 token，手机端服务器可以从中解析到用户的 userId（这里从 token 中取值而不是直接手机端传 userId 是为了安全，直接传 userId 可能会被截取修改，token 是加密的，被修改的风险会小很多）。")]),e._v(" "),_("p",[e._v("手机端将解析到的数据和微信账号绑定，向微信开发平台发送 "),_("strong",[e._v("登录验证请求，")]),e._v(" 微信开发平台验证绑定数据，调用网站后台的回调接口，发送授权临时票据 code，如果授权成功，返回一个确认信息给手机端。")]),e._v(" "),_("p",[e._v("手机端收到返回后，将 "),_("strong",[e._v("登录确认框")]),e._v(" 显示给用户（防止用户误操作，同时使登录更人性化）。用户确认是进行登录操作后，手机再次发送请求。服务器拿到 uuid 和 userId 后， "),_("strong",[e._v("将用户的 userId 作为 value 存入 redis 中以 uuid 为 key 的键值对中。")])]),e._v(" "),_("ul",[_("li",[e._v("网站后台接收到 code，表明微信开发平台同意数据请求；")]),e._v(" "),_("li",[e._v("网站后台根据 code 参数，再加上 AppID 和 AppSecret 请求微信开发平台换取 access_token；")]),e._v(" "),_("li",[e._v("微信开发平台验证参数，并返回 access_token；")]),e._v(" "),_("li",[e._v("网站后台收到 access_token 后即可进行参数分析获取用户账号数据。")])]),e._v(" "),_("p",[e._v("这里，我们就拿到了用户相关信息：")]),e._v(" "),_("ul",[_("li",[e._v("AppID：应用唯一标识，在微信开放平台提交应用审核通过后获得；")]),e._v(" "),_("li",[e._v("AppSecret：应用密钥，在微信开发平台提交应用审核通过后获得；")]),e._v(" "),_("li",[e._v("code：授权临时票据，第三方通过 code 进行获取 access_token 的时候需要用到，code 的超时时间为 10 分钟，一个 code 只能成功换取一次 access_token 即失效。code 的临时性和一次性保障了微信授权登录的安全性；")]),e._v(" "),_("li",[e._v("access_token：用户授权第三方应用发起接口调用的凭证。")])]),e._v(" "),_("p",[e._v("整个过程从网站后台向微信开发平台请求授权登录开始，最终目的是为了 access_token。")]),e._v(" "),_("p",[e._v("在获得了 access_token 后就可以解析用户的一些基本信息，包括头像、用户名、性别、城市等，这样一来，整个微信扫描登录的过程就完成了。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66d463b6ee1f4f72b7367eb7ab2aa1d8~tplv-k3u1fbpfcp-zoom-1.image?imageslim",alt:"img"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);