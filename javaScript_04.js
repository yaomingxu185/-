/*
25 在ECMAScript6 中,promise的状态有（）
            A    Pending
            B    Pause
            C    Resolved
            D    Rejected
        正确答案: A C D 
        解释：
            一个promise可能有三种状态：等待（pending）、已完成Resolved(已完成，又称Fulfilled）、已拒绝（rejected）
            一个promise的状态只可能从“等待”转到“完成”态或者“拒绝”态，不能逆向转换，同时“完成”态和“拒绝”态不能相互转换
            promise必须实现then方法（可以说，then就是promise的核心），而且then必须返回一个promise，同一个promise的then可以调用多次，
            且回调的执行顺序跟它们被定义时的顺序一致
            then方法接受两个参数，第一个参数是成功时的回调，在promise由“等待”态转换到“完成”态时调用，另一个是失败时的回调，
            在promise由“等待”态转换到“拒绝”态时调用。同时，then可以接受另一个promise传入，也接受一个“类then”的对象或方法，即thenable对象。
26  给网页添加javascript的方式有
            A    使用script标签，将javascript代码写到<script></script>之间
            B    添加外部javascript文件
            C    使用行内javascript
            D    使用@import引入javascript文件
        正确答案: A B C
        解释：
                A正确。使用script标签，将javascript代码写到<script></script>之间， 例子：<scriptype="text/javascript"> document.write("Hello World!");</script>
               B 正确。加外部javascript文件 <script src="xxx.js"></script>
               C 正确。行内js——javascript:return void(null)或javascript:return confirm("……");
               D 错误。查阅了资料，import用于引入css，js暂未发现这种用法。
                onclick="javascript:void(0)"就是行内javascript
27  以下关于History对象的属性或方法描述正确的是（ ）
            A    go表示刷新当前页面。
            B    back回到浏览器载入历史URL地址列表的当前URL的前一个URL。
            C    forward转到浏览器载入历史URL地址列表的当前URL的下一个URL。
            D    length保存历史URL地址列表的长度信息。
        正确答案: B C D 
        解释：
            length      返回浏览器历史列表中的URL数量
            back()      加载 history 列表中的前一个URL
            forward() 加载 history 列表中的下一个URL
            go()         加载history列表中的某个具体页面。
28  解释型语言的特性有什么？
            A    非独立
            B    效率低
            C    独立
            D    效率高性
        正确答案: A B
        解释：
            解释性语言和编译性语言的定义：
            计算机不能直接理解高级语言，只能直接理解机器语言，所以必须要把高级语言翻译成机器语言，计算机才能执行高级语言编写的程序。
            翻译的方式有两种，一个是编译，一个是解释。两种方式只是翻译的时间不同。

            解释性语言的定义：
            解释性语言的程序不需要编译，在运行程序的时候才翻译，每个语句都是执行的时候才翻译。这样解释性语言每执行一次就需要逐行翻译一次，效率比较低。
            现代解释性语言通常把源程序编译成中间代码，然后用解释器把中间代码一条条翻译成目标机器代码，一条条执行。

            编译性语言的定义：
            编译性语言写的程序在被执行之前，需要一个专门的编译过程，把程序编译成为机器语言的文件，比如exe文件，以后要运行的话就不用重新翻译了，
            直接使用编译的结果就行了（exe文件），因为翻译只做了一次，运行时不需要翻译，所以编译型语言的程序执行效率高。

            非独立：JavaScript语言依赖执行环境，对于客户端来说是浏览器，对于服务端来说是node。
            效率低：执行前不需要编译，执行时才编译，因此效率低。
29  下列代码，页面打开后能够弹出alert(1)的是？
            A    <iframe src=”javascript: alert(1)”></iframe>
            B    <img src=”” onerror=”alert(1)”/>
            C    IE下<s style=”top:expression(alert(1))”></s>
            D    <div onclick=”alert(1)”></div>
        正确答案: A B C
        解释：
            A 加载页面的时候触发；
            B onerror   事件 当图片不存在时,将触发；
            C 在ie 7下会连续弹出， IE5及其以后版本支持在CSS中使用expression，用来把CSS属性和Javascript表达式关联起来，这里的CSS属性可以是元素固有的属性，
            也可以是自定义属性。就是说CSS属性后面可以是一段Javascript表达式，CSS属性的值等于Javascript表达式计算的结果。 在表达式中可以直接引用元素自身的
            属性和方法，也可以使用其他浏览器对象。这个表达式就好像是在这个元素的一个成员函数中一样。
            参考资料 http://www.blueidea.com/tech/site/2006/3705.asp
            D 不可以,因为div里没有内容，盒子的宽度为0所以点击不了的；
30  下列JS框架中，下列不包含开箱即用的 UI 控件和小部件的是（ ）
            A    MooTools
            B    ExtJS
            C    jQuery
            D    YUI
        正确答案: A C
        解释：
            Yahoo! User Interface  库  (YUI)  包含一个  bucketload 。
            和  YUI  一样， ExtJS  包含大量开箱即用的组件，其中有很多功能强大的网格控件，支持内联编辑、分页、筛选、分组、汇总、缓冲和数据绑定。
            MooTools  和  Prototype 、 jQuery  不包含开箱即用的  UI  控件和小部件.
            因此答案应该是AC
31  Web客户端的编程语言JavaScript源自Java，其功能是Java SE的子集。
            A    对
            B    错
        正确答案: B 
        解释：
            雷锋(java)和雷锋塔(javascript)。雷锋塔(javascript)不是雷锋(java)的。
32  JavaScript 有下列哪些原始类型？
            A    String
            B    全部都是
            C    Number
            D    Boolean
        正确答案: B
        解释：
            ECMAScript中有5种简单数据类型（也称为基本数据类型）：Undefined、Null、Boolean、Number
            l和String。还有1种复杂数据类型Object，Object本质上是由一组无序的名值对组成的。ECMAScript
            支持任何创建自定义类型的机制，而所有值最终都将是上述6种数据类型之一。
            数据类型应该分大小写啊，大写是数据类型，小写是值啊
33  下面有关javascript常见事件的触发情况，描述错误的是？
            A    onmousedown：某个鼠标按键被按下
            B    onkeypress：某个键盘的键被按下或按住
            C    onblur：元素获得焦点
            D    onchange：用户改变域的内容
        正确答案: C
        解释：
            onBlur:当失去输入焦点后产生该事件
            onFocus:当输入获得焦点后，产生该文件
            onchange:当文字值改变时，产生该事件
            onselect:当文字加亮后，产生该事件
            onClick：当组件被点击时产生的事件
34  JavaScript中document.getElementById的返回值的类型为？
            A    Array
            B    Object
            C    String
            D    Function
        正确答案: B
        解释：
            根据元素ID值返回元素节点对象，通过该对象可以获取结点的属性和内容
35  下面哪一个是JSON数据？
                ｛name:"xiaoming",age,"student"｝
                ｛"name":"xiaoming","age":"student"｝
                ｛"xiaoming","student"｝
                ["xiaoming","student"]
        正确答案: B
        解释：
            json中key也是个字符串，要加引号。
            key和value之间是用：号来表示的
36  下面有关浏览器中使用js跨域获取数据的描述，说法错误的是？
            A    域名、端口相同，协议不同，属于相同的域
            B    js可以使用jsonp进行跨域
            C    通过修改document.domain来跨子域
             D   使用window.name来进行跨域
        正确答案: A 
        解释：
            只要 协议 、 域名 、 端口 有任何一个 不同, 都被当作是 不同 的域。
            1.CORS
            CORS（Corss-Origin Resource Sharing,跨资源共享），基本思想是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应的成功或失败。即给请求附加一个额外的Origin头部，其中包含请求页面的源信息（协议、域名和端口），以便服务器根据这个头部决定是否给予响应。
            2.document.domain
            将页面的document.domain设置为相同的值，页面间可以互相访问对方的JavaScript对象。
            注意：
            不能将值设置为URL中不包含的域；
            松散的域名不能再设置为紧绷的域名。
            3.图像Ping
            var img=new Image();
            img.onload=img.onerror=function(){
            ... ...
            }
            img.src="url?name=value";
            请求数据通过查询字符串的形式发送，响应可以是任意内容，通常是像素图或204响应。
            图像Ping最常用于跟踪用户点击页面或动态广告曝光次数。
            缺点：
            只能发送GET请求；
            无法访问服务器的响应文本，只能用于浏览器与服务器间的单向通信。
            4.Jsonp
            var script=document.createElement("script");
            script.src="url?callback=handleResponse";
            document.body.insertBefore(script,document.body.firstChild);
            JSONP由两部分组成：回调函数和数据
            回调函数是接收到响应时应该在页面中调用的函数，其名字一般在请求中指定。
            数据是传入回调函数中的JSON数据。
            优点：
            能够直接访问响应文本，可用于浏览器与服务器间的双向通信。
            缺点：
            JSONP从其他域中加载代码执行，其他域可能不安全；
            难以确定JSONP请求是否失败。
            5.Comet
            Comet可实现服务器向浏览器推送数据。
            Comet是实现方式：长轮询和流
            短轮询即浏览器定时向服务器发送请求，看有没有数据更新。
            长轮询即浏览器向服务器发送一个请求，然后服务器一直保持连接打开，直到有数据可发送。发送完数据后，浏览器关闭连接，随即又向服务器发起一个新请求。其优点是所有浏览器都支持，使用XHR对象和setTimeout()即可实现。
            流即浏览器向服务器发送一个请求，而服务器保持连接打开，然后周期性地向浏览器发送数据，页面的整个生命周期内只使用一个HTTP连接。
            6.WebSocket
            WebSocket可在一个单独的持久连接上提供全双工、双向通信。
            WebSocket使用自定义协议，未加密的连接时ws://；加密的链接是wss://。
            var webSocket=new WebSocket("ws://");
            webSocket.send(message);
            webSocket.onmessage=function(event){
            var data=event.data;
            ... ....
            }
            注意：
            必须给WebSocket构造函数传入绝对URL；
            WebSocket可以打开任何站点的连接，是否会与某个域中的页面通信，完全取决于服务器；
            WebSocket只能发送纯文本数据，对于复杂的数据结构，在发送之前必须进行序列化JSON.stringify(message))。
            优点：
            在客户端和服务器之间发送非常少的数据，减少字节开销。












































*/