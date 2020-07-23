/*
122  可以仅仅把“首页”二字设置为白色的样式是（）
        <div class=”menu”>
        <ul>
        <li><a class=”home” href=”home.html”> 首页 </a></li>
        <li><a href=”about.html”></a> 关于 </li>
        </ul>
        </div>
            A    .menu a {color:#fff;}
            B    li a {color:#fff;}
            C    .menu .home {color:#fff;}
            D    div.menu li a {color:#fff;}

        正确答案: C 
        解释：
            .menu a {color: #fff};
            表示的是类menu下的所有a标签的字体的颜色都是白色
            li a {color: #fff}
            表示li标签下的所有的a标签的字体的颜色都是白色
            .menu .home
            表示div为menu的类，.menu类下的.home 类的字体的颜色是白色
            div.menu li a {color:#fff;}
            表示div 为.menu的class 下的li下的a 标签的字体颜色是白色
            主要考察选择器的问题
123  CSS 样式， Border-radius 属性作用是什么？
            A    创建圆形边角
            B    创建方形边角
            C    控制表的间距
            D    创建彩色边角
        正确答案: A 
        解释：
            border-radius，国内翻译成圆角，你可能以为这个属性就是用来画圆角，但是除此之外，radius其实指的是边框所在圆的半径，这个CSS3属性不仅能够创建圆角，还可以创建椭圆角，把这些角按照不同的顺序和大小来展现，能够绘制成多种多样的图形。
            如：border-radius:10px 15px 10px 5px;

            四个值分别表示左上角、右上角、右下角、右下角。
124  如何在CSS文件中插入注释？
            A    //this is a comment
            B    //this is a comment//
            C    /*this is a comment* /
            D    ’this is a comment
        正确答案: C
        解释：
            html注释：　<!-- 内容 -->
            css注释;      / * 内容* /
            JavaScript注释：单行注释    //内容
                                    多行注释以  /*  内容* / 
125  下列那个样式定义后，可以让块元素呈递为内联对象
            A    display:inline
            B    display:none
            C    display:block
            D    display:inherit
        正确答案: A
        解释：
            一、display:block
            display:block就是将元素显示为块级元素，一般是其他元素的容器，可容纳内联元素和其他块状元素，块状元素排斥其他元素与其位于同一行，宽度(width)高度(height)起作用。常见块状元素为div和p。
            二、display:inline
            display:inline就是将元素显示为内联元素，内联元素只能容纳文本或者其他内联元素，它允许其他内联元素与其位于同一行，但宽度(width)高度(height)不起作用。常见内联元素为“a”
            三、display:inline-block
            display:inline-block将对象呈递为内联对象，但是对象的内容作为块对象呈递。旁边的内联对象会被呈递在同一行内，允许空格。(准确地说，应用此特性的元素呈现为内联对象，周围元素保持在同一行，但可以设置宽度和高度地块元素的属性)
126  如果一个HTML文档内含有阿拉伯文，则应该（）
            A    使用utf8编码
            B    将阿拉伯文转为图片并嵌入到文档内
            C    使用GBK编码
            D    使用iso-8859-2编码
        正确答案: A 
        解释：
            1、GBK通常指GB2312编码 只支持简体中文字 
            2、utf通常指UTF-8，支持简体中文字、繁体中文字、英文、日文、韩文等语言（支持文字更广） 
            3、通常国内使用utf-8和gb2312，看自己需求选择
127 下列全部属于css单位的是
            A    %,px,em
            B    sp,dp,%
            C    px,dp,%
            D    pt,sp,px
        正确答案: A
        解释：
            PX
            px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。
            PX特点
            1. IE无法调整那些使用px作为单位的字体大小；
            2. 国外的大部分网站能够调整的原因在于其使用了em或rem作为字体单位；
            3. Firefox能够调整px和em，rem，但是96%以上的中国网民使用IE浏览器(或内核)。
            EM
            em是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。
            EM特点
            1. em的值并不是固定的；
            2. em会继承父级元素的字体大小。
            注意：任意浏览器的默认字体高都是16px。所有未经调整的浏览器都符合: 1em=16px。那么12px=0.75em,10px=0.625em。为了简化font-size的换算，需要在css中的body选择器中声明Font-size=62.5%，这就使em值变为 16px*62.5%=10px, 这样12px=1.2em, 10px=1em, 也就是说只需要将你的原来的px数值除以10，然后换上em作为单位就行了。
            所以我们在写CSS的时候，需要注意两点：
            1. body选择器中声明Font-size=62.5%；
            2. 将你的原来的px数值除以10，然后换上em作为单位；
            3. 重新计算那些被放大的字体的em数值。避免字体大小的重复声明。
            也就是避免1.2 * 1.2= 1.44的现象。比如说你在#content中声明了字体大小为1.2em，那么在声明p的字体大小时就只能是1em，而不是1.2em, 因为此em非彼em，它因继承#content的字体高而变为了1em=12px。
            REM
            rem是CSS3新增的一个相对单位（root em，根em），这个单位引起了广泛关注。这个单位与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。目前，除了IE8及更早版本外，所有浏览器均已支持rem。对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用rem设定的字体大小。下面就是一个例子：
            1
            p {font-size:14px; font-size:.875rem;}
            注意： 选择使用什么字体单位主要由你的项目来决定，如果你的用户群都使用最新版的浏览器，那推荐使用rem，如果要考虑兼容性，那就使用px,或者两者同时使用。
            px 与 rem 的选择？
            对于只需要适配少部分手机设备，且分辨率对页面影响不大的，使用px即可 。
            对于需要适配各种移动设备，使用rem，例如只需要适配iPhone和iPad等分辨率差别比较挺大的设备。
128  在不涉及样式情况下,页面元素的优先显示与结构摆放顺序无关。请判断这句话的正确与否。
            A    T
            B    F
        正确答案: B 
        解释：
            在不涉及样式的情况下，页面元素是“从上往下”解析的，因此，与结构摆放顺序是有关系的。
129 表示有序列表的是
            A    ul
            B    dl
            C    li
            D    ol
        正确答案: D
        解释：
            有序：orderly 无序：unordered 有助于记忆
            Ul 无序列表 dl 定义列表 li 项目列表 ol有序列表
130  下面哪个属性不会让 div 脱离文档流（normal flow）？
            A    position: absolute;
            B    position: fixed;
            C    position: relative;
            D    float: left;
        正确答案: C
        解释：
            在css的定位机制有三种，分别是1：文档流，2：浮动（float），3定位（position）
            其中文档流的意义就是按照HTML里面的写法就是从上到下，从左到右的排版布局;
            在4答案选项中的属性，float（浮动）和position（定位）了
            A：position: absolute;
            生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位；都绝对定位了，肯定脱离了文档流。。
            B:position: fixed;
            生成绝对定位的元素，相对于浏览器窗口进行定位;相对于浏览器了，也和正常顺序排下来没什么关系。。
            C:position: relative;
            生成相对定位的元素，相对于其正常位置进行定位。生成相对定位，也就是说还在原本的上下左右之间，上下左右的元素都不变，so这个没有能脱离文档流。。就这个了
            D:float: left;都浮动出去了，还上哪保持原位置去。。
            最终答案选择C。




*/