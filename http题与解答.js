/*
1,关于HTTP协议说法错误的是（D）
 A HTTP报文分为请求报文和响应报文
 B GET请求没有请求正文
 C HTTP请求方法在服务器中即使部分实现了，考虑到安全问题，也不一定会用
 D 请求头的后面的空行可有可无
 2，关于 HTTP 协议，下列说法错误的是（C）
 A HTTP 是无状态协议
 B HTTP 是应用层协议
 C HTTP 是基于二进制的协议
 D HTTP 状态码 200 表示成功
 拓展：
一、什么是HTTP？
    HTTP是超文本传输协议，HTTP是基于TCP/IP的关于数据如何在万维网中如何通信的协议
二、HTTP特点？
 （1）HTTP是无状态协议；
 （2）HTTP是web服务使用的协议；
 （3）HTTP是基于TCP协议的；
 （4）HTTP的通信方式是客户端-服务器模式，即C/S模式
 （5）HTTP是应用层协议。
三、HTTP的报文格式
  HTTP的报文有两种，分别是请求报文和响应报文
    1.请求报文(请求行/请求头/请求数据/空行)
        请求行
            请求方法字段、URL字段和HTTP协议版本
            例如：GET /index.html HTTP/1.1
                get方法将数据拼接在url后面，传递参数受限
            请求方法：
                GET、POST、HEAD、PUT、DELETE、OPTIONS、TRACE、CONNECT
        请求头(key value形式)
            User-Agent：产生请求的浏览器类型。
            Accept：客户端可识别的内容类型列表。
            Host：主机地址
        请求数据
            post方法中，会把数据以key value形式发送请求
        空行
            发送回车符和换行符，通知服务器以下不再有请求头
    2.响应报文(状态行、消息报头、响应正文)
        http响应由三个部分组成分别是状态行，响应头，响应正文。
    （1）状态行是：HTTP-Version+Status-Code+Reason-Phrase （分别表示http版本 + 状态码 + 状态代码的文本描述）
         比如：HTTP/1.1 200 ok
   
         状态码：
             1xx 指示信息–表示请求已接收，继续处理
            2xx 成功–表示请求已被成功接收、理解、接受
            3xx 重定向–要完成请求必须进行更进一步的操作。
            4xx  客户端错误–请求有语法错误或请求无法实现。
            5xx  服务器端错误–服务器未能实现合法的请求。
    （2）响应头：包含服务器类型，日期，长度，内容类型等
        Server:Apache Tomcat/5.0.12
        Date:Mon,6Oct2003 13:13:33 GMT
        Content-Type:text/html
        Last-Moified:Mon,6 Oct 2003 13:23:42 GMT
        Content-Length:112

    （3）响应正文响应正文就是服务器返回的HTML页面或者json数据
 
    例如请求数据：

    1 GET/sample.jspHTTP/1.1
    2 Accept:image/gif.image/jpeg,
    3 Accept-Language:zh-cn
    4 Connection:Keep-Alive
    5 Host:localhost
    6 User-Agent:Mozila/4.0(compatible;MSIE5.01;Window NT5.0)
    7 Accept-Encoding:gzip,deflate
    8
    9 username=jinqiao&password=1234

    第一行为http请求行，包含方法，URI 和http版本
    2-7为请求头，包含浏览器，主机，接受的编码方式和压缩方式
    第8行表示一个空行 表示请求头结束 这个空行是必须的
    第9行是数据体，比如是需要查询的信息。
    */