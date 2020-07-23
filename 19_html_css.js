/*
182  如何在css文件中插入注释？（）
            A    //this is a comment
            B    //this is a comment//
            C    /*this is a comment* /
            D    ’this is a comment
        正确答案: C
        解释：
            一、HTML的注释方法 <!--注释内容-->
            二、CSS的注释方法 /*注释内容* /
            三、JavaScript的注释方法 /* 多行注释方式 * / //单行注释方式
183  负责美化网页的是什么技术
            A    css
            B    html
            C    javascript
            D    java
        正确答案: A
        解释：
            html负责盖房子
            css负责装修
184  CSS 样式，边距： 10px 20px 40px 30px ；哪一个是底边距？
            A    10px
            B    20px
            C    40px
            D    30px
        正确答案: C 
        解释：
            margin标记可以带一个、二个、三个、四个参数，各有不同的含义
            margin: 20px;（上、下、左、右各20px。）
            margin: 20px 40px;（上、下20px；左、右40px。）
            margin: 20px 40px 60px;（上20px；左、右40px；下60px。）
            margin: 20px 40px 60px 80px;（上20px；右40px；下60px；左80px。）
            在css中使用margin可以将margin-top，margin-right，margin-bottom，margin-left，缩写为一个标记，顺序为上右下左（顺时针）。
            不推荐使用上述四个标志，因为在不同浏览器对于margin的四个边都有不同的命名
185  下面有关css选择器的说法错误的是？
            A    .intro --- 选择 class="intro" 的所有元素。
            B    #firstname --- 选择 id="firstname" 的元素。
            C    div>p --- 选择所有 <div> 元素和所有 <p> 元素
            D    p --- 选择所有 <p> 元素
        正确答案: C 
        解释：
            iv>p的意思是说：选择所有父元素为div的p元素，如果一个p元素的父元素不是div，那么这个p元素是不会被选择的！！！
186  img标签中的alt属性的作用是
            A    表示图片的名称
            B    无实际意义，可有可无
            C    提供替代图片的信息，使屏幕阅读器能获取到关于图片的信息
            D    等比缩放图片大小
        正确答案: C  
        解释：
            alt 就是图片不出来时，显示的文本。即 提供替代图片的信息，使屏幕阅读器能获取到关于图片的信息
            title是鼠标一上去之后显示的文本
187  下面哪一个标符可以产生一个表行？
            A    <HR>
            B    <BR>
            C    <TR>
            D    <T1>
        正确答案: C
        解释：
            定义和用法 
            <hr> 标签在 HTML 页面中创建一条水平线。 水平分隔线（horizontal rule）可以在视觉上将文档分隔成各个部分。
            定义和用法 <br> 可插入一个简单的换行符。 <br> 标签是空标签（意味着它没有结束标签，因此这是错误的：<br></br>）。
            在 XHTML 中，把结束标签放在开始标签中，也就是 <br />。 请注意，<br> 标签只是简单地开始新的一行，而当浏览器遇到 <p> 标签时，通常会在相邻的段落
            之间插入一些垂直的间距。
            定义和用法 <tr> 标签定义 HTML 表格中的行。 tr 元素包含一个或多个 th 或 td 元素。
188 以下哪一个选项是html5的dtd？
            A    <!DOCTYPE html>
            B    <!DOCTYPE HTML PUBLIC>
            C    <!DOCTYPE xhtml>
            D     <!DOCTYPE HTML5>
        正确答案: A 
        解释：
            <!DOCTYPE> 声明必须位于 HTML5 文档中的第一行，也就是位于 <html> 标签之前。该标签告知浏览器文档所使用的 HTML 规范。
            doctype 声明不属于 HTML 标签；tag; 它是一条指令，告诉浏览器编写页面所用的标记的版本。
            在所有 HTML 文档中规定 doctype 是非常重要的，这样浏览器就能了解预期的文档类型。
            HTML 4.01 中的 doctype 需要对 DTD 进行引用，因为 HTML 4.01 基于 SGML。而 HTML 5 不基于 SGML，因此不需要对 DTD 进行引用，
            但是需要 doctype 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。
189  下面标签嵌套正确的是
            A    <ul><p>牛客网</p></ul>
            B    <a href="#"><a href="#">牛客网</a></a>
            C    <dl><li>牛客网</li></dl>
            D    <ol><li>牛客网</li></ol>
        正确答案: D
        解释：
                A.ul只能紧挨着li
                B.a中不能再嵌套a
                C.dl dt
                D.ol li是有序排列
190  下列js可以让一个input的背景颜色变成红色的是？
            A    inputElement.style.backgroundColor = 'red';
            B    inputElement.backgroundColor = 'red';
            C    inputElement.style.backgroundColor = '#0000';
            D     inputElement.backgroundColor = '#0000';
        正确答案: A 
        解释：
            一、题：
            用js让一个input的背景颜色变成红色。
            二、思路：
            获取该元素
            通过该元素拥有的属性或方法来改变元素的样式。
            三、细节：
            获取元素可以借助document.getElementById()/document.getElementsByTagName()等若干方法，也可以利用层级关系（父子关系、兄弟关系等）。
            而这一点题目已经直接略过了，它直接给出了该元素的引用名称inputElement。
            通过js来改变元素样式的两个最常见的API为：style、className。使用style接口一次只能改变一个样式，而使用className则可以同时改变多个样式，
            当然前提是已经用css定义该类名的相关样式。
            backgroundColor? background-color?
            简单说一下：在使用点运算符时，浏览器看到“-”就没法正确解析了，在那种情况下，只能将该变量使用驼峰命名法来表示。而使用方括号表示法，
            "-"被理解为字符串中的内容，该字符串能被正确解析。
            eg:
            inputElement.style.backgroundColor = 'red'; // 这是没问题的
            inputElement.style.background-color = 'red'; // 这是错的，浏览器看不懂啊...
            inputElement.style["background-color"] = 'red'; // 这也是可以的
            表示红色有若干种方法:
            颜色名：red
            百分数：rgb(100%, 0%, 0%)
            数值：rgb(255, 0, 0)
            十六进制：#FF0000
            简写的十六进制：#F00
191  元素的alt和title有什么异同，选出正确的说法？
            A    不同的浏览器，表现一样
            B    alt和title同时设置的时候，alt作为图片的替代文字出现，title是图片的解释文字
            C    alt和title同时设置的时候，title作为图片的替代文字出现，alt是图片的解释文字
            D    以上说法都不正确
        正确答案: B 
        解释：
            alt是html标签的属性，而title既是html标签，又是html属性。 
            title标签这个不用多说，网页的标题就是写在<title></title>这对标签之内的。 
            title作为属性时，用来为元素提供额外说明信息。例如，给超链接标签a添加了title属性，把鼠标移动到该链接上面是，就会显示title的内容
            ，以达到补充说明或者提示的效果。 
            而alt属性则是用来指定替换文字，只能用在img、area和input元素中（包括applet元素），用于网页中图片无法正常显示时给用户提供文字说明使其了解图像信息。
192  请选出错误的标签
            A    <p>段落</p>
            B    <h1>标题</h1>
            C    <blockquote>引用内容</blockquote>
            D   <img src=”http://www.nowcoder.com/”></img>
        正确答案: D
        解释：
            img标签不用成对出现
            <blockquote> 标签定义摘自另一个源的块引用。
            <blockquote> 与 </blockquote> 之间的所有文本都会从常规文本中分离出来，经常会在左、右两边进行缩进，而且有时会使用斜体。也就是说，块引用拥有它们自己的空间。



*/