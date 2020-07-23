/*
83  关于 javascript 模块化，下列描述错误的是
            A    模块化有利于管理模块间的依赖，更依赖模块的维护
            B    主流的模块化包括CommonJS,AMD,CMD等
            C    Sea.js遵循AMD规范，RequireJS遵循CMD规范
            D    AMD推崇依赖前置，CMD推崇依赖就近
        正确答案: C 
        解释:
            AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行
            。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
            AMD也采用require()语句加载模块，但是不同于CommonJS。
            主要有两个Javascript库实现了AMD规范：require.js和curl.js。
            参考链接：http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html

            AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
            CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
            区别：
            1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。
            2. CMD 推崇依赖就近，AMD 推崇依赖前置。
            // CMD
            define(function(require, exports, module) {
            var a = require('./a')
            a.doSomething()
            // 此处略去 100 行
            var b = require('./b') // 依赖可以就近书写
            b.doSomething()
            // ... 
            })

            // AMD 默认推荐的是
            define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
            a.doSomething()
            // 此处略去 100 行
            b.doSomething()
            ...
            })
84  运行以下程序
        <script> 
            var m= 1, j = k = 0; 
            function add(n) { 
                return n = n+1; 
        　 } 
            y = add(m); 
            function add(n) { 
                return n = n + 3; 
            } 
        z = add(m); 
        </script> 
y和z的最终结果为:
            A    2,4
            B    4,4
            C    2,2
            D    报异常
        正确答案: B 
        解释:
            js里面没有函数重载的概念，在其他语言中（如java）java中，可以存在同名函数，
            只要传入的参数数量或者类型不同即可。在js中，定义了两个同名函数后，
            后面的函数会覆盖前面定义的函数。结合这道题来说，由于函数声明提升，
            所以函数声明会提前，由于存在同名函数，后面的add函数将覆盖第一个add函数，
            所以两次调用add()返回的值是相同的。也就是y,z都为4.
85  NOSCRIPT标签是做什么用的？
            A    制止脚本的运行
            B    防止区域脚本被js修改<br>(例如aDiv.innerHTML = 'something' 将会不起作用)
            C    用来定义在脚本未被执行时的替代内容
            D    NOSCRIPT 标签并不存在
        正确答案: C 
        解释:
            noscript 元素用来定义在脚本未被执行时的替代内容（文本）。
            eg:<body>  
            ...
            ...

            <script type="text/javascript">
                <!--
                document.write("Hello World!")
                //-->
            </script><noscript>Your browser does not support JavaScript!</noscript>...
            ...
            </body> 
            NOSCRIPT标签用来定义在脚本未被执行时的替代内容。也可以用在检测浏览器是否支持脚本，若不支持脚本则可以显示NOSCRIPT标签里的innerText
            noscript:用以在不支持js的浏览器中显示替代的内容，这个元素可以包含能够出现在文档<body>中任何html元素，script元素除外。包含在noscript
            元素的内容只有在下列情况下才会显示出来
            1.浏览器不支持脚本
            2.浏览器支持脚本，但脚本被禁用
86  angularjs1中control间通信最好使用什么方式？
            A    回调
            B    全局变量
            C    广播
             D   函数调用
        正确答案: C 
        解释:
            用$emit(向上)/ $broadcast(向下)和on来完成，同级控制器，就先向上emit，然后上级收到Controller在broadcast
            angular js中control间通信最好使用广播的方式
87  关于绑定变量，最正确的做法是
            A    <div>{{value}}</div>
            B    <div ng-bind="value"></div>
            C    <div ng-model="value"></div>
            D    <div ng-bind="obj.value"></div>
        正确答案: D
        解释:
            A 加载的页面，通常是应用中的index.html，其 未被渲染的模板可能会被用户看到。
            C 实现input和变量的双向绑定。
            B 和D 的区别在于其值的赋值方式，B 的赋值在ctrl 中应该是$scope.value="xxxx"，D 的赋值应该是$scope.obj.value="xxxx"，按照angular
            的用法最好是第二种定义方式，因为第一种超过2000个可能就会明显的影响性能了。我也是一知半解，不知道说清楚没有
            A 直接使用{{value}}绑定变量，会因为加载先后顺序，出现闪屏的现象，官方建议使用ng-bing
            C ng-model属于双向绑定 用于Input的输入值和变量绑定起来，不能绑定在div等标签上
            B ng-bind=”value“ 直接把变量绑定在标签上，当超过一定数量时，会出现性能问题
            D ng-bind="obj.value"，官方建议把对象的属性绑定在视图上，其次才是对象本身
88  页面有一个按钮button id为 button1，通过原生的js如何禁用？(IE 考虑IE 8.0以上版本)
            A    document.getElementById("button1").readolny= true;
            B    document.getElementById("button1").setAttribute(“readolny”,”true”);
            C    document.getElementById("button1").disabled = true;
            D    document.getElementById("button1").setAttribute(“disabled”,”true”);
        正确答案: C D
        解释:
            disabled和readOnly都是表单的公有属性， readOnly是只读， disabled是禁用。这里问的是禁用，所以是disabled。
            还有就是题目中的 readOnly写成了 readolny
            小知识点：setArrtibute在ie7以前是不能通过style和class设置属性的
89  下列函数哪些是JavaScript的全局函数？
            A    encodeURI
            B    parseFloat
            C    setTimeout
            D    eval
        正确答案: A B D 
        解释:
            setTimeout是window的一个方法，如果把window当做全局对象来看待的话，它就是全局函数。严格来讲，它不是。全局函数与内置对象的属性或方法
            不是一个概念。全局函数它不属于任何一个内置对象。
            JavaScript 中包含以下 7 个全局函数escape( )、eval( )、isFinite( )、isNaN( )、parseFloat( )、parseInt( )、unescape( )。
90  下面有关javascript内部对象的描述，正确的有？
            A    History 对象包含用户（在浏览器窗口中）访问过的 URL
            B    Location 对象包含有关当前 URL 的信息
            C    Window 对象表示浏览器中打开的窗口
            D    Navigator 对象包含有关浏览器的信息
        正确答案: A B C D
        解释:
            Navagator：提供有关浏览器的信息
            Window：Window对象处于对象层次的最顶层，它提供了处理Navagator窗口的方法和属性

            Location：提供了与当前打开的URL一起工作的方法和属性，是一个静态的对象

            History：提供了与历史清单有关的信息

            Document：包含与文档元素一起工作的对象，它将这些元素封装起来供编程人员使用



*/