# http1
- 每个请求都会建立一个TCP连接，效率低。

# http1.1
- 持久连接
- 管线化 （就是一个TCP连接，可以发送多个请求，但是按顺序返回）
- 新增了 `ETag`、`If-Unmodified-Since`、`If-Match` 、`If-None-Match`
- 新增了 host

# http2
- 多路复用 

  http1.1 的长连接虽然可以复用TPC连接，但是http1.1是按照顺序传输的。
  如果请求1很耗时间，请求2早就完成，要等请求完成才能返回。

- 二进制传输
- 头部压缩
- 服务端推送

# http3