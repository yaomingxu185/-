/*
109  如果需要匹配包含文本的元素，用下面哪种方法来实现？
            A    text()
            B    contains()
            C    input()
            D    attr(name)
        正确答案: B
        解释：
            text()是jQuery中的方法，可是设置或返回被选元素的文本内容
            ：contains选择器，选取包含指定字符串的元素，字符串也可以是文本
            :input()选择器，选取表单元素
            attr(name,value)属性操作，设置或返回被选元素的属性和属性值
110  关于跨域问题下面说法正确的是？（）
            A    可以利用flash的http请求，来处理跨域问题
            B    通过iframe设置document.domain可以实现跨域
            C    一般情况下，m.toutiao.com可以ajax请求www.toutiao.com域名下的接口并获得响应
             D   通过jsonp方式可以发出post请求其他域名下的接口
        正确答案: B 
        解释：
            javascript中实现跨域的方式总结
            第一种方式：jsonp请求；jsonp的原理是利用<script>标签的跨域特性，可以不受限制地从其他域中加载资源，类似的标签还有<img>.
            第二种方式：document.domain；这种方式用在主域名相同子域名不同的跨域访问中
            第三种方式：window.name；window的name属性有个特征：在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，
            每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的，并不会因新页面的载入而进行重置。
            第四种方式：window.postMessage；window.postMessages是html5中实现跨域访问的一种新方式，可以使用它来向其它的window对象发送消息，
            无论这个window对象是属于同源或不同源。
            第五种方式：CORS；CORS背后的基本思想，就是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是应该失败。
            第六种方式：Web Sockets；web sockets原理：在JS创建了web socket之后，会有一个HTTP请求发送到浏览器以发起连接。取得服务器响应后
            ，建立的连接会使用HTTP升级从HTTP协议交换为web sockt协议。
            JSONP的优点是：它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制；它
            的兼容性更好，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支
            持；并且在请求完毕后可以通过调用callback的方式回传结果。
            JSONP的缺点则是：它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域
            HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。
111  angularjs1中指令中的compile参数是在什么时候运行的？
            A    在生成DOM前扫描并生成
            B    在生成DOM中扫描并生成
             C   在生成DOM后扫描并生成
             D   以上都不是
        正确答案: C 
        解释：
            angularJS肯定是在DOM节点树生成后开始管理节点的，生成后寻找ng-app标记，然后其下属所有节点均由ng来管理。使用compile可以改变
            原始的dom,在ng创建原始dom实例以及创建scope实例之前. ng-repeat就
            是一个最好的例子,它就在是compile函数阶段改变原始的dom生成多个原始dom节点,然后每个又生成element实例.
112  在浏览器控制台执行以下代码，输入的结果是（）
        function test(){
            var n = 4399
            function add(){
                n++
                console.log(n)
            }
            return {n:n,add:add}
        }
        var result = test()
        var result2 = test()
        result.add()
        redult.add()
        console.log(result.n)
        result2.add()
            A    4400 4401 4399 4400
            B    4400 4401 4401 4402
            C    4400 4400 4399 4400
             D   4400 4401 4399 4402
             E   4400 4401 4401 4400
        正确答案: A 
        解释：
            test构成了一个闭包，result跟result2各自有自己的test作用域，所以最后result2.add()结果是4400
            前两个没啥好说的，懵逼点在第三个，这里{n：n}是对变量n里的值进行缓存，而不是本身n这个指针变量，
            这样生成add的时候n指向的值是多少{n：n}里的值就是多少
113  angularjs1中的$apply()的作用是？
            A    手动绑定外部数据
            B    格式化数据
            C    使方法生效
             D   发送消息给其它controller
        正确答案: C
        解释：
            $apply 是为了让angularJS内部没有在$digest状态当中的代码块进入到$digest当中，从而实现双向数据绑定。所谓$digest就是angularjs 
            检测数据更新的方式。 例如setTimeout这类延迟函数angularjs不会去去自动运行$digest来绑定数据。从而无法实现其效果（仅是双向数据绑定效果）
            一般安全使用方法：
            if($scope.$$phase){  //返回$digest状态
                $scope.$apply
            }
            详细：我博客：http://www.hank-chan.com/blog/?p=162
114  var a = [1,4,5,2,9];
下面求a中最大值正确的是
            A    Math.max(a)
            B    Array.max(a)
            C    Math.max.call(null,a)
             D   Math.max.apply(null,a)
            E    以上均不是
        正确答案: D
        解释：
            答案是D。 使用apply方法，方法有两个参数，用作 this 的对象和要传递给函数的参数的数组。
            （http://www.w3school.com.cn/js/pro_js_inheritance_implementing.asp） 可以为方法指定调用对象
            与传入参数，并且可以让传入的参数以数组的形式组织。 Math.Max.Apply(Math,tmp); 也可以写成 Math.Max.Apply({},tmp);的简写形式
115  下面的 JSX 代码中，哪一个无法达到预期的效果？
            A    <h2>Hello World</h2>
            B    <input type=”checkbox”/>
            C    <div class=”msg-box”>{msg}</div>
             D   <label htmlFor=”name”>Leo</label>
             D   <div style={{height: 50}}></div>
            E    <img src={imgSrc}/>
        正确答案: C
        解释：
            选c class是js关键字，这里要用className。对于E选项，在jsx中直接写行内样式时不能采用引号，而是style={{color:'red'}}的方式。
            选择C,在jsx里面,要把class换成className才能正确编译,表示样式.
            <script type="text/babel">
                ReactDOM.render(
                    <h1 className="aa">菜鸟教程</h1>,
                    document.getElementById('example')
                );
            </script>
            E是对的.
            在react里面的jsx,style={ } 里面填写的是一个js对象.其中样式里面可以不写px,然后编译转换的时候会自动加上.
            如果要加px,应该是fontSize: '100px',加单引号
            <script type="text/babel">
                ReactDOM.render(
                <h1 style = { {
                    fontSize: 100,
                    color: '#FF0000'
                }}>菜鸟教程</h1>,
                document.getElementById('example')
                );
                </script>
116  若需给子scope发送消息，需使用哪个方法
            A    $emit()
            B    $broadcast()
            C    $on()
             D   $send()
        正确答案: B
        解释：
            http://www.tuicool.com/articles/qIBNve 
            Angular 的知识，没有$send.
            $emit只能向parent controller传递event与data
            $broadcast只能向child controller传递event与data
            $on用于接收event与data
117  angularjs1中使用指令，绑定监听是在什么时候？
            A    compiles时
            B    link时
            C    require时
             D   生成DOM时
        正确答案: B
        解释：
            为了解决AngularJS性能问题，编译阶段应分为两个阶段
            1,compile (绑定DOM)   
            2,link（数据绑定）。
118  如何规避javascript多人开发函数重名问题。
        A    根据不同的开发人员实现的功能，在函数名加前缀
        B    每个开发人员都把自己的函数封装到类中，然后调用的时候即使函数名相同，但是因为是要类.函数名来调用，所以也减少了重复的可能性
         C   以上都不正确
        正确答案: A B 
        解释：
            这个不需要解释






*/