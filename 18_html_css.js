/*
173 什么是 Web Worker ？
            A    运行在后台的JavaScript程序，会影响页面的性能。
            B    运行在后台的JavaScript程序，不会影响页面的性能。
            C    都不正确
            D    运行在后台的CSS程序，不会影响页面的性能。
        正确答案: B
        解释：
            web Worker 本质是一个线程，在UI主线程之外并发执行的线程，主要解决耗时的JS任务。
            首先了解浏览器的线程模型是怎样的？
            程序：计算机可以执行的代码，存在磁盘中 --- 这是静止的（比如这是买的一块地皮）；
            进程：把 程序 调入到内存中，等待被CPU执行 --- 这是活动的（这是在地皮上建起来的几个工厂）；
            线程：是CPU执行 进程 代码的基本单位 --- 相当于生产任务(这是在工厂中进行生产的生产线)；
            而 进程 与 线程 的关系是：进程是操作系统分配内存的基本单位，线程处于进程内部，是CPU执行代码的基本单位，一个进程中至少有一个线程，也可以有多个（就
            比如在一个工程内，可以有一条生产线，也可以有多条生产线），多个线程间并发执行，从宏观上看是‘同时’执行，微观上看是‘轮流’执行。
            拿chrome中的线程模型举例
            1.chrome 中发起HTTP请求最多可以使用6个并发线程；
            2.而负责向页面中执行绘制任务(HTML/CSS/JS/事件处理代码)的只有1个线程 --- UI主线程，如果碰到耗时的代码就有问题了，解决的办法：创建一个新的线程，
            去执行耗时的JS任务 -- 与UI主线程并发执行
            Worker 线程的缺点：浏览器禁止Worker线程操作任何BOM 和 DOM对象，不能使用Worder加载类似jQuery.js文件。
174  下列辅助类的说法错误的是？
            A    <button type="button" class="close"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button><br>可以用来表示一个关闭按钮
            B    <span class="caret"></span>可以用来表示一个三角符号
            C    navbar可使用pull-left类来定义
            D    navbar可使用navbar-left类来定义
        正确答案: C
        解释：
            bootstrap中图标样式caret实现各种三角形 组件对齐方式 您可以使用实用工具 class .navbar-left 或 .navbar-right 向左或向右对齐导航栏中的 导航链接、表单、按钮或文本 这些组件。
            这两个 class 都会在指定的方向上添加 CSS 浮动。
175  DHTML 的动态样式的作用是  ()
            A    可使开发人员改变显示在一页上的文本或图像，以便内容能够交互地对用户的鼠标和键盘操作做出响应
            B    让页面制作者以自动方式或对用户的操作做出响应的方式移动页面上的文本和图像
            C    可实现客户端与服务端动态的信息资源交换
            D    使网页作者改变内容的外部特征而不强制用户再次下载全部内容
        正确答案: D 
        解释：
            DHTML实现了网页从Web服务器下载后无需再经过服务的处理，而在浏览器中直接动态地更新网页的内容、排版样式和动画的功能。例如，当鼠标指针移到文章段落中时，段落能够变成蓝色，或者当鼠标指针移到一个超级链接上时，会自动生成一个下拉式子链接目录等。
            包括：
                ①动态内容(Dynamic Content)：动态地更新网页内容，可“动态”地插入、修改或删除网页的元件，如文字、图像、标记等。
                ②动态排版样式(Dynamic Style Sheets)：W3C的CSS样式表提供了设定HTML标记的字体大小、字形、样式、粗细、文字颜色、行高度、加底线或加中间横线、缩排、与边缘距离、靠左右或置中、背景图片或颜色等排版功能，而“动态排版样式”即可以“动态”地改变排版样式。
176  下列说法正确的是（）
            A    display: none；不为被隐藏的对象保留其物理空间；
            B    visibility:hidden;所占据的空间位置仍然存在,仅为视觉上的完全透明；
            C    visibility:hidden;产生reflow和repaint(回流与重绘)；
            D    visibility:hidden;与display: none;两者没有本质上的区别；
        正确答案: A B 
        解释：
            display: none和visibility:hidden的区别就是visibility:hidden会保留元素的空间
            repaint(重绘) ，repaint发生更改时，元素的外观被改变，且在没有改变布局的情况下发生，如改变outline,visibility,background color，不会影响到dom结构渲染。
            reflow(渲染)，与repaint区别就是他会影响到dom的结构渲染，同时他会触发repaint，他会改变他本身与所有父辈元素(祖先)，这种开销是非常昂贵的，导致性能下降是必然的，页面元素越多效果越明显。
            所以display:none才会产生reflow
            visibility:hidden只会出发repaint
            display:none可以理解为看不见摸不着 
            visibility：hidden可以理解为看不见摸得着 
            display的切换会触发reflow，而visibility不会。
177  以下选项正确的是
            A    <p />
            B    <br />
            C    <hr />
            D    <img />
        正确答案: B C D
        解释：
            HTML中的标签分为闭合标签和自闭合标签。 自闭合标签有<input/><img/><br/><link/><hr/>等
178  下列属于HTML5新元素的是____。
            A    header
            B    footer
            C    section
            D    nav
            E    viewport
        正确答案: A B C D
        解释：
            H5新增标签：
            article: 标签定义外部的内容。
            aside:标签定义 article 以外的内容。a
            audio:h5新增音频标签。没有高宽属性。
            canvas:h5新增画布标签。
            command: 定义命令按钮(未测试)
            datalist：标签定义选项列表。
            datalist 及其选项不会被想显示出来，它仅仅是合法的输入值列表。
            details：标签用于描述文档或文档某个部分的细节。
            figure：标签用于对元素进行组合。
            figcaption：定义 figure 元素的标题。
            footer：定义 section 或 document 的页脚。
            header：定义 section 或 document 的页眉。
            hgroup：用于对网页或区段（section）的标题进行组合。
            keygen:标签规定用于表单的密钥对生成器字段
            mark：标签定义带有记号的文本。
            meter：通过min="0" max="20"的方式定义度量衡。仅用于已知最大和最小值的度量。
            nav：定义document或section或article的导航。
            output：定义不同的输出类型，比如脚本。
            progress：定义任何类型的任务的进度。
            rp:定义若浏览器不支持 ruby 元素显示的内容
            rt：定义 ruby 注释的解释
            ruby：定义 ruby 注释
            section：标签定义文档中的节、区段。比如章节、页眉、页脚或文档中的其他部分。
            source:audio和video的属性之一。为audio和video定义媒介源。
            summary:为details定义标题。
            time:定义日期或时间。
            video：h5新增视频标签。具有高宽属性。
179  哪些可以给文字加上背景？
            A    bg-primary
            B    bg-success
            C    bg-info
            D    bg-warning
        正确答案: A B C D 
        解释：
            bootstrap
            主要蓝（bg-primary）、成功绿（bg-success）、信息蓝（bg-info）、警告黄（bg-warning）、危险红（bg-danger）
180  <input>元素的type属性的取值可以是(      )
            A    image
            B    checkbox
            C    button
            D    select
        正确答案: A B C
        解释：
            button       可以点击按钮
            checkbox     定义复选框
            file         供上传文件
            hidden       定义隐藏的输入字段
            image        定义图像形式的体检按钮
            password     定义密码字段
            radio        定义单选按钮
            reset        定义重置按钮
            submit       定义提交按钮
            text         定义输入字段
181  关于bootstrap以下说法正确的是
            A    为<table>标签添加.table类可以给表格添加水平分割线
            B    给表格添加table-striped类可以使IE8中的表格出现斑马线
            C    为表格添加table-bordered类可为表格中每个元素增加边框
            D   为表格添加table-hover类可为表格中增加鼠标悬停样式
        正确答案: A C D
        解释：
            bootstrap
            .table	            为任意 <table> 添加基本样式 (只有横向分隔线)	尝试一下
            .table-striped	    在 <tbody> 内添加斑马线形式的条纹 ( IE8 不支持)	尝试一下
            .table-bordered	    为所有表格的单元格添加边框	尝试一下
            .table-hover	    在 <tbody> 内的任一行启用鼠标悬停状态	尝试一下
            .table-condensed	让表格更加紧凑
















































*/