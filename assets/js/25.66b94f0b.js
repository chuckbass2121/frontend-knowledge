(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{236:function(t,s,e){t.exports=e.p+"assets/img/https.8ad4e92a.png"},601:function(t,s,e){"use strict";e.r(s);var l=e(6),a=Object(l.a)({},(function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"https-握手过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#https-握手过程"}},[t._v("#")]),t._v(" HTTPS 握手过程")]),t._v(" "),l("ol",[l("li",[t._v("服务端将自己的公钥登录至数字证书认证机构，数字证书认证机构用自己的私钥对服务端公钥署数字签名；")]),t._v(" "),l("li",[t._v("客户端发出 HTTPS 请求，请求服务端建立 SSL / TLS 连接；")]),t._v(" "),l("li",[t._v("服务端接收到 HTTPS 请求，将申请到的数字证书和服务端公钥一同返回给客户端；")]),t._v(" "),l("li",[t._v("客户端在接收到服务端公钥后，数字证书认证机构利用提前植入到浏览器的认证公钥，向数字证书认证机构认证公钥证书上的数字签名，确认服务器公钥的真实性；")]),t._v(" "),l("li",[t._v("认证通过之后，客户端随机生成通信使用的密钥，然后使用服务端公钥对密钥进行加密，返回给服务端；")]),t._v(" "),l("li",[t._v("服务端收到加密内容后，通过服务端私钥进行非对称解密，得到客户端密钥，至此双方都获得了对称加密的密钥；")]),t._v(" "),l("li",[t._v("之后，双方使用密钥进行对称加密通信。")])]),t._v(" "),l("p",[l("img",{attrs:{src:e(236),alt:""}})])])}),[],!1,null,null,null);s.default=a.exports}}]);