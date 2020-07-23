/*
163  下面有关html5标签说法错误的有？
            A    <audio> 标签定义声音，比如音乐或其他音频流
            B    <canvas> 比如来自一个外部的新闻提供者的一篇新的文章，或者来自 blog 的文本，或者是来自论坛的文本。亦或是来自其他外部源内容
            C    <menu> 标签定义菜单列表。当希望列出表单控件时使用该标签
            D    <command> 标签定义命令按钮，比如单选按钮、复选框或按钮
        正确答案: B
        解释：
            这里考察HTML标签的使用：
            <audio> 标签定义声音，比如音乐或其他音频流。 A正确。
            <canvas> 标签定义图形，比如图表和其他图像。<canvas> 标签只是图形容器，您必须使用脚本来绘制图形。 B错误，<article>标签定义外部的内容。比如来自一个外部的新闻提供者的一篇新的文章，或者来自 blog 的文本，或者是来自论坛的文本。亦或是来自其他外部源内容。
            <menu> 标签定义命令的列表或菜单。<menu> 标签用于上下文菜单、工具栏以及用于列出表单控件和命令。 C正确
            command 元素表示用户能够调用的命令。<command> 标签可以定义命令按钮，比如单选按钮、复选框或按钮。只有当 command 元素位于 menu 元素内时，该元素才是可见的。否则不会显示这个元素，但是可以用它规定键盘快捷键。 D正确。
164  以下位于<head>间的代码片段是做什么用的
        <meta name="viewport" content="width=device-width, initial-scale=1">
            A    使得页面编码合乎要求
            B    表示支持响应式设计
            C    支持正常的绘制和缩放
            D    表示针对滚屏进行适当的适配
        正确答案: B 
        解释：
            1) <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />   
            //强制让文档的宽度与设备的宽度保持1:1，   
            //文档初始化缩放比例是1:1，   
            //不允许用户点击屏幕放大浏览，    
            //允许用户缩放到的最大比例，   
            //尤其要注意的是content里多个属性的设置一定要用逗号+空格来隔开，如果不规范将不会起作用。其他属性有：width;height; initial-scale; minimum-scale; maximum-scale; user-scalable;
            2) <meta name="apple-mobile-web-app-capable" content="yes" />    
            //iPhone私有标签，它表示：允许全屏模式浏览
            3) <meta name="apple-mobile-web-app-status-bar-style" content="black" />    
            //iPhone私有标签，它指定的iPhone中safari顶端的状态条的样式
            4) <meta name="format-detection" content="telephone=no; email=no" />    //不识别邮件和不把数字识别为电话号码
165  css中clear的作用是什么？
            A    清除该元素所有样式
            B    清除该元素父元素的所有样式
            C    指明该元素周围不可出现浮动元素
            D    指明该元素的父元素周围不可出现浮动元素
        正确答案: C
        解释：
            清除浮动方法，
            1，给父级元素添加class=“clearflex”
            2，在css中给父级添加属性：overflow：hidden；（我比较喜欢这个）
            3，伪元素清除法，
            4，建立空的div，命名为clear，在css中添加clear：both；
166  下面列出的浏览器，无webkit内核的是（）
            A    chrome
            B    Safari
            C    搜狗浏览器
            D    firefox
        正确答案: D
        解释：
            一、Trident内核代表产品Internet Explorer，又称其为IE内核。Trident（又称为MSHTML），是微软开发的一种排版引擎。使用Trident渲染引擎的浏览器包括：IE、傲游、世界之窗浏览器、Avant、腾讯TT、Netscape 8、NetCaptor、Sleipnir、GOSURF、GreenBrowser和KKman等。
            二、Gecko内核代表作品Mozilla FirefoxGecko是一套开放源代码的、以C++编写的网页排版引擎。Gecko是最流行的排版引擎之一，仅次于Trident。使用它的最著名浏览器有Firefox、Netscape6至9。
            三、WebKit内核代表作品Safari、Chromewebkit 是一个开源项目，包含了来自KDE项目和苹果公司的一些组件，主要用于Mac OS系统，它的特点在于源码结构清晰、渲染速度极快。缺点是对网页代码的兼容性不高，导致一些编写不标准的网页无法正常显示。主要代表作品有Safari和Google的浏览器Chrome。
            四、Presto内核代表作品OperaPresto是由Opera Software开发的浏览器排版引擎，供Opera 7.0及以上使用。它取代了旧版Opera 4至6版本使用的Elektra排版引擎，包括加入动态功能，例如网页或其部分可随着DOM及Script语法的事件而重新排版。
167  请选择产生粗体字的 HTML 标签：
            A    <bold>
            B    <bb>
            C    <b>
            D    <bld>
        正确答案: C  
        解释：
            html加粗的标签b
            斜体i  下划线u
            加粗的标签有<b></b>和<strong></strong>  blod font-weight是属性值
168  以下哪个是并选择器（ ）
            A    item
            B    span.item
            C    span, .item
            D    span .item
        正确答案: C
        解释：
            正确答案是c吧。同时选中了span 标签 和 
            class名为item的标签。
            a只是选中了item标签，没有并集存在；
            b选中了class名为item的span；
            d选中了span下面的class名为item的元素
169  在css3中要使元素由一种样式转换成另一种样式，为元素添加效果的属性是？
            A    animation
            B    keyframes
            C    flash
            D    transform
        正确答案: D  
        解释：
            animation也可以改变样式啊..但是transition需要触发事件，而animation是自动发生的...题目有点问题吧...
170  获取 input 节点的正确方法 （）
    <form class="file" name="upload">
    <input id="file" name="file" />
    </form>
            A    document.querySelectorAll('file')[0]
            B    document.getElementById('file')[0]
            C    document.getElementByTagName('file')[0]
            D    document.getElementsByName('file')[0]
        正确答案: D
        解释：
            应该是 document.getElementsByName('file')[0]
            document.getElementsByClassName(‘file')[0]
            获取的是<form class="file" name="upload">…</form>
            document.getElementById() 返回的是指定ID的元素结点
            document.getElementsByName() 返回的是指定名称的结点对象的‘集合‘
            ...TagName(), ...ClassName() 也都是返回的集合
            getElementById()	    返回对拥有指定 id 的第一个对象的引用。所以B错
            getElementsByName() 	返回带有指定名称的对象集合。
            getElementsByTagName()	返回带有指定标签名的对象集合。
171  在CSS3中，以下哪个IE浏览器（Trident内核）的私有属性前缀？ （ ）
            A    –Webkit
            B    –trident
            C    –ie
            D   –ms
        正确答案: D 
        解释：
            主流浏览器内核私有属性css前缀：             
                                    mozilla内核 (firefox,flock等)        -moz
                                    webkit内核(safari,chrome等)          -webkit
                                    opera内核(opera浏览器)                -o
                                    trident内核(ie浏览器)                 -ms
172 关于下列CSS选择器：ID选择器、类选择器、伪类选择器、标签名称选择器，排序正确的是：（）
            A    ID选择器>Class选择器>伪类=标签名称选择器
            B    ID选择器>伪类>Class选择器>标签名称选择器
            C    ID选择器>Class选择器>伪类>标签名称选择器
            D    ID选择器>Class选择器=伪类>标签名称选择器
        正确答案: D
        解释：
            一般来说，选择器的优先级（从上往下依次降低）是：
            在属性后面使用 !important 会覆盖页面内任何位置定义的元素样式。
            作为style属性写在元素内的样式
            id选择器
            类选择器
            标签选择器
            通配符选择器














































*/