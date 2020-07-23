/*
202  对于li这个节点，下列哪个CSS选择器的优先级最高？
            A    li#app
            B    li.cnt
            C    li.cnt:hover
            D    #app.cnt
        正确答案: D 
        解释：
            第一等：代表内联样式，如: style=””，权值为1000。
            第二等：代表ID选择器，如：#content，权值为0100。
            第三等：代表类，伪类和属性选择器，如.content，权值为0010。
            第四等：代表类型选择器和伪元素选择器，如div p，权值为0001。
            通配符、子选择器、相邻选择器等的。如 、>、+,权值为0000。 
            链接：http://www.imooc.com/article/14629 
203  在HTML中嵌入PHP代码，有以下几种方法，其中错误的是（ ）
            A    以”<?php开头，以“?>”结束，中间为PHP代码。
            B    以<script language=“php”>开头，</script> 结束，中间为PHP操作代码
            C    以“<?”开头，以“?>”结束，中间为PHP操作代码
            D    “<！”开头，以“！>”结束，中间为PHP操作代码
        正确答案: D
        解释：
            A属于PHP默认语法：<?php         ?>
            B属于脚本风格：<script languange="php"> </script>
            C属于PHP手动开启的简短风格，须在php.ini中设置short _open_tag=on，默认是on,或者在 PHP 编译时加入了 –enable-short-tags 选项。
            (PHP 3版本还可以通过 short_tags() 函数激活使用短标记。) ，<?  ?>
204  CSS 样式，下面哪一个能够用于边距的单位？
            A    em
            B    px
            C    pt
            D    全部都对
        正确答案: D
        解释：
            pt (point，磅)：是一个物理长度单位，指的是72分之一英寸。
            px (pixel，像素)：是一个虚拟长度单位，是计算机系统的数字化图像长度单位，如果px要换算成物理长度，需要指定精度DPI(Dots Per Inch，每英寸像素数)，
            在扫描打印时一般都有DPI可选。Windows系统默认是96dpi，Apple系统默认是72dpi。
            em(相对长度单位，相对于当前对象内文本的字体尺寸)：是一个相对长度单位，最初是指字母M的宽度，故名em。现指的是字符宽度的倍数，用法类似百分比，
            如：0.8em, 1.2em,2em等。通常1em=16px。
205  请选出正确的答案
            A    div标签可用作分隔标签
            B    html中标签中的代码缩进是为了方便阅读
            C    <div><p>牛客网</div></p>
            D    <div>中不可以嵌套ul,h标签
        正确答案: A B
        解释：
            W3C
            <div> 可定义文档中的分区或节（division/section）。
            <div> 标签可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。
206  display:none 和 visibility:hidden的说法，正确的是？
            A    display:none与visibility:hidden都可以用来隐藏某个元素
            B    display:none在隐藏元素的时候，将其占位空间也去掉；而visibility:hidden只是隐藏了内容而已，其占位空间仍然保留。
            C    display:none是不符合html5标准的
            D    visibility:hidden是不符合html5标准的
        正确答案: A B
        解释：
            这两者的功能都是隐藏某个元素。不同的是 ，display属性设定为“none”的元素将不产生任何的框（Box），也就是说，元素对布局没有影响，浏览器将不显示该元素，
            包括其后代元素。更不会占位。
            而如果设定“visibility : hidden”则会生成元素框，只是元素“不可视”，而其他非视觉的属性都将生效，例如widht、padding等。
207  通过分析如下HTML代码，可以得出( )
        <table border="10"> 
        <tr> 
        　　<td colspan=2 align="center">员工号</td>
        </tr> 
        <tr> 
        <td rowspan=2 align="center">学历</td>
        <td align="center">专业</td>
        </tr>
        <tr>
        <td colspan=2 align="center">毕业学校</td>
        </tr> 
        </table>
            A    该表格共有2行3列
            B    该表格中的文字均居中显示
            C    该表格的边框宽度为10毫米
            D    "员工号"单元个跨2列
        正确答案: B D
        解释：
                首先看有几行，几行只要通过tr就可以判断，题目里有3个tr，所以是3行。
                其次看有几列，列数是看有最多td的那一行，所以是2列。
                题目中写border="10"，单位是px，所以边框应该为10px，不是10毫米。
                td 的 colspan属性代表所占列数， rowspan 属性代表所占行数，所以员工号占用2列，学历占用2行。
                因为每个td中都写了align= 'center'，所以没列都会居中显示。
                详细解答：https://github.com/CircleZ3791117
208  在不考虑H5的情况下,下列哪些值是可以作为标签的type属性的属性值。（）
            A    text
            B    submit
            C    button
            D    date
        正确答案: A B C
        解释：
            不考虑H5，而Date是HTML5新增
            H5 新增的  date(日期)
209  bootstrap中如何让一个区块居中?
            A    center
            B    center-block
            C    horizontal-center
            D    vertical-center
        正确答案: A B
        解释：
            A 的center是指<center></center>标签
            B 的center-block是bootstrap的样式 .center-block  参见bootstrap中文手册http://v3.bootcss.com/css/#helper-classes
            AB都可以起到让区块居中的作用所以选AB。
            不过，这题真心不规范，A也不说清楚center是标签还是什么，B也不说清楚是bootstrap的，心好累。。。。
210  请选出正确的答案
            A    一个id在页面中只能使用一次
            B    一个class可以在一个网页中多次使用
            C    ID和class都能和javascript及CSS一起使用
            D    同一个id或class，都可以在一个网页中出现多次
        正确答案: B C D 
        解释：
            Class 在程序中称“类”，同时在CSS中也书面语也叫“类”。在CSS样式中以小写的“点”及“.”来命名如： .css5{属性：属性值;} ,而在html页面里则以class="css5"
            来选择调用,命名好的CSS又叫css选择器。如： .css5{属性：属性值;} 选择器在html调用为“<div class="css5">我是class例子</div> ”如果不知道怎么引用CSS，
            那就可以了解下css引用。 而且class(类)在同一个html网页页面可以无数次的调用相同的class类，在这里例子里则可以在对应的网页里可以无数次调用选择“css5”。
            这也说明class一般是用来调用css中的预配制属性的，比如说有一个预配制属性为如这里的“.class01{属性：属性值;} ”，这样就可以像调用函数一样不用再一个网页页
            面里重复的配置一个“类”属性，而只需要写上一个class类选择，就可以在同一个页面里任何位置调用选择具有相同的CLASS类。 ID是表示着标签的身份，在JS脚本中会用
            到id，当JS要修改一个标签的属性时，JS会将id名作为该标签的唯一标识进行操作。也就是说ID只是页面元素的标识，供其他元素脚本等引用。假如你的页面里出现了两个
            ID那JS效果特性较出现逻辑错误不知道依据哪个ID来改变其标签属性。 在CSS里的ID不一定为JS而设置的，但是同样ID在页面里也只能出现一次，并且是唯一性。虽然可能
            我们才学DIV+CSS爱好者在一个页面里同时调用相同的ID多次但是仍然没有出现页面混乱错误，但是我们为了W3C及各个标准我们也要遵循ID在一个页面里唯一性。以免出现
            浏览器兼容问题。
            A选项说法不正确，页面的话，很多次
211  关于栅格系统，以下说法正确的是
            A    会有自动的padding样式
            B    会有自动的margin样式
            C    其字体默认为14px
            D    其box-sizing默认为border-box
        正确答案: A C D
        解释：
            AB：栅格系统的工作原理中有，为了创建列（colume）之间的间隔 需要设置padding,而且需要设置margin为负值，消除第一个和最后一个之间padding的影响。而padding是自动设置的，margin需要手动修改；
            C：bootstrap将全局的font-size设置为14px;
            D:   box-sizing初始为border-box。



*/