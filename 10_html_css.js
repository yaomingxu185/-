/*
92  br标签在XHTML中语义为下面哪一项？
            A    换行
            B    强调
            C    段落
            D    标题
        答案: A 
        解释：
            <br> 可插入一个简单的换行符。
            <br> 标签是空标签（意味着它没有结束标签，因此这是错误的：<br></br>）。在 XHTML 中，把结束标签放在开始标签中，也就是 <br />。
            请注意，<br> 标签只是简单地开始新的一行，而当浏览器遇到<p>标签时，通常会在相邻的段落之间插入一些垂直的间距
93  请选出结构正确的选项
            A    <a href=www.nowcoder.com>牛客网</a>
            B    <a href="www.nowcoder.com">牛客网</a>
            C    <a href="http://www.nowcoder.com/">牛客网</a>
            D    <a href="http://www.nowcoder.com/">牛客网
        答案: C 
        解释：
            href属性值是URL，而URL里包含协议，但不一定是http协议。如果没协议就会解析为相对路径。在浏览器地址栏中不输入协议名也行是因为浏览器发现这个相对路径没东西之后自动帮你加的协议
94  通常我们在浏览器内容区看到的内容，都是放入在 () 之间
            A    <!doctype html>
            B    <html></html>
            C    <head></head>
            D    <body></body>
        答案: D 
        解释：
            A答案是声明文档类型。
            B答案是整个html文件。
            C答案是网页标题，在浏览器顶部显示、
            D答案是网页的主体部分，即浏览器的内容区域。
95  下列哪一个是页面载入时会触发什么Dom事件？
            A    onchange
            B    onaclive
            C    onload
            D    onresize
        答案: C
        解释：
            onload是加载完触发，load完毕后，会触发DOM的加载
            D是BOM的事件
            A:onchange 表单内容变化
            B:onaclive 事件是页面已经打开了，第二次 或以两次以上页面激活显示的时 候触发 C:onload 事件是页面第一次打开的时候触 发的，表示页面加载完执行的事 件 
            D:onresize 事件会在窗口或框架被调整大小 时发生（BOM对象）
96  如果一个HTML文档内含有阿拉伯文，则应该？
            A    使用utf-8编码
            B    将阿拉伯文转为图片并嵌入到文档内
            C    使用GBK编码
            D    使用iso-8859-2编码
        答案: A 
        解释：
            UTF-8（8-bit Unicode Transformation Format）是一种针对Unicode的可变长度字符编码，又称万国码。UTF-8用1到6个字节编码UNICODE字符。用在网页上可以同一页面显示中文简体繁体及其它语言（如英文，日文，韩文）。
            GBK是汉字编码，是双字节码，可表示繁体字和简体字。
97  以下全部属于块级标签的是？
            A    <div><p><input><span><img>
            B    <div><h1><p><img><dl>
            C    <span><h1><p><img><dl>
            D    <div><p><form><ul><h1>
        答案: D 
        解释：
            搜一下博客：http://www.cnblogs.com/greenal/archive/2013/01/05/2845513.html
            http://www.cnblogs.com/2050/archive/2010/08/24/1806893.html
98  CSS 样式，下面哪一个元素能够达到最大宽度，且前后各有一个换行？
            A    Block Element
            B    Square Element
            C    Side Element
            D    Box Element
        答案: A 
        解释：
            元素就分为以下三种：没有BCD所示的元素类型
            块级元素block element 、
            行内元素 inline element、
            行内块元素 inline-block element
99  CSS 盒子模型中（ ）是透明的，这部分可以显示背景（ ）
            A    padding
            B    margin
            C    border
            D    content
        答案: A
        解释：
            Margin(外边距) - 清除边框外的区域，外边距是透明的。
            Border(边框) - 围绕在内边距和内容外的边框。
            Padding(内边距) - 清除内容周围的区域，内边距是透明的。
            Content(内容) - 盒子的内容，显示文本和图像。
            Margin   
            margin清除周围的元素（外边框）的区域。margin没有背景颜色，是完全透明的
            Padding（填充）
            当元素的 Padding（填充）（内边距）被清除时，所"释放"的区域将会受到元素背景颜色的填充。
100  用于预格式化文本的标签是
            A    <meta>
            B    <pre>
            C    <mark>
            D    <small>
        答案: B
        解释：
            <meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
            <meta> 标签位于文档的头部，不包含任何内容。
            <meta> 标签的属性定义了与文档相关联的名称/值对。
            <mark> 标签定义带有记号的文本。请在需要突出显示文本时使用 <m> 标签。
            eg:<mark>milk</mark>   
                milk 
            <small>标签呈现小号字体效果。
            <pre>定义预格式文本，保持文本原有的格式
101  在 HTML 页面中，下面关于 Window 对象的说法不正确是（）
            A    Window对象表示浏览器的窗口，可用于检索有关窗口状态的信息
            B    Window对象是浏览器所有内容的主容器
            C    如果文档定义了多个框架，浏览器只为原始文档创建一个Window对象，无须为每个框架创建Window对象
            D    浏览器打开HTML文档时，通常会创建一个Window对象
        答案: C  
        解释：
            考察的是JavaScript中浏览器的Window对象。
            Window 对象表示浏览器中打开的窗口，通过Window对象的属性，比如closed属性检索窗口是否已被关闭。所以A正确。
            window对象的属性包含内容：document location navigation screen history frames forms anchors images links location applets embeds所以B正确。
            如果文档包含框架（<frame> 或 <iframe> 标签），浏览器会为 HTML 文档创建一个 window 对象，并为每个框架创建一个额外的 window 对象。所以C不正确，D正确。
102  以下描述错误的是
            A    cookie以及loaclStorage都会伴随着http请求发送到服务器
            B    get提交的url会有长度的限制，而post提交的数据则可以比较大
            C    在javascript中可以操作cookie
            D    javascript在浏览器的执行是单线程的
            E    html5中的新增存储方式包括localStorage/sessionStorage
        答案: A  
        解释：
            cookie会被Http请求携带，但 loaclstorage不会

                    特性	               |          Cookie	
                    数据的生命期	        |          一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效	除非被清除，否则永久保存	仅在当前会话下有效，关闭页面或浏览器后被清除
                    存放数据大小	        |         4K左右	一般为5MB
                    与服务器端通信	        |        每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题	仅在客户端（即浏览器）中保存，不参与和服务器的通信
                    易用性	               |       需要程序员自己封装，源生的Cookie接口不友好
            get传送的数据量较小，不能大于2KB。
            post传送的数据量较大，一般被默认为不受限制。但理论上，IIS4中最大量为80KB，IIS5中为100KB。






*/