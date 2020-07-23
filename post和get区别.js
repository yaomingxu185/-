// post和get区别：
//      GET请求的参数是放在URL里的，POST请求参数是放在请求Request body中；
//      GET请求的URL传参有长度限制，而POST请求没有长度限制；
//      GET请求的参数只能设置URL编码，因为是ASCK||编码，而POST请求传参没有这个限制；
//      GET请求只能进行url编码，而POST支持多种编码方式。
//      GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
//      GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
//      GET在浏览器回退时是无害的，而POST会再次提交请求
//      GET产生一个TCP数据包；POST产生两个TCP数据包（对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；

// 而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据））