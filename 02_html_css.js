/*
11  下列关于web页面级优化描述最正确的是____。
        A    减少HTTP请求的次数
        B    进行资源合拼和压缩
        C    Inline images
        D    将外部脚本置于低端
        E    减少不必要的HTTP跳转
        F    以上描述都对
    答案: F
    涉及到的知识点：
        web页面级优化：
        减少HTTP请求的次数。http协议是无状态的应用层协议，每次http请求都需要建立通信链路、进行数据传输，而在服务器端每个http都需要启动独立的线程去处理，这些通信和服务的开销都很昂贵。所以减少http请求的数目可有效提高访问性能，A正确。
        进行资源合拼和压缩。合并CSS、合并javascript、合并图片，将浏览器一次访问需要的javascript和CSS合并成一个文件，这样浏览器就只需要一次请求。在服务器端对文件进行压缩，在浏览器端对文件解压缩，可有效减少通信传输的数据量，B正确。
        Inline images，使用data: URL scheme的方式将图片嵌入到页面或CSS中嵌入页面，因为直接嵌入页面增大了页面的体积，而且无法利用浏览器缓存。所以使用在CSS中的图片则更为理想一些，C正确。
        将外部脚本置于低端，浏览器在加载javascript后立即执行，有可能会阻塞整个页面，造成页面显示缓慢，因此javascript最好放在页面最下面，D正确。
        减少不必要的HTTP跳转，对于以目录形式访问的HTTP链接，很多人都会忽略链接最后是否带’/’，假如你的服务器对此是区别对待的话，那么你也需要注意，这其中很可能隐藏了301跳转，增加了多余请求，E正确。
12  使用CSS的flexbox布局，不能实现以下哪一个效果：
            A    三列布局，随容器宽度等宽弹性伸缩
            B    多列布局，每列的高度按内容最高的一列等高
            C    三列布局，左列宽度像素数确定，中、右列随容器宽度等宽弹性伸缩
            D    多个宽高不等的元素，实现无缝瀑布流布局
        答案: D 
        解释：Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。
             瀑布流指的是图片或div块等宽不等高，参差无缝的排列在一起，在向下滚动滚动条到底的时候，添加新的数据到整体框里面
            Flexbox可以简单快速的创建一个具有弹性功能的布局，当在一个小屏幕上显示的时候，Flexbox可以让元素在容器(伸缩容器)中进行自由扩展和收缩，从而容易调整整个布局。它的目的是使用常见的布局模式，比如说三列布局，可以非常简单的实现。
            一个Flexbox布局是由一个伸缩容器(flex containers)和在这个容器里的伸缩项目(flex items)组成。 伸缩容器(flex  containers)是一个HTML标签元素，并且“display”属性显式的设置了“flex”属性值。在伸缩容器中的所有子元素都会自动变成伸缩项目(flex  items)。
            实现无缝瀑布流布局，要用到js获取当前的高度之类的
13  把鼠标移到按钮并点击时，会产生一串什么样的事件？
            A    active hover focus
            B    foucs hover active
            C    hover active foucus
            D    hover focus active
        答案: D
        解释：hover -> focus -> active（悬停 -> 聚焦 -> 响应）
        CSS伪类用于向某些选择器添加特殊的效果。 
        :active 向被激活的元素添加样式。 
        :focus 向拥有键盘输入焦点的元素添加样式。 
        :hover 当鼠标悬浮在元素上方时，向元素添加样式。 
        :link 向未被访问的链接添加样式。 
        :visited 向已被访问的链接添加样式。
14  下列哪一项不是 HTML5 中新增加的标签？（）
            A    nav
            B    article
            C    caption
            D    video
        答案: C 
        解释：HTML5新增加的标签：
         <article>标签定义外部的内容（结构元素）
         <aside>定义页面内容之外的内容。 aside的内容与article的内容相关。（结构元素） 
         <figure>定义一组媒介内容的分组，以及它们的标题。（结构元素） 
         <section>标签定义文档中的节（section，区段）。比如章节，页眉，页脚或文档中的其他部分（结构元素） 
         <meter>定义预定义范围内的度量。仅用于已知最大和最小值的度量（内联元素） 
         <progress>定义任何类型的任务的进度。可以使用<progress>标签来显示javascript中耗费时间的函数的进度（内联元素） 
         <time>定义一个日期/时间 （内联元素） 
         <audio>定义声音内容。(内嵌元素) audio 元素允许多个 source 元素。source 元素可以链接不同的音频文件。浏览器将使用第一个可识别的格式 
         <video>定义视频。(内嵌元素) Ogg支持firefox3.5，opera10.5，chrome3.0 Mpeg 4 支持chrome3.0，safsri3.0 Video也支持多个source元素，
               链接到不同的视频文件，浏览器将使用第一个可识别的格式 属性值： autoplay=”autoplay”就绪后马上播放 loop=“loop”播放完再次播放 
         <command>定义命令按钮 （交互元素） 
         <datalist>定义下拉列表,与input元素配合使用该元素，定义input可能出现的值，datalist的选项不会被
               显示出来，它仅仅是合法的输入值列表（交互元素） 
         <details>定义元素的细节 （交互元素） 
         <canvas>定义图形,绘制路径，矩形，圆形，字符以及添加图像的方法 Canvas元素本身没有绘图能力，所有的绘制工作必须在javascript内部完成 渐变 
         <dialog>定义对话（会话）dialog元素表示几个人之间的对话。HTML5dt元素可以表示讲话者，HTML5dd元素可以表示讲话内容。（结构元素） 
         <embed>定义外部交互内容或插件 
         <event-source>为服务器发送的事件定义目标 
         <footer>定义 section 或 page 的页脚 
         <figcaption> 标签定义 figure 元素的标题。 
         <hgroup> 标签用于对网页或区段（section）的标题进行组合。 对网页或区段的标题进行组合 
         <keygen>标签提供一种验证用户的可靠方法。keygen 元素是密钥对生成器（key-pair generator）。当提交表单时，会生成两个键，一个是私钥，
               一个公钥。私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。公钥可用于之后验证用户的客户端
               证书（client certificate）。 <header>定义 section 或 page 的页眉（介绍信息） 
         <mark> 标签定义带有记号的文本。请在需要突出显示文本时使用 
         <m> 标签。 
         <nav>定义导航链接。 
         <output>定义输出的一些类型。 
         <source>定义媒体资源 Ogg支持firefox3.5，opera10.5，chrome3.0 Mpeg 4 支持chrome3.0，safsri3.0 Video也支持多个source元素，链接
               到不同的视频文件，浏览器将使用第一个可识别的格式 属性值： autoplay=”autoplay”就绪后马上播放 loop=“loop”播放完再次播放 
         <ruby> 标签定义 ruby 注释（中文注音或字符）在东亚使用
15  关于嵌套列的用法，正确的是（）
            A    <div class=“row”><br>  <div class=“col-sm-1”>
            B    <div class=“col-sm-1”><br><div class=“row”><br>
            C    <div class=“row”><br>   <div class=“container”><br>    <div class=“col-xs-1”><br>
            D    <div class=“container”><br>   <div class=“row”><br>     <div class=“col-xs-1”>
            答案: D 
            涉及到Bootstrap 框架的网格系统工作原理，如下：
                1 、数据行 (.row) 必须包含在容器（ .container ）中，以便为其赋予合适的对齐方式和内距 (padding) 。
                    如： <div class=" container ">
                    <div class=" row "></div>
                    </div>
                2 、在行 (.row) 中可以添加列 (.column) ，但列数之和不能超过平分的总列数，比如 12 。
                    如： <div class="container">
                            <div class="row">
                            <div class="col-md- 4 "></div>
                            <div class="col-md- 8 "></div>
                3 、具体内容应当放置在列容器（ column ）之内，而且只有列（ column ）才可以作为行容器 (.row) 的直接子元素
                4 、通过设置内距（ padding ）从而创建列与列之间的间距。然后通过为第一列和最后一列设置负值的外距（ margin ）来抵消内距 (padding) 的影响
16  表单提交时会触发什么Dom方法：
            A    submit
            B    onsubmit
            C    onupload
            D    onresize
        答案: A
        解释：onsubmit只是一种绑定事件的方式，如果不用这种事件绑定方式，比如addEventListener，eventType应该是submit而不是onsubmit。
17  要运用css3动画，你需要运用什么规则？
            A    animation
            B    keyframes
            C    flash
            D    transition
        答案: B （注意：答案不是A，原因如下）
        解释：要运用css3动画，需要运用@keyframes规则和animation属性
18  以下代码符合html5规范的是
            A    <div><span></div>
            B    <input type=”text” disabled>
            C    <label id=”mylabel”></label>
            D    <div myname=”javk”></div>
        答案: B
        解释：html5规范不允许加id，但是浏览器厂商却实现了这个功能,
            label标签只有两个属性
            for（ 规定 label 绑定到哪个表单元素。 ）
            form（规定 label 字段所属的一个或多个表单
19  当margin-top、padding-top的值是百分比时，分别是如何计算的？
            A    相对父级元素的height，相对自身的height
            B    相对最近父级块级元素的height，相对自身的height
            C    相对父级元素的width，相对自身的width
            D    相对最近父级块级元素的width，相对最近父级块级元素的width
        答案: D
        jieshi:百分数是相对于父元素的width计算的，所以如果父元素的width以某种方式发生变化，百分数也会变化”
20  在 HTML5 中，哪个元素用于组合标题元素？（）
            A    <group>
            B    <header>
            C    <headings>
            D    <hgroup>
        答案：D
        解释：
            <hgroup>标签用于对网页或区段（section）的标题进行组合


*/