/*
131  在 HTML 页面上包含如下所示的层对象，则 javascript 语句 document.getElementById(“info”).innerHTML 的值是（）
        <div id=”info” style=”display:block”><p> 请填写 </p></div>
            A    请填写
            B    <p>请填写</p>
            C    id=”info” style=”display:block”
            D    <div id=”info” style=”display:block”><p>请填写</p></div>
        正确答案: B
        解释：
            test.innerHTML:
            也就是从对象的起始位置到终止位置的全部内容,包括Html标签。
            上例中的test.innerHTML的值也就是“<span style="color:red">test1</span> test2 ”。
            test.innerText: 
            从起始位置到终止位置的内容, 但它去除Html标签 
            上例中的text.innerTest的值也就是“test1 test2”, 其中span标签去除了。
            test.outerHTML:
            除了包含innerHTML的全部内容外, 还包含对象标签本身。
            上例中的text.outerHTML的值也就是<div id="test"><span style="color:red">test1</span> test2</div>
132  CSS盒子模型中（）是透明的，这部分可以显示背景()
            A    border
            B    margin
            C    padding
            D    content
        正确答案: C
        解释：
            因为padding是边框和内容的分割，这部分必然是透明的，除非设置背景色
133  head 标签中必不少的是（ ）
            A    <meta>
            B    <link>
            C    <title>
            D    <script>
        正确答案: C 
        解释：
            按照标准来说<title>是必须需要的标签，但是浏览器因为很多前端编码并不规范，所以在没有的情况下有时并不影响，或者是再删除<title>之后，只是加载之前的缓存界面；但是<meta>是编码说明，删去会有很大麻烦，但是理论上来说，你如果是按照该浏览器默认的编码方式的文档，则不会有错。
            所以仅仅是理论上来说，<title>是必要的。
134  从四个选项选出不同的一个。
            A    <nav>
            B    <footer>
            C    <meta>
            D    <canvas>
        正确答案: C
        解释：
                A选项<nav></nav>，位于<body></body>中。标签定义导航链接；
                B选项<footer></footer>,位于<body></body>中。标签定义文档或节的页脚；
                C选项<meta>, <meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。 <meta> 标签位于文档的头部（<head></head>），不包含任何内容。<meta> 标签的属性定义了与文档相关联的名称/值对。
                D选项<canvas>。<canvas>位于<body></body> 中， 标签定义图形，比如图表和其他图像。
135 bootstrap中，一个元素需要在打印时隐藏，使用的类是
            A    visible-print-block
            B    visible-print-inline
            C    hidden-print
            D    print-hidden
        正确答案: C 
        解释：
            hidden-print:在浏览器端可见，打印时隐藏
136  下列不属于bootstrap3的标签是
            A    row
            B    row-fluid
            C    col-md-*
            D    form-group
        正确答案: B
        解释：
            应该是考2和3的差异性
            v3 沒有分 fluid 和 non-fluid ，所以移除了 .container-fluid 和 .row-fluid 兩個大框架容器，所有都是 fluid。
            例如做 nesting column 時，大的 grid 裡面某一塊要包小 grid ，v2.x 裡面一層得寫 .row-fluid，才能在小區塊內使用12欄 grid；但 v3 只要 .row > .row > .row…… 一層層包下去就行了。
137  能在1024的windows机器上显示8列而在肾6手机上显示12列的是
            A    col-md-8 col-xs-12
            B    col-lg-8 col-sm-12
            C    col-md-8 col-sm-12
            D    col-lg-8 col-xs-12
        正确答案: A 
        解释：
            col-md-8 col-xs-12

            - .col-xs- 超小屏幕 手机 <768px
            - .col-sm- 小屏幕 平板  >=768px
            - .col-md- 中等屏幕  >=992px
            - .col-lg- 大屏幕  >1200px
138  使用CSS来格式化网页，共有三种方式，以下哪一种不是：
            A    在HEAD中引用
            B    作为标记来引用
            C    在BODY中引用
            D    作为文件来引用
        正确答案: C
        解释：
            外链样式
            <link href="cc.css" type="text/css" rel="stylesheet" />
            行内样式
            <div style="border:solid 1px red;"></div>
            内链样式
            <style type="text/css">
            border:solid 1px red;
            </style>
            C是错误的，样式只能用于head 和行内还有文件调用
139  下面有关CSS sprites说法错误的是？
            A    允许你将一个页面涉及到的所有零星图片都包含到一张大图中去
            B    利用CSS的“background-image”，“background-repeat”，“background-position”的组合进行背景定位
            C    CSS Sprites虽然增加了总的图片的字节，但是很好地减少网页的http请求，从而大大的提高页面的性能
            D    CSS Sprites整理起来更为方便，同一个按钮不同状态的图片也不需要一个个切割出来并个别命名
        正确答案: C
        解释：
            CSS Sprites
            1.简介
            CSS Sprites在国内很多人叫css精灵，是一种网页图片应用处理方式。它允许将一个页面涉及到的所有零星图片都包含到一张大图中， 利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位， 访问页面时避免图片载入缓慢的现象。
            2.优点
            （1）CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能，这是CSS Sprites最大的优点，也是其被广泛传播和应用的主要原因；
            （2）CSS Sprites能减少图片的字节；
            （3）CSS Sprites解决了网页设计师在图片命名上的困扰，只需对一张集合的图片命名，不需要对每一个小图片进行命名，从而提高了网页制作效率。
            （4）CSS Sprites只需要修改一张或少张图片的颜色或样式来改变整个网页的风格。
            3.缺点
            （1）图片合并麻烦：图片合并时，需要把多张图片有序的合理的合并成一张图片，并留好足够的空间防止版块出现不必要的背景。
            （2）图片适应性差：在高分辨的屏幕下自适应页面，若图片不够宽会出现背景断裂。
            （3）图片定位繁琐：开发时需要通过工具测量计算每个背景单元的精确位置。
            （4）可维护性差：页面背景需要少许改动，可能要修改部分或整张已合并的图片，进而要改动css。在避免改动图片的前提下，又只能（最好）往下追加图片，但这样增加了图片字节。
140  请选出正确的答案
            A    HTML负责网页的结构
            B    CSS负责网页的内容
            C    javascript负责解决交互性问题
            D    Css负责网页的美化

        正确答案: A C D
        解释：
            A说法不严谨，应该是网页的结构，网站是另一个概念了
            结构的呈现应该是属于表现，而表现应该是由Css控制的，理想状态html只负责内容
141  bootstrap中关于h标签
        <h1>h1. Bootstrap heading <small>Secondary text</small></h1>
        以下说法正确的是
            A    <h1>最大
            B    <h6>最大
            C    <small>用法错误
            D    <small>表示副标题
        正确答案: A D
        解释：
            在标题内还可以包含<small>标签或赋予.small类的元素，可以用来标记副标题。




*/