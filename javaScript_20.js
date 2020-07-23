/*
165  function Foo(){
            var i=0;
            return function(){
                document.write(i++);
            }
        }
        var f1=Foo(),
        f2=Foo();
        f1();
        f1();
        f2();
        请问以上程序的输出是（）
                A    010
                B    012
                C    000
                D    011
        正确答案: A
        解释：
                这是一个闭包，闭包可以用在许多地方。它的最大用处有两个，一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中。 
                这里的局部变量i，对f1()来说是全局变量，对f2()来说也是全局变量，但是f1()的i跟f2()的i又是相互独立相互不可见的，f1()每执行一次，
                f1()的i就加一，f2（）每次执行一次，f2()的i就加油，但是相互之间不影响，因此结果是010
166  有以下ES6代码
        function * gen() {
            yield 1;
            yield 2;
            yield 3;
        }
        下面选项描述正确的是哪个？
            A    gen()执行后返回2
            B    gen()执行后返回undefined
            C    gen()执行后返回一个Generator对象
            D    gen()执行后返回1
        正确答案: C
        解释：
            function*声明 (function关键字后跟一个星号）定义了一个 生成器函数 ( generator function )，它返回一个  Generator  对象。

            也可以定义  生成器函数  使用构造函数  GeneratorFunction 和一个  function* expression
167  下面这段javascript代码, 
        var msg='hello'; 
        for (var i=0; i<10; i++)
        { 
        var msg='hello'+i*2+i; 
        }
        alert(msg); 
    最后一句alert的输出结果是？
            A    hello
            B    hello189
            C    hello30
            D    hello27
        正确答案: B
        解释：
            注意这里只是for循环不是函数，因此for内部定义的msg与for外部定义的msg为在同一块作用域，为同一个变量。
168  下面关于块内声明函数的做法哪些是正确的？
            A    if (x) {  function foo() {}}
            B    if (x) {  var foo = function() {}}
             C   if (x) {  foo = function() {}}
             D   ECMAScript明确的规范了块内函数，javascript实现了这个规范
        正确答案: B  
        解释：
            不要在块内声明一个函数（严格模式会报语法错误）。如果确实需要在块中定义函数，可以使用函数表达式来声明函数。
            http://amazeui.org/getting-started/javascript-guide?_ver=2.x
            块内声明的变量只要没加var 都算作全局变量。
            js貌似支持块级作用域，实际上只有函数作用域和全局作用域。
            JavaScript语言精粹内对全局变量有明确的批判
            A，声明一个全局匿名函数
            C，声明一个全局函数foo
            D，ES6才规定块级作用域。
169  关于 this 的工作原理，下面 4 种情况的描述哪一个是错误的？（）
            A    在全局范围内，this指向全局对象（浏览器下指window）
            B    对象函数调用时，this指向当前对象
            C    全局函数调用时，this指向全局函数
            D    使用new实例化对象时，this指向新创建的对象
        正确答案: C
        解释：
                this有四种情况！
                1)当在函数调用的时候指向widow
                2)当方法调用的时候指向调用对象
                3)当用apply和call上下文调用的时候指向传入的第一个参数
                4)构造函数调用指向实例对象
170  白屏时间first paint 和可交互时间dom ready的关系是？
           A     先触发first paint，后触发dom ready
            B    先触发dom ready，后触发first paint
            C    一起触发
            D    没关系
        正确答案: A 
        解释：
            页面的性能指标详解：

            白屏时间（first Paint Time）——用户从打开页面开始到页面开始有东西呈现为止

            首屏时间——用户浏览器首屏内所有内容都呈现出来所花费的时间

            用户可操作时间(dom Interactive)——用户可以进行正常的点击、输入等操作，默认可以统计domready时间，因为通常会在这时候绑定事件操作

            总下载时间——页面所有资源都加载完成并呈现出来所花的时间，即页面 onload 的时间
                参考http://www.cnblogs.com/chuaWeb/p/PerformanceMonitoring.html
171  你想通过 XMLHttpRequest更新以下元素，即通过div显示状态，哪个是正确的做法？
        <div id="statusCode"></div>
            A    var myDiv = document.getElementById ("statusCode"); myDiv.innerHTML = req.statusCode;
            B    var myDiv = document.getElementById ("statusCode"); myDiv.innerHTML = req.status;
            C    var myDiv = document.getElementById ("statusCode"); myDiv.setStatus (req.statusCode);
            D    var myDiv = document.getElementById ("statusCode"); myDiv.status = req.status;
        正确答案: B 
        解释：
            XMLHttpRequest对象的readyState与status的几种状态码表示的意思:

            readyState有五种状态：

            0 (未初始化)： (XMLHttpRequest)对象已经创建，但还没有调用open()方法；

            1 (载入)：已经调用open() 方法，但尚未发送请求；

            2 (载入完成)： 请求已经发送完成；

            3 (交互)：可以接收到部分响应数据；

            4 (完成)：已经接收到了全部数据，并且连接已经关闭。

            status实际是一种辅状态判断，只是status更多是服务器方的状态判断。

            关于status，由于它的状态有几十种，我只列出平时常用的几种：

            1xx——信息类，表示收到Web浏览器请求，正在进一步的处理中。如，100：客户必须继续发出请求；101：客户要求服务器根据请求转换HTTP协议版本

            2xx——成功，表示用户请求被正确接收，理解和处理。例如，200：OK；201：提示知道新文件的URL

            3xx——重定向，表示请求没有成功，客户必须采取进一步的动作。如，300：请求的资源可在多处得到；301：删除请求数据

            4xx——客户端错误，表示客户端提交的请求有错误。如，404：NOT Found，意味着请求中所引用的文档不存在。

            5xx——服务器错误，表示服务器不能完成对请求的处理。如，500，服务器产生内部错误




*/