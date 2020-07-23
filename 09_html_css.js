/*
81  HTML5 中不再支持下面哪个元素？
            A    <q>
            B    <ins>
            C    <menu>
            D    <font>
        答案: D 
        解释：
            HTML5不再支持<font>标签；
            HTML5中，
            <q>标签定义一个短的引用；
            <ins>标签定义文档的其余部分之外的插入文本；
            <menu>标签定义菜单列表。当希望列出表单控件时使用该标签（HTML4不支持该标签）
82  关于屏幕的尺寸标准，说法错误的是
            A    col-sm-* 一般用于大于768的平板
            B    col-md-* 一般用于大于992的中等屏幕显示器
            C    col-lg-*用于大于1200的桌面显示器
            D    col-xs-*用于小于700的手机屏幕
        答案: D
        解释：
            超小屏幕（手机）|	小屏幕（平板）|	中等屏幕（桌面）|     大屏幕（桌面）
            <768px	      |     >=768       |  >=992        |        >=1200
            .col-xs-      |     .col-sm-    |    .col-md-   |        .col-lg-
83  放在HTML里的哪一部分JavaScripts会在页面加载的时候被执行?
            A    文件头部位置
            B    文件尾
            C    <head>标签部分
            D    <body>标签部分
        答案: D 
        解释：
            在HTML body部分中的JavaScripts会在页面加载的时候被执行。 
            在HTML head部分中的JavaScripts会在被调用的时候才执行。
            head 部分中的脚本: 需调用才执行的脚本或事件触发执行的脚本放在HTML的head部分中。当你把脚本放在head部分中时，可以保证脚本在任何调用之前被加载。
            body 部分中的脚本: 当页面被加载时执行的脚本放在HTML的body部分。放在body部分的脚本通常被用来生成页面的内容。
84  下列说法错误的是：
            A    在Blink和WebKit的浏览器中，某个元素具有3D或透视变换（perspective transform）的CSS属性，会让浏览器创建单独的图层。
            B    我们平常会使用left和top属性来修改元素的位置，但left和top会触发重布局，取而代之的更好方法是使用translate，这个不会触发重布局。
            C    移动端要想动画性能流畅，应该使用3D硬件加速，因此最好给页面中的元素尽量添加translate3d或者translateZ(0)来触发3D硬件加速。
            D    解决浏览器渲染的性能问题时，首要目标就是要避免层的重绘和重排。
        答案: C
        解释：
            非常详细的解释： https://segmentfault.com/a/1190000000490328#articleHeader4
85  当margin-top、padding-top的值是百分比时，分别是如何计算的？
            A    相对父级元素的height，相对自身的height
            B    相对最近父级块级元素的height，相对自身的height
            C    相对父级元素的width，相对自身的width
            D    相对最近父级块级元素的width，相对最近父级块级元素的width
        答案: D
        解释：
            可以对元素的margin设置百分数，百分数是相对于父元素的width计算，不管是margin-top/margin-bottom还是margin-left/margin-right。（padding同理）
            如果没有为元素声明width，在这种情况下，元素框的总宽度包括外边距取决于父元素的width，这样可能得到“流式”页面，即元素的外边距会扩大或缩小以适应父元素的实际大小。如果对这个文档设置样式，使其元素使用百分数外边距，当用户修改浏览窗口的宽度时，外边距会随之扩大或缩小。
            为什么margin-top/margin-bottom的百分数也是相对于width而不是height呢？
            CSS权威指南中的解释：
            我们认为，正常流中的大多数元素都会足够高以包含其后代元素（包括外边距），如果一个元素的上下外边距时父元素的height的百分数，就可能导致一个无限循环，父元素的height会增加，以适应后代元素上下外边距的增加，而相应的，上下外边距因为父元素height的增加也会增加，如果循环。
86  css 中可继承的属性有哪些
            A    height
            B    font-size
            C    border
            D    width
            E    color
        答案: B E 
        解释：
            肯定有很多人不知道什么是继承，继承就是指子节点默认使用父节点的样式属性。
            不可继承的属性太多了不要背，记住可以继承的属性有哪些就行了。可以继承的属性很少，只有颜色，文字，字体间距行高对齐方式，和列表的样式可以继承。这么来记很轻松的呀！不要被下边的吓到了哦~
            所有元素可继承：visibility和cursor。
            内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。
            终端块状元素可继承：text-indent和text-align。
            列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。
87  在bootstrap中， 关于导航条，下列说法正确的是?
            A    应该将被包裹的元素放到navbar-collapse类中
            B    表单应该放置于navbar-form内
            C    可以使用navbar-left和navbar-right来对齐导航条
            D    可以使用navbar-fixed-top和navbar-fixed-bottom来将导航条固定到顶部或底部
        答案: A B C D
88  哪些是正确的bootstrap辅助类
            A    text-muted
            B    text-success
            C    text-info
            D    text-warning
        答案: A B C D 
        解释：
            .text-muted:文字的颜色换成灰色 
            .text-primary:文字的颜色变成蓝色 
            .text-success:文字的颜色变成绿色 
            .text-info:文字的颜色变成暗蓝色 
            .text-warning:文字颜色变成暗黄色 
            .text-danger：文字的颜色变成红色
89  下述有关border:none以及border:0的区别，描述错误的是？
            A    border:none表示边框样式无
            B    border:0表示边框宽度为0
            C    当定义了border:none，即隐藏了边框的显示，实际就是边框宽度为0
            D    当定义边框时，仅设置边框宽度也可以达到显示的效果
        答案: C D 
        解释：
            1.效果
            border-style:none;//无边框         
            border-width:0;//边框宽度为0px  
            2.区别
            （1）性能差异
            border:0;浏览器对border-width、border-color进行渲染，占用内存。
            border:none;浏览器不进行渲染，不占用内存。
            Chrome：
            border:none;>> border:initial none initial;
            border:0;>> border:0 initial  initial ;
            Firefox、360：
            border:none; >>border:medium none;
            border:0;>> border:0 none;
            计算出的样式：
            border:0px none 元素color属性值;
            （2）浏览器兼容
            IE7-不支持border:none;
            W3C提示：请始终把border-style属性声明到border-color属性之前，元素必须在改变颜色之前获得边框。
90  下列哪些是块级元素（）
            A    input
            B    ul
            C    hr
            D    li
            E    div
            F    form
        答案: B C D E F 
        解释：
            （1）行内元素有：a b span img input select strong 
            （2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p
            （3）常见的空元素：
            <br> <hr> <img> <input> <link> <meta>
91  常见的浏览器端的存储技术有哪些？
            A    cookie
            B    localStorage
            C    session
            D    userData
        答案: A B D
        解释：
            浏览器端：
            cookie
            WebStorage(localStorage、sessionStorage)
            userData
            indexedDB
            服务器端：
            session




*/