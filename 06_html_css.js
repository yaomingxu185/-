/*
54  关于bootstrap3的说法，错误的是
            A    在windows上支持IE8
            B    在IOS上支持Opera
            C    在MAC OS及Windows上支持firefox
            D    在IOS及android上都支持chrome
            答案: B
            解释：IOS和Android上Opera不支持，windows上Safari不支持
55  下列哪些功能可以通过Cookie来实现？（ ）
            A    记录访问者的信息
            B    在页面之间传递信息
            C    自动识别用户
            D    对数据库进行操作
            答案: A B C 
            解释：
                A 项，访问者的信息一般都可以处理成 kv 键值对的形式，故可以保存在 Cookie 中，正确。
                B 项，通过设置 Cookie 的 path 等属性，可以在特定域名或 URI 下共享 Cookie 信息，正确。
                C 项，通过在 Cookie 中保存用户uid、服务器会话sid等方法，可以记录用户登录状态，正确。
                D 项，Cookie 是保存在用户浏览器上的小文本文件，不是数据库，也没有提供操作数据库的 API，故此项错误。
56  以下结构正确的是
            A    <ul><li>牛客网</li></ul>
            B    <ol><li>第一步</li><li>第二步</li></ol>
            C    <ul><p>牛客网真好</p></ul>
            D    <dl><dt>牛客网</dt><dd>网址为www.nowcoder.com</dd><dd>牛客网是一个专注于程序员的学习和成长的专业平台。</dd></dl>
            答案: A B D 
            解释： 
                <ul>里面只能放<li>. 
                但是<li>里面可以放<h*>,<p>等标签。 
                ul里面放其他标签，不光不符合语义，在IE7- 里面也会有问题： 
                如果<other>标签前面有<li>标签，浏览器会认为<other>为<li>的子节点
                <dl>自定义列表 <dt></dt>自定义列表项 <dd></dd>自定义列表项定义 </dl>
57  以下是行内元素的有（）
            A    span
            B    input
            C    ul
            D    p
            正确答案: A B
            解释：
                块级元素与行内元素的区别
                （1）块级元素会独占一行，其宽度自动填满其父元素宽度；
                行内元素不会独占一行，相邻的行内元素会排列在同一行，直至一行排不下才会换行，其宽度随元素的内容而变化。
                （2）块级元素可以包含行内元素和块级元素；行内元素不能包含块级元素。
                （3）行内元素设置width、height、margin-top、margin-bottom、padding-top、padding-bottom无效。
58  可继承的样式属性包括（）
            A    color
            B    background-color
            C    font-size
            D    border
            E    margin
            答案: A C
            解释：
                CSS中可以和不可以继承的属性
                一、无继承性的属性
                1、display：规定元素应该生成的框的类型
                2、文本属性：
                vertical-align：垂直文本对齐
                text-decoration：规定添加到文本的装饰
                text-shadow：文本阴影效果
                white-space：空白符的处理
                unicode-bidi：设置文本的方向
                3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left
                4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment
                5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index
                6、生成内容属性：content、counter-reset、counter-increment
                7、轮廓样式属性：outline-style、outline-width、outline-color、outline
                8、页面样式属性：size、page-break-before、page-break-after
                9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during
                二、有继承性的属性
                1、字体系列属性
                font：组合字体
                font-family：规定元素的字体系列
                font-weight：设置字体的粗细
                font-size：设置字体的尺寸
                font-style：定义字体的风格
                font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。
                font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。
                font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。
                2、文本系列属性
                text-indent：文本缩进
                text-align：文本水平对齐
                line-height：行高
                word-spacing：增加或减少单词间的空白（即字间隔）
                letter-spacing：增加或减少字符间的空白（字符间距）
                text-transform：控制文本大小写
                direction：规定文本的书写方向
                color：文本颜色
                3、元素可见性：visibility
                4、表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout
                5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style
                6、生成内容属性：quotes
                7、光标属性：cursor
                8、页面样式属性：page、page-break-inside、windows、orphans
                9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation
                三、所有元素可以继承的属性
                1、元素可见性：visibility
                2、光标属性：cursor
                四、内联元素可以继承的属性
                1、字体系列属性
                2、除text-indent、text-align之外的文本系列属性
                五、块级元素可以继承的属性
                1、text-indent、text-align
59  请选出所有的置换元素（）
            A    img
            B    input
            C    textarea
            D    select
        答案: A B C D
        解释：
            a) 置换元素：浏览器根据元素的标签和属性，来决定元素的具体显示内容。 
            例如：浏览器会根据<img>标签的src属性的 值来读取图片信息并显示出来，而如果查看(x)html代码，则看不到图片的实际内容；<input>标签的type属性来决定是显示输入 框，还是单选按钮等。 (x)html中 的<img>、<input>、<textarea>、<select>、<object> 都是置换元素。这些元素往往没有实际的内容，即是一个空元素。
            置换元素在其显示中生成了框，这也就是有的内联元素能够设置宽高的原因。
            b) 不可替换元素：(x)html 的大多数元素是不可替换元素，即其内容直接表现给用户端（如浏览器）。
            例如： <label>label中的内容</label> 标签<label>是一个非置换元素，文字label中的内容”将全被显示。
60  下面关于IE、FF下面CSS的解释区别描述正确的有？
            A    FireFox的div的内嵌div可以把父级的高度撑大，而IE6.0不可以，要自己设置高度。
            B    当设置为三列布局时，FireFox0的float宽度不能达到100％，而IE6.可以。当设置为两列布局时，两种浏览器都可以。
            C    火狐浏览器中，非float的div前面有同一父级的float的div，此div若有背景图，要使用clear：both，才能显示背景图，而IE6.0中不用使用clear：both
            D    在[text-decoration:underline]的属性下，IE6.0显示的下划线会比FireFox低一点。在FireFox中，部分笔画会在下划线的下面1个象素左右。
        答案: C D
        解释：
            A:IE6.0的div的内嵌div可以把父级的高度撑大，而FireFox不可以，要自己设置高度。
            B: 当设置为三列布局时，IE6.0的float宽度不能达到100％，而FireFox可以。当设置为两列布局时，两种浏览器都可以
61  在bootstrap中为了在input两侧添加额外元素，以下说法正确的是
            A    使用input-group来封装控件
            B    使用input-group-addon来添加前置元素
            C    使用input-group-tailon来添加后置元素
            D    必须为input添加form-control类
        答案: A B D
        解释：
            给input添加form-control类，使得input标签达到标签的100%宽度。
            input-group类将，关于input的一系列全部打包
            在input标签的前后添加input-group-addon，在input输入框前后添加元素























*/