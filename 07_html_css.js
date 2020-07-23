/*
62  以下标签为换行符的是
            A    <hr>
            B    <br/>
            C    <p>
            D    <div>
        答案: B
        解释：
            hr分割线
            br 换行
63  用于加亮文本的标签是
            A    <meta>
            B    <pre>
            C    <mark>
            D    <small>
        答案: C
        解释：
            <mark> 标签定义带有记号的文本,显示为黄色高亮，是 HTML 5 中的新标签，Internet Explorer 8 以及更早的版本不支持 <mark> 标签。
            <meta>用在文档头部，head元素内部，提供页面信息
            <pre>用于显示计算机源代码
            <small>小号字体
64  要去掉文本超链接的下划线，下列正确的是（）
            A    a{underline:none}
            B    a{ text-decoration:none}
            C    a{ text-decoration:underline}
            D    a{ decoration:no underline}
        答案: B
        解释：
            text-decoration:一共有6个属性值。
            none：标准文本；
            underline：定义文本下划线；
            overline：定义文本上的一条线；
            line-through：穿过文本的一条线；
            blink：闪烁文本；
            inherit：继承父元素的text-decoration属性。
65  下述有关css属性position的属性值的描述，说法错误的是？
            A    static：没有定位，元素出现在正常的流中
            B    fixed：生成绝对定位的元素，相对于父元素进行定位
            C    relative：生成相对定位的元素，相对于元素本身正常位置进行定位。
            D    absolute：生成绝对定位的元素，相对于 static 定位以外的第一个祖先元素进行定位。
        答案: B 
        解释：
            static
                元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。
            relative
                元素框偏移某个距离。元素仍保持其未定位前的形状，它原本所占的空间仍保留。
            absolute
                元素框从文档流完全删除，并相对于其包含块定位。包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。
            fixed
                元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身。
66  Blob对象中的type属性表示文件的是（ ）
            A    文件大小
            B    文件名
            C    MIME类型
            D    图片格式
        答案: C 
        解释：
            一个Blob对象就是一个包含有只读原始数据的类文件对象.实际上 file 对象只是 blob 对象的一个更具体的版本。
            其type属性是表示文件的MIME（多用途互联网邮件扩展类型），也就是设定某种扩展名的文件用一种应用程序来打开的方式类型。
            File接口基于Blob，继承了Blob的功能,并且扩展支持了用户计算机上的本地文件。
            var blob = new Blob(dataArr:Array<any>, opt:{type:string});
            dataArray：数组，包含了要添加到Blob对象中的数据，数据可以是任意多个ArrayBuffer，ArrayBufferView， Blob，或者 DOMString对象。
            opt：对象，用于设置Blob对象的属性（如：MIME类型）
67 Blob对象中的type属性表示文件的是（）
            A    文件大小
            B    文件名
            C    MIME类型
            D    图片格式
        答案: C 
        解释：
            一个Blob对象就是一个包含有只读原始数据的类文件对象.实际上 file 对象只是 blob 对象的一个更具体的版本。
            其type属性是表示文件的MIME（多用途互联网邮件扩展类型），也就是设定某种扩展名的文件用一种应用程序来打开的方式类型。
            File接口基于Blob，继承了Blob的功能,并且扩展支持了用户计算机上的本地文件。
            var blob = new Blob(dataArr:Array<any>, opt:{type:string});
            dataArray：数组，包含了要添加到Blob对象中的数据，数据可以是任意多个ArrayBuffer，ArrayBufferView， Blob，或者 DOMString对象。
            opt：对象，用于设置Blob对象的属性（如：MIME类型）
68  关于HTML语义化，以下哪个说法是正确的？
            A    语义化的HTML有利于机器的阅读，如PDA手持设备、搜索引擎爬虫；但不利于人的阅读
            B    Table 属于过时的标签，遇到数据列表时，需尽量使用 div 来模拟表格
            C    语义化是HTML5带来的新概念，此前版本的HTML无法做到语义化
            D    header、article、address都属于语义化明确的标签
        答案: D 
        解释：
            1、什么是HTML语义化？
            <基本上都是围绕着几个主要的标签，像标题（H1~H6）、列表（li）、强调（strong em）等等>
            根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。
            2、为什么要语义化？
            为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看；
            用户体验：例如title、alt用于解释名词或解释图片信息、label标签的活用；
            有利于SEO ：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息： 爬虫依赖于标签来确定上下文和各个关键字的权重；
            方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
            便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
            3、写HTML代码时应注意什么？
            尽可能少的使用无语义的标签div和span；
            在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；
            不要使用纯样式标签，如：b、font、u等，改用css设置。
            需要强调的文本，可以包含在strong或者em标签中（浏览器预设样式，能用CSS指定就不用他们），strong默认样式是加粗（不要用b），em是斜体（不用i）；
            使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；
            表单域要用fieldset标签包起来，并用legend标签说明表单的用途；
            每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来。
69  英文字母全部转为大写正确的是（）
            A    text-transform: capitalize;
            B    text-transform: lowercase;
            C    text-transform: uppercase;
            D    font-weight: bold;
        答案: C
        解释：
            text-transform:capitalize是首字母大写
            text-transfrom:lowercase是全部字母为小写
            text-transfrom:uppercase是全部字母为大写
            font-weight: bold;字体为粗体，
70  当窗口上下滚动时，能始终固定在视野顶端的是（div的直接父级元素是<body>）（）
            A    <div style=”position:fixed;top:0;”></div>
            B    <div style=”position:absolute;top:0;”></div>
            C    <div style=”position:relative;top:0;”></div>
            D    <div style=”margin-top:0;”></div>
        答案: A 
        解释： 
            定义中主要学习了，两个定位，一个是相对定位，relative  一个是绝对定位，absolute。如果想定位在一个部位，如果没有给一个作为相对的定位，那么会默认按照body，作为父级定位。所以应用position：absolute。
            但是想让目标随着视窗移动而定位，所以要定位视窗，学习了一下。fixed 以视窗为目标，所以选择fixed
71  网页开发中，一般需判断浏览器类型，需通过userAgent中获取浏览器内核来判断，下列说法错误的是？
            A    一直到IE9，都是Trident内核
            B    firefox是Gecko内核
            C    chrome是webkit内核
            D    IE是目前最快的浏览器
        答案: D 
        解释：
            -moz代表firefox浏览器私有属性
            -ms代表IE浏览器私有属性
            -webkit代表chrome、safari私有属性 IE使用的是Trident内核，Firefox 使用的是Gecko内核。目前使用IE内核的浏览器还有搜狗，遨游，360等等。 





*/