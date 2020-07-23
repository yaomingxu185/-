/*
111  JavaScript 写在 HTML 代码中的哪一部分，会导致页面在加载的时候自身被执行（）
            A    文件头部位置
            B    文件尾
            C    <head>标签部分
            D    <body>标签部分
        正确答案: D
        解释：
            想 js 在页面加载的时候自执行，script 就只能插入在 body 内，题目没毛病。
            head 标签是设计用于一些静态资源的预加载，与“解析”没有任何关系，浏览器会先加载 head 标签内的静态资源（css 和 js），这时候的 js 并没有执行，而是被
            UI 线程阻塞了，然后浏览器会开始构建 DOM Tree，然后开始构建 CSSOM Tree（即题目说的加载页面），最后才会执行 head 中加载的 js。
            然后要注意的是，浏览器在解析 body 内的样式以及 script 标签的时候是串行的，就是说你的 script 标签内的代码会即时执行，然后再去解析下面标签的內联样式
            （这也是为什么內联样式的优先级会比引用的高）
            放在<head>部分会先加载完js再加载页面
            放在<body>部分会在加载页面时候加载
112  DHTML 不具备的优点是（）
            A    动态样式
            B    动态语法
            C    动态内容
            D    动态定位
        正确答案: B 
        解释：  
            DHTML是Dynamic HTML的简称，就是动态的HTML(标准通用标记语言下的一个应用)，是相对传统的静态的html而言的一种制作网页的概念。
            DHTML只是HTML、CSS和客户端脚本的一种集成，即一个页面中包括html+css+javascript(或其它客户端脚本)
            html+css+javascript（或其他脚本）的优点：html确定页面框架，css和脚本决定页面样式、动态内容和动态定位。
113  超链接访问过后hover样式就不出现了，被点击访问过的超链接样式不再具有hover和active了，解决方法是改变CSS属性的排列顺序？（）
            A    a:link {} a:visited {} a:hover {} a:active {}
            B    a:visited {} a:link {} a:hover {} a:active {}
            C    a:active {} a:link {} a:hover {} a:visited {}
            D    a:link {} a:active {} a:hover {} a:visited {}
        正确答案: A
        解释：
            为了符合浏览器解析CSS所遵循的就近原则，将一般的放在上面，将特殊的放在下面。
            a:link; a:visited; a:hover; a:active;
            a:hover必须放在a:link和a:visited之后；
            a:active必须放在a:hover之后。
114  可以包含在HTML网页head标签中的有
            A    <title>
            B    <meta>
            C    <body>
            D    <link>
        正确答案: A B D
        解释：
            <head> 标签用于定义文档的头部，它是所有头部元素的容器。<head> 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。
            下面这些标签可用在 head 部分：<base>, <link>, <meta>, <script>, <style>, 以及 <title>。
            <title> 定义文档的标题，它是 head 部分中唯一必需的元素。
115  默认情况下，以下哪些元素时行内元素（）
            A    <p>
            B    <span>
            C    <a>
            D    <h2>
        正确答案: B C
        解释：
            BC 常见的块级元素： <p> <div> <ul> <li> <h1> <hr> <table>
            常见的行内元素： <span> <a> <b> <strong> <i> <big> <small> 
            行内块元素： <img> <input> <textarea> <button>
116  下面有关html结构描述正确的有？
            A    <ul> <li> </li> </ul>
            B    <ol> <li> </li> </ol>
            C    <dl><dt><dd></dd></dt></dl>
            D    <table> <tr> <td></td> </tr> </table>
        正确答案: A B D 
        解释：
            <ul>
            <li> </li>
            </ul>
            
            <ol>
            <li> </li>
            </ol>
            
            <dl>
            <dt> </dt>
            <dd> </dd>
            </dl>
            <table>代表表格</table> 
            <tr>代表表格中的一行</tr> 
            <td>代表表格中的一列</td>
117  jquery ajax中都支持哪些数据类型？
            A    xml
            B    html
            C    jsonp
            D    json
        正确答案: A B C D  
        解释：
            数据类型
            $.ajax()函数依赖服务器提供的信息来处理返回的数据。如果服务器报告说返回的数据是XML，那么返回的结果就可以用普通的XML方法或者jQuery的选择器来遍历。如果见得到其他类型，
            比如HTML，则数据就以文本形式来对待。
            通过dataType选项还可以指定其他不同数据处理方式。除了单纯的XML，还可以指定 html、json、jsonp、script或者text。
            http://www.jquery.org.cn/jqapi/jQuery.ajax.html
118  不换行必须设置哪些项？
            A    word-break
            B    letter-spacing
            C    white-space
            D    word-spacing
        正确答案: A C
        解释：
            通过使用 word-break 属性，可以让浏览器实现在任意位置的换行。
            值              	描述
            normal          	使用浏览器默认的换行规则。
            break-all	        允许在单词内换行。
            keep-all	        只能在半角空格或连字符处换行。
            white-space           属性设置如何处理元素内的空白。
            white-space 属性设置如何处理元素内的空白。
            值	                描述
            normal          	默认。空白会被浏览器忽略。
            pre	                空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
            nowrap	            文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
            pre-wrap        	保留空白符序列，但是正常地进行换行。
            pre-line	        合并空白符序列，但是保留换行符。
            inherit	            规定应该从父元素继承 white-space 属性的值。
119  下列关于btn标签的说法正确的是
            A    btn-group能将按钮组成按钮组
            B    btn-toolbar能将btn做成复杂组件
            C    btn-group可以嵌套使用
            D    可以使用btn-group-lg，btn-group-sm来调整按钮大小
        正确答案: A B C D 
        解释：
            .btn-group该class用于形成基本的按钮组；
            .btn-toolbar该 class 有助于把几组 <div class="btn-group"> 结合到一个 <div class="btn-toolbar"> 中，一般获得更复杂的组件。
            btn-group-lg, .btn-group-sm, .btn-group-xs  这些 class 可应用到整个按钮组的大小调整
120  在使用table表现数据时，有时候表现出来的会比自己实际设置的宽度要宽，为此需要设置下面哪些属性值？
            A    cellpadding=”0″
            B    padding:0
            C    margin:0
            D    cellspacing=”0″
        正确答案: A D
        解释：
            单元格边距(表格填充)(cellpadding) -- 代表单元格外面的一个距离,用于隔开单元格与单元格空间单；
            元格间距(表格间距)(cellspacing) -- 代表表格边框与单元格补白的距离,也是单元格补白之间的距离。
121  以下哪些标签是合法的HTML5标签？
            A    <p></p>
            B    <center></center>
            C    <pre></pre>
            D    <img></img>
        正确答案: A C
        解释：
            <img>标签没有闭合，应该是<img src="" />
            <pre> 元素表示预定义格式文本
            HTML5中已不再支持<center></center>标签了。





*/