/*
119  下面属于javascript基本数据类型的有？
            A    字符串
            B    数字
            C    null
            D    undefined
        正确答案: A B C D
        解释：
            js七种数据类型：Sting  Object  null  undefined  Array  Boolean  Number
            js五种基本类型：String Boolean Number null undefined
            typeof六种返回格式：'string'  'number'  'object'  'function'  'boolean'  'undefined'
120  以下哪些是javascript的基本数据类型（）
            A    String
            B    Number
            C    Undefined
            D    Date
        正确答案: A B C
        解释：
            JavaScript中的数据类型有：
                字符串、数字、布尔、数组、对象、Null、Undefined
121  哪一个是javascript中array的正确写法？
            A    var txt = new Array("tim","kim","jim")
            B    var txt = new Array="tim","kim","jim"
            C    var txt = new Array:1=("tim")2=("kim")3=("jim")
            D    var txt = new Array(1:"tim",2:"kim",3:"jim")
        正确答案: A 
        解释：
            创建 Array 对象的语法
            var arr=[1,2,3];     
            var arr=new Array(1,2,3);     
            var arr=new Array(12);     如果只有一个数，代表数组的length是12个
            var arr=new Array(0);     清空数组
122  在文档上输出  "Hello World" 的正确 Javascript 语法是？
             A   ("Hello World")
             B   "Hello World"
             C   response.write("Hello World")
             D   document.write("Hello World")
        正确答案: D 
        解释：
            c是写入
            123  angularjs1使用了mvc进行web开发，其中控制层一般用什么语言来定义
            javascript
            html
            css
            jquery
        正确答案: A 
        解释：
            mvc：model对应html  view对应css control对应JavaScript
124  在 javascript 中，不属于基本类型的是
            A    date
            B    number
            C    null
            D    undefined
             E   string
             F   boolean
        正确答案: A
        解释：
            JS里的类型有null, undefine, string, number, boolean, symbol和object。其中前6个是基础数据类型，而object是复杂数据类型。
125  ng-class是做什么用的？
            A    给元素绑定样式
            B    给元素绑定类名
            C    给元素绑定监听
            D    显示隐藏
        正确答案: B 
        解释：
            给元素绑定样式 ng-style  
            给元素绑定类名  ng-class
            eg:用法①：<div ng-class="{'A':isA,'B':isB,'C':isC}"></div> 
                    用法②：<div   ng-class = "{{A}}" > </ div >  
            给元素绑定监听 ng-click等
            显示隐藏   ng-show  ng-hide
126  蔺相如，司马相如；魏无忌，长孙无忌。下列哪一组对应关系与此类似()
            A    PHP，Python
            B    JSP，servlet
            C    Java，Javascript
            D    C，C++
        正确答案: C
        解释：
            蔺相如 和 司马相如，都有 相如
            魏无忌 和 长孙无忌 都有 无忌
            名字里面由重复地方，但没有什么关系
            但是 D 选项 C 和 C plus plus ，后者是对前者的进阶版，不是很贴切
127  下列代码
        var person={fname:"John",lname:"Doe",age:25};
        var txt="";
        for (x in person)
        {
        txt=txt + person[x];
        }
        alert(txt);
输出为？
            A    JohnDoe25
            B    fname:"John",lname:"Doe",age:25
            C    fname:John,lname:Doe,age:25
            D    fnamelnameage
        正确答案: A 
        解释：
            for-in语句，用来枚举person对象的属性。
            for-in语句能够枚举对象的自定义属性和原型链属性，而hasOwnProperty只能获取自定义的属性
            for in 中 x代表key值，所以取出的值为value
128  页面有一个按钮button id为 button1，通过原生的js 设置背景色为红色？
            A    document.getElementById('button1').style.backgroundColor="red";
            B    document.getElementById('button1').style.backgroundcolor="red";
            C    document.getElementById('button1').style.backGroundColor="red";
            D    document.getElementById('button1').style.bgcolor="red";
        正确答案: A 
        解释：
            bgcolor是标签属性，只有body和table tr td 元素有该属性，可以设置背景颜色，其他标签使用bgcolor没有效果
            使用js改变bgcolor 的语句为
            document.body.bgColor="red"; 或
            document.getElementById(“table tr td 元素的id”).bgColor="red";
            D选项有三个地方错了：1.button没有bgcolor属性；2.不应该用style ；3.bgcolor中的c应该大写。
            在 HTML 4.01 中，不赞成使用 body 元素的 bgcolor 属性；在 XHTML 1.0 Strict DTD 中，不支持 body 元素的 bgcolor 属性。
            请使用 CSS 代替。
129  下列关于 JavaScript 的说法中正确的是（）
             A   所有变量在使用之前必须做声明
             B   JavaScript是面向对象的程序设计语言
             C   JavaScript是解释性语言
             D   JavaScript前身是Oak语言
        正确答案: C  
        解释：
            A、是错误的，JS的语法要求不是很严格，而且是弱类型的语言（声明变量没有具体类型），而且用之前不声明也没关系。 
            B、不完全正确，所谓面向对象，一定要有“封装、继承、多态”3大特征，JS貌似支持的不是很好 
            C、是正确的，JS文件在完成之后，不会经过任何的编译。而是在运行时去解释执行。最好的例子就是，JS中一个函数有语法的错误，但是不会因为这个局部的错误而影响其他函数运行。 
            D、Java的前身是Oak语言，Java和Javascript不一样
130  在标准的 JavaScript 中， Ajax 异步执行调用基于下面哪一个机制才能实现？
                A    Event和callback
                B    多线程操作
                C    多CPU核
                D    Deferral和promise
        正确答案: A
        解释：
            可以看一下这篇文章http://www.alloyteam.com/2014/05/javascript-promise-mode/
131  在jquery中，如果想要获取当前窗口的宽度值，下面哪个是实现该功能的？
                A    width()
                B    width(val)
                 C   width
                 D   innerWidth()
        正确答案: A 
        解释：
                alert($(window).height()); //浏览器当前窗口可视区域高度 
                alert($(document).height()); //浏览器当前窗口文档的高度 
                alert($(document.body).height());//浏览器当前窗口文档body的高度 
                alert($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin 
                alert($(window).width()); //浏览器当前窗口可视区域宽度 
                alert($(document).width());//浏览器当前窗口文档对象宽度 
                alert($(document.body).width());//浏览器当前窗口文档body的高度 
                alert($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin 

*/