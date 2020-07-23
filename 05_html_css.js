/*
44  浏览器在一次 HTTP 请求中，需要传输一个 4097 字节的文本数据给服务端，可以采用那些方式?
            A    存入 IndexdDB
            B    写入 COOKIE
            C    放在 URL 参数
            D    写入 Session
            E    使用 POST
            F    放在 Local Storage
        答案: E  
        解释：
            IndexdDB 是 HTML5 的本地存储，把一些数据存储到浏览器（客户端）中，当与网络断开时，可以从浏览器中读取数据，用来做一些离线应用。
            Cookie 通过在客户端 ( 浏览器 ) 记录信息确定用户身份，最大为 4 kb 。
            url 参数用的是 get 方法，从服务器上获取数据，大小不能大于 2 kb 。
            Session 是服务器端使用的一种记录客户端状态的机制 。
            post 是向服务器传送数据，数据量较大。
            local Storage 也是 HTML5 的本地存储，将数据保存在客户端中（一般是永久的）。
45  下列哪个样式定义后,内联(非块状)元素可以定义宽度和高度
                display:inline
                display:none
                display:block
                display:inherit
            答案: C 
            解释： 
                none	此元素不会被显示。
                block	此元素将显示为块级元素，此元素前后会带有换行符。
                inline	默认。此元素会被显示为内联元素，元素前后没有换行符。
                inline-block	行内块元素。（CSS2.1 新增的值）
                list-item	此元素会作为列表显示。
                run-in	此元素会根据上下文作为块级元素或内联元素显示。
                compact	CSS 中有值 compact，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。
                marker	CSS 中有值 marker，不过由于缺乏广泛支持，已经从 CSS2.1 中删除。
                table	此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。
                inline-table	此元素会作为内联表格来显示（类似 <table>），表格前后没有换行符。
                table-row-group	此元素会作为一个或多个行的分组来显示（类似 <tbody>）。
                table-header-group	此元素会作为一个或多个行的分组来显示（类似 <thead>）。
                table-footer-group	此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。
                table-row	此元素会作为一个表格行显示（类似 <tr>）。
                table-column-group	此元素会作为一个或多个列的分组来显示（类似 <colgroup>）。
                table-column	此元素会作为一个单元格列显示（类似 <col>）
                table-cell	此元素会作为一个表格单元格显示（类似 <td> 和 <th>）
                table-caption	此元素会作为一个表格标题显示（类似 <caption>）
                inherit	规定应该从父元素继承 display 属性的值。
46  在HTML中，（ ）可以在网页上通过链接直接打开邮件客户端发送邮件。  
                <a href=”telnet:ming.zhou@nowcoder.com”>发送邮件</a>
                <a href=”mail:ming.zhou@nowcoder.com”>发送邮件</a>
                <a href=”mailto:ming.zhou@nowcoder.com”>发送邮件</a>
                <a href=”ftp:ming.zhou@nowcoder.com”>发送邮件</a>
            答案: C
            解释：mailto 后面加发送邮件地址； tel最常用js一键拨号;
47  在 HTML 文档中包含如下超链接，要实现当鼠标移入该链接时，超链接文本大小变为 30px ，选项中的编码正确的是
                A    <a href=”#” onmouseover=”this.style.fontSize='30px'”>注册</a>
                B    <a href=”#” onmouseout=”this.style.fontSize=30px”>注册</a>
                C    <a href=”#” onmouseover=”this.style.font-size=30px”>注册</a>
                D    <a href=”#” onmouseout=”this.style.font-size=30px”>注册</a>
            答案: A 
            解释：
                鼠标移入onmouseover，移出onmouseout
                <a href="#" onmouseover="this.style.fontSize='30px'">注册</a>
                在js里面添加的属性名使用驼峰法，在css里面使用连接线
48  当表单中包含文件上传控件时，需要将enctype设置为（）
            A    application/x-www-form-urlencoded
            B    multipart/form-data
            C    text/explain
            D    file-data
            答案: B 
            解释：
                enctype 属性规定在发送到服务器之前应该如何对表单数据进行编码。
                属性值
                application/x-www-form-urlencoded 
                在发送前编码所有字符（默认） 
                multipart/form-data 
                不对字符编码。 在使用包含文件上传控件的表单时，必须使用该值。
                text/plain 
                空格转换为 "+" 加号，但不对特殊字符编码。
49  关于 css 布局中的 BFC ，描述错误的是
            A    BFC的区域会与float的元素区域重叠
            B    计算BFC的高度时，浮动子元素也参与计算
            C    BFC就是页面上的一个隔离的独立容器，容器里面的子元素是不会影响到外面的元素
            D    BFC意为”块级格式化上下文”
            答案: A 
            解释：
                BFC就是页面上的一个隔离的独立容器，容器里面的子元素是不会影响到外面的元素。
                BFC的区域不会与其它float的元素区域重叠。
                计算BFC的高度时，浮动子元素也参与计算。
                根据W3C对BFC的描述，可以总结出：BFC是一个具有特殊CSS样式的HTML盒子，比如div
                标签就经常用来当盒子用。
                这些特殊样式如下，下面的样式只要满足一项，就说明这个盒子是BFC

                float: left | right
                position: fixed | absolute
                display: inline-block | table-cell | table-caption | flex | inline-flex
                overflow: hidden | scroll | auto
50  下列 media queries 的定义方式中，哪一个是适配 iphone6s 的？（）
            A    ．@media(min-device-width:375px) and(max-device-width:667px) and(-webkit-min-device-pixel-ratio:2){}
            B    ．@media(min-device-width:414px) and(max-device-width:736px) and(-webkit-min-device-pixel-ratio:3){}
            C    @media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-device-pixel-ratio:2){}
            D    @media only screen and (min-device-width:320px) and (max-device-width:568px) and (-webkit-min-device-pixel-ratio:2){}
            答案: A 
            解释：
                max-width 指的是显示区域的宽度，比如浏览器的显示区域宽度
                max-device-width 指的是设备整个渲染（显示）区域的宽度，比如设备的实际屏幕大小，也就是设备分辨率
                max-height 与 max-device-height 也是同理。更进一步说，max-width在窗口大小改变或横竖屏转换时会发生变化
                max-device-width只与设备相关，横竖屏转换或改变尺寸，缩放都不会发生变化（部分android的宽高会互换而IOS不会）
                device- width指的是设备本身的宽度，也就是屏幕的分辨率，比如说你手机的分辨率是1440*900，这表示你的屏幕宽是1440px， 所以device-width是1440px。大部分的手机宽度不到480px，（当然今后的趋势是越来越大)。iphone 4的device-width就只有320px，即便对外宣称有640*960.这要归功于iphone的retina显示方式，也就是用两个像素来表示屏幕上一个CSS像素，IPAD3也是这样的。官方说IPAD3跟前几代一样采用的device-width是768px，它的实际分辨率达到了1536*2048，就是这个原因。
51  根据栅格系统的标准用法，错误的是
            A    <div class="container"><br>   <div class="row">
            B    <div class="row"><br>   <div class="col-md-1">
            C    <div class="row"><br>   <div class="container">
            D    <div class="col-md-1"><br><div class= "row">
            答案: C
            解释：
                数据行 (.row) 必须包含在容器（ .container ）中，
                在行 (.row) 中可以添加列 (.column) ，但列数之和不能超过平分的总列数
                具体内容应当放置在列容器（ column ）之内，而且只有列（ column ）才可以作为行容器 (.row) 的直接子元素
                通过设置内距（ padding ）从而创建列与列之间的间距。然后通过为第一列和最后一列设置负值的外距（ margin ）来抵消内距 (padding) 的影响
52  基于以下 HTML 结构和 CSS 样式，文本 Dijkstra的颜色应该是？
        ul#related span {
            color: red;
        }
        #favorite .highlight{
            color: black;
        }
    <ul class="authors" id="favorite">
        <li><span>Martin Fowler</span></li>
        <li id="related"><span class="highlight">Dijkstra</span></li>
    </ul>
            A    red
            B    black
            C    orange
            D    默认颜色
            答案: C
            解释：
                标签的权重是1，类的权重是10 ，id的权重是100
                ul#related span 的权重为 1+100+1=102
                #favorite .highlight 的权重为 100+10=110
                highlight 的权重为 10
                选最高权重的  C
53  给定下面的 HTML 代码：
        <div id=”wrapper”>
        <div class=”wText”>…</div>…<!—more wText items here -->
        <div class=”wImg”>…</div>…<!—more wImg items here -->
        <div class=”wVideo”>…</div>…<!—more wVideo items here -->
        </div>
        怎么能够取得 ”wrapper” 中全部项的集合？
            A    $(‘#wrapper’).children();
            B    $(‘#wrapper’).html();
            C    $(‘#wrapper’).contents();
            D    $(‘#wrapper’).find(“all”);
            答案: C 
            解释：
                $(‘#wrapper’).children();  //（只沿着 DOM 树向下遍历单一层级）查询直接的子元素。而不管子元素的子元素。
                $(‘#wrapper’).html();  //返回的是dom结构。而不是集合
                $(‘#wrapper’).contents();
                $(‘#wrapper’).find(“all”);   //并没有all这个元素 
                contents() 方法获得匹配元素集合中每个元素的子节点，包括文本和注释节点。 
                find() 方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选。 
                html() 方法返回或设置被选元素的内容 (inner HTML)。 
                children() 方法返回匹配元素集合中每个元素的子元素，添加可选参数可通过选择器进行过滤。





*/