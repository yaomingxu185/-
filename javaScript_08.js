/*
59  下面关于DNS说法正确的是（）
            A    DNS的作用是域名和IP地址的相互映射
            B    DNS协议大多数运行在UDP协议之上
            C    DNS协议端口号为53
            D    DNS的默认缓存时间为1小时
        正确答案: B C 
        解释：
            A：DNS就是将域名翻译成IP地址。
            B：主要用UDP，但是当请求字节过长超过512字节时用TCP协议，将其分割成多个片段传输。
            C：DNS协议默认端口号是53。
            D：操作系统的DNS缓存：windows DNS缓存的默认值是 MaxCacheTTL，它的默认值是86400s，也就是一天。macOS 严格遵循DNS协议中的TTL。
            游览器的DNS缓存：chrome对每个域名会默认缓存60s；IE将DNS缓存30min；Firefox默认缓存时间只有1分钟；Safari约为10S。
            ＝>综上所述，选择BC。
60  下面关于IE、FF下面脚本的区别描述错误的是？
            A    innerText IE支持，FIREFOX不支持
            B    document.createElement FIREFOX支持，IE不支持
            C    setAttribute('class'，'styleClass') FIREFOX支持，IE不支持
            D    用setAttribute设置事件 FIREFOX不支持，IE支持
        正确答案: A B D
        解释：
            A描述正确，请参考这里 http://w3help.org/zh-cn/causes/SD9017
            B描述错误，请参考这里 http://w3help.org/zh-cn/causes/SD9010
            C描述正确，请参考这里 http://w3help.org/zh-cn/causes/SD9006
            D选项描述不清楚，其实都可以的，只是形式不同，具体参考这里 http://w3help.org/zh-cn/causes/SD9006
            可以看到，在 IE8(S) Firefox Chrome Safari Opera 中，结果符合规范。而在 IE6 IE7 IE8(Q) 中，无法通过 setAttribute 
            方法传入一段代码字符
            串设置一个元素的内联事件，而必须传入一个 function 类型的对象；获取一个已有的内联事件的属性值也是 function 类型，而不
            是规范中的字符串类型
61 在jquery中指定一个类，如果存在就执行删除功能，如果不存在就执行添加功能，下面哪一个是可以直接完成该功能的？
            A    removeClass()
            B    deleteClass()
            C    toggleClass(class)
            D    addClass()
        正确答案: C 
        解释:
            toggleClass() 对设置或移除被选元素的一个或多个类进行切换。
            该方法检查每个元素中指定的类。如果不存在则添加类，如果已设置则删除之。这就是所谓的切换效果。
            不过，通过使用 "switch" 参数，您能够规定只删除或只添加类。
            c 切换
            a 删除
            d 增加
            b 不是
62  ng-style是做什么用的？
            A    给元素绑定样式
            B    给元素绑定类名
            C    给元素绑定监听
            D    显示隐藏
        正确答案: A 
        解释:
            ng-style用来绑定元素的css样式，其表达式的返回值为一个js对象，键为css样式名，值为该样式对应的合法取值。 ng-class用来给元素绑定类名, 
            ng-show和ng-hide表示元素显隐控制,
63  javascript中document.getElementById的返回值的类型为（）
            A    Array
            B    Object
            C    String
            D    Function
        正确答案: B
        解释:
            ementById() 方法可返回对拥有指定 ID 的第一个对象的引用。W3C的官方解释
64  打开名为 "window2" 的新窗口的 JavaScript 语法是？
            A    open.new("http://www.w3school.com.cn","window2")
            B    new.window("http://www.w3school.com.cn","window2")
            C    new("http://www.w3school.com.cn","window2")
            D    window.open("http://www.w3school.com.cn","window2")
        正确答案: D 
        解释:
            open() 方法可以查找一个已经存在或者新建的浏览器窗口。
            语法：
            window.open([URL], [窗口名称], [参数字符串])
            参数说明:
            URL：可选参数，在窗口中要显示网页的网址或路径。如果省略这个参数，或者它的值是空字符串，那么窗口就不显示任何文档。
            窗口名称：可选参数，被打开窗口的名称。
                1.该名称由字母、数字和下划线字符组成。
                2."_top"、"_blank"、"_selft"具有特殊意义的名称。
                _blank：在新窗口显示目标网页
                _self：在当前窗口显示目标网页
                _top：框架网页中在上部窗口中显示目标网页
                3.相同 name 的窗口只能创建一个，要想创建多个窗口则 name 不能相同。
                4.name 不能包含有空格。
            参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
65  下面给定的代码中， myFunc() 返回什么？
        var foo=’foo’;
        var bar=’bar’;
        function myFunc() {
        return foo+bar;
        }
抛出异常，超出访问范围
            A    undefined
            B    foobar
            C    foo+bar
            D    NaN
        正确答案: C
        解释:
            默认情况下，即标准模式下，当函数里面的变量没有定义时候会调用全局变量，所以"foo"+"bar"等于“foobar”。
            如果是严格模式下就不是这样了，严格模式下会说变量undefined
66  1==true的返回值是true，这句话是否正确？
            A    正确
            B    错误
        正确答案: A
        解释:
            看到很多说的类型转化其实有点错误，并不是把1转化成true，而是把true转化成1。
            在==的隐式转化中，是对两边进行Number(),
            Number(true) = 1
            == 操作符：先转类型，再比较；
            Boolean值和数值比较，先将Boolean值转为数值，true转为1，false转为0
67  下面符合一个有效的javascript变量定义规则的是？
            A    _$te$t2
            B    with
            C    a bc
            D    2a
        正确答案: A  
        解释:
            A正确;
            B是关键字；
            C有空格；
            D开头为数字；
            第一个字符必须是一个 ASCII 字母（大小写均可），或一个下划线(_)。注意第一个字符不能是数字。 
            后续的字符必须是字母、数字或下划线。  
            变量名称一定不能是 保留字。 
            JavaScript的命名规则：
            1.必须以字母或者下划线开头，中间可以是.。数字、字母、下划线。
            2.变量名不能包含空格、加号、减号等符号。
            3.不能使用JavaScriot中的关键字。
            4.JavaScript的变量名是严格区分大小写的。
68  AngularJS1中指定控制器的是哪个指令？
            A    ng-route
            B    ng-template
            C    ng-model
            D    ng-controller
        正确答案: D  
        解释:
            ng-route  自带路由
            ng-template 寄存方式
            ng-model 指令绑定了 HTML 表单元素到 scope 变量中
            ng-controller 指定控制器





*/