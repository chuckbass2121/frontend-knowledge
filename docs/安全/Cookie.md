# Cookie

Cookie 是服务器保存在浏览器的一小段文本信息，一般大小不能超过4KB。浏览器每次向服务器发出请求，就会自动附上这段信息。

1. Cookie 与 HTTP 协议

- 后端通过 Set-Cookie设置Cookie 返回给浏览器

    ```
  HTTP/2.0 200 OK
  Content-Type: text/html
  Set-Cookie: yummy_cookie=choco; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly SameSite; 
  Set-Cookie: tasty_cookie=strawberry
  
  [page content]
    
- 浏览器 通过 Cookie 头发送  
    ```
    GET /sample_page.html HTTP/1.1
    Host: www.example.org
    Cookie: yummy_cookie=choco; tasty_cookie=strawberry
    ```   

2. Cookie 的属性
- Expires
    
  过期时间，已经浏览器时间为准，所以不准确。
      
- Max-Age
  
  Cookie 存在的秒数
  
- Domain

  指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie

- Path

  指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie
    
- Secure
    
  cookie只能通过https传输

- HttpOnly
  
  cookie只能通过http传输，不能通过document读写。 

- SameSite

### 使用cookie保存登录用户凭证的几种方法
1. 用户id + id签名

服务器把 用户id 和 对用户id加密后的签名 返回给浏览器

浏览器在请求的是时候，服务器会对发送过来用户id进行相同的加密运算。

然后比较 发送过来的签名 和 计算后的签名。

相同则认证通过。

2. sessionId

相比把 userId 直接写在cookie中不同。

sessionId 可以是一个随机的数字或者字符串。

用户登录成功后设置
```js
// session 对象
var cache = {};
session.set = function(userId, obj) {
  var sessionId = Math.random();
  if(!cache[sessionId]){
    cache[sessionId] = {};
  } 
  cache[sessionId].content = obj;
}
session.get =function(sessionId) {
  return cache[sessionId] && cache[sessionId].content;
}

var sessionId = session.set(user.id, {
  userId: user.id      
})
ctx.cookies.set('sessionId', sessionId, {
  httpOnly: true,
  sameSite: 'strict'                  
})
```

验证
```js
var sessionId = ctx.cookies.get('sessionId');
var sessionObj = session.get(sessionId);
if(!sessionId || !sessionObj.userId){
  throw new Error('session 不存在'); 
}
```

### Cookie 安全策略

- 签名

- 加密

- 设置http-only 防止XSS

- 设置 sameSite 防止CSRF

- 设置 secure 






