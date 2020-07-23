/*
32  默认情况下，使用h1标签会形成什么效果?
            A    加粗、斜体
            B    加粗、大号文字
            C    正常粗细、正常大小文字
            D    正常粗细、大号文字
        答案: B 
        基础知识
33  meta标签可以出现在 () 中
            A    <head>
            B    <body>
            C    <title>
            D    <link>
        答案: A 
        解释：
        head标签可以包含，title、meta、link、script 等
34  下面有关html的描述，不推荐的是？
            A    在页面顶部添加 doctype声明；
            B    在 </head> … <body> 中间插入 HTML 代码；
            C    避免使用 <font> 标签；
            D    使用 <table> 元素展现学生成绩表等数据。
        答案: B
        解释：HTML代码是插入在<body>..</body>之间，因为body是页面的主体部分，我们浏览网页的时候除了标题之外的东西都是在body中呈现的
35  新窗口打开网页，用到以下哪个值（）
            A    _self
            B    _blank
            C    _top
            D    _parent
        答案: B
        解释：
        在html中通过<a>标签打开一个链接，通过 <a> 标签的 target 属性规定在何处打开链接文档。
        如果在标签<a>中写入target属性，则浏览器会根据target的属性值去打开与其命名或名称相符的 框架<frame>或者窗口.
        在target中还存在四个保留的属性值如下，
        _black          在新的窗口中打开链接
        _self           默认，在相同的框架中打开链接
        _parent         在父框架集中打开链接
        _top            在整个窗口中打开链接
        framename       在指定的框架中打开链接
36  要去掉文本超级链接的下划线，下列正确的是（ ）
            A    a {underline:none}
            B    a {text-decoration:no underline}
            C    a {decoration:no underline}
            D    a {text-decoration:none}
        答案: D 
        解释：CSS样式如下：
        语法：
        text-decoration : none || underline|| blink || overline|| line-through
        none :  无装饰
        blink :  闪烁
        underline :  下划线
        line-through :  贯穿线
        overline :  上划线
        所以去除文本超链接下划线语法是：a {text-decoration:none}，
37  以下关于盒子模型描述正确的是：
            A    标准盒子模型中：盒子的总宽度 ＝ 左右margin + 左右border + 左右padding + width
            B    IE盒子模型中：盒子总宽度 ＝ 左右margin + 左右border + width
            C    标准盒子模型中：盒子的总宽度 ＝ 左右margin + 左右border + width
            D    IE盒子模型中：盒子总宽度 ＝ width
        答案: A
        解释：
        IE盒子模型和标准盒子模型都是由四个部分组成的：margin,border,padding,content这四个部分！！！
        不同的是在标准盒子模型中content是一个独立的部分不包含其他部分！！但是在IE盒子模型中content包含了border,padding,是一个总体的概念
38  HTML 语言中，表格有多少对 <TR> 标签就表示有多少列，这句话是否正确？
        答案: 错误
        解释：table中，tr表示“行” ，td表示的是‘列’
39  列表分为两类，一是无序列表，一是有序列表，以下哪个是无序列表？
            A    <UL>
            B    <OL>
            C    <DIR>
            D    <DL>
        答案: A
        解释：
        ul li 无序列表  ol li 有序列表
        ul 无序列表 呈现加粗原点。可以通过list-style-type none消除。
        ol呈现为1-数字的有序列表
        dl 呈现自定义带开头的列表 td dd
40  下列描述错误的是（）
            A    HTTP状态码302表示暂时性转移
            B    domContentLoaded事件早于onload事件
            C    IE6/7/8不支持事件捕获
            D    localStorage存储的数据，在刷新页面后会消失
        答案: D 
        解释：
        HTTP状态码302表示被请求的资源暂时转移(Moved temporatily)，然后会给出一个转移后的URL，而浏览器在处理服务器返回的302错误时，原则上会重新建立一个TCP连接，然后再取重定向后的URL的页面；但是如果页面存在于缓存中，则不重新获取；
        onload事件触发时，页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了，domContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。
        sessionStorage：存储特定于某个会话的数据，该数据只保留到浏览器关闭。
        localStorage：在HTML5中作为持久保持客户端数据的方案取代了globalStorage。它不能被指定访问规则，要访问localStorage，页面必须来自同一个域名，使用同一种协议，在同一个端口上。它的数据也保留到通过JavaScript删除或用户清除浏览器缓存。
41  以下几组标签中全部符合 HTML5 标准的是：
            A    <section><audio><video>
            B    <address><svg><aside>
            C    <nav><image><footer>
            D    <fieldset><canvas><pre>
        答案: A  
        解释：
        HTML5中常用的新特性：
        canvas元素：用于定义图形（图表等），只是图形容器，必须使用脚本来绘制图形。
        audio：用于音频播放。
        video：用于视频播放。
        article：规定独立的自包含内容。
        header：定义文档的页眉，介绍相关信息。
        section：定义文档中的节。
        footer：定义文档的页脚，通常有文档的作者、版权信息、联系方式等。
        nav：定义导航链接。
        表单控件：
        calender
        date
        tim
        email
        url
        search
42  基于以下 HTML 结构，判断浏览器会发送多少个图片请求
            <head>
                <style>
                    #bg{
                        background-url('/img/bg.png');
                    }
                    #test{
                        background-url('/img/test.png');
                        display:none;
                    }
                </style>
            </head>
            <body>
                <div id="test"></div>
                <img src= "/img/thumbnail.png" alt="">
                <img src="/img/arrow.png" style="visibility;hidden;" alt=""> 
            </body>
            A    6
            B    0
            C    4
            D    3
        答案: D
        解释：
        1. 只要是img src引用的都会请求；
        2. background: url()所属样式如果挂靠在某个元素上，就一定会请求；单独写了这么一个样式并不请求。
        所以这道题目中，只有#bg不请求。
43  读取 localStorage 数据的方法是：
            A    localStorage.getItem(“键值”);
            B    localStorage.loadItem(“键名”);
            C    localStorage.loadItem(“键值”);
            D    localStorage.getItem(“键名”);
        答案: D
        解释：
        写入字段有三种方式：
        localStorage["a"]=1;
        localStorage.b=1;
        localStorage.setItem("c",3);
        读取字段也有三种方式：
        var a= localStorage.a;
        var b= localStorage["b"];
        var c= localStorage.getItem("c");


*/
