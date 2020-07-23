/*
193  下面哪一个标符可以产生一个水平线？
            A    <HR>
            B    <BR>
            C    <TR>
            D    <T1>
        正确答案: A 
        解释：
            水平线 br换行 tr表格中的行
194  在 HTML 页面中包含一个按钮控件 mybutton ，如果要实现点击该按钮时调用已定义的 JavaScript 函数 compute ，要编写的 HTML 代码是()
            A    <input name=”mybutton” type=”button” onBlur=”compute()” value=”计算”>
            B    <input name=”mybutton” type=”button” onFocus=”compute()” value=”计算”>
            C    <input name=”mybutton” type=”button” onClick=”function compute()” value=”计算”>
            D    <input name=”mybutton” type=”button” onClick=”compute()” value=”计算”>
        正确答案: D
        解释：
            A选择中的onBlur表示元素失去焦点时触发。所以A错误。
            B选择中的onFocus表示元素获取焦点时触发。所以B错误。
            C选择中的onClick=”function compute()”，function关键字不属于对函数的调用，而是对函数的声明。所以C错误。
195  下列 html 元素当中，都属于块级元素的是
            A    h3，ul，form，table，p
            B    h2，table，ul，a，input
            C    p，ul，form，div，strong
            D    div，p，h1，table，span
        正确答案: A
        解释：
                常用的块状元素有：
                <div>、<p>、<h1>...<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>
                常用的内联元素有：
                <a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>
                常用的内联块状元素有：
                <img>、<input>
196  表示新开一个标签页的超链接代码是：（）
            A    <a href=URL target=_new>..</a>
            B    <a href=URL target=_self>..</a>
            C    <a href=URL target=_blank>..</a>
            D    <a href=URL target=_parent>..</a>
        正确答案: C
        解释：
                veiw_window 打开新窗口
                view_frame 在框架中打开
                有 4 个保留的目标名称用作特殊的文档重定向操作：
                _blank: 在新窗口打开 
                _self: 默认。在相同框架中打开
                _parent: 在父框架集中打开
                _top: 在整个窗口打开
197  下面span标签中Hello World字体的颜色是：（）
        <style type="text/css">
        span {
            color: green;
        }
        .red {
            color: red;
        }
        #blue {
            color: blue;
        }
        </style>
        <span id="blue" class="red" style="color:black;">Hello World</span>
            A    green
            B    red
            C    blue
            D    black
        正确答案: D
        解释：
            权重 ：
            内联 权重1000 ， 
            ID 选择器 权重：100， 
            类 伪类 属性选择器 权重：10 ，
            类型选择器 权重：1
            除!important ，内联权重最大！
198  浮动会导致页面的非正常显示，以下几种清除浮动的方法，哪个是不推荐使用的？
            A    在浮动元素末尾添加一个空的标签例如 <div style=”clear:both”></div>
            B    通过设置父元素overflow值为hidden；
            C    父元素也设置浮动
            D    给父元素添加clearfix类
        正确答案: C
        解释：
                四种方法都可以清除，最常用的是DA方法；B方法的话，如果子元素中有使用
                了绝对定位，在页面上显示是在父元素外面，一般就没法使用B方法了。大型
                项目一般会多层嵌套，如果采用给父元素设置浮动的方法，
                那么父元素的父元素很有可能也要设置浮动，页面布局很容易乱掉
                完美的解答: https://segmentfault.com/a/1190000004865198
199  下面有关HTML的Doctype和严格模式与混杂模式的描述，错误的是？
            A    <!DOCTYPE> 声明位于文档中的最前面，处于<html>标签之前。告知浏览器的解析器，用什么文档类型 规范来解析这个文档
            B    在标准模式中，浏览器根据规范呈现页面；在混杂模式中，页面以一种比较宽松的向后兼容的方式显示
            C    DOCTYPE不存在或格式不正确会导致文档以标准模式呈现
            D    浏览器根据DOCTYPE是否存在以及使用的哪种DTD来选择要使用的呈现方法
        正确答案: C  
        解释：
            1.<!DOCTYPE> 声明位于文档中的最前面，处于 <html> 标签之前。告知浏览器的解析器，用什么文档类型 规范来解析这个文档。
            2.严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
            3.DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。
            文档类型
                DTD（文档类型定义）是一组机器可读的规则，他们定义 XML 或 HTML 的特定版本中允许有什么，不允许有什么。在解析网页时，浏览器将使用这些规则检查页面的有效性并且采取相应的措施。浏览器通过分析页面的 DOCTYPE 声明来了解要使用哪个 DTD ，由此知道要使用 HTML 的哪个版本。
            DOCTYPE 当前有两种风格，严格（ strict ）和过渡（ transitional ）。过渡 DOCTYPE 的目的是帮助开发人员从老版本迁移到新版本。
            如果发送具有正确的 MIME 类型的 XHTML 文档，理解 XML 的浏览器将不显示无效的页面。
            浏览器模式
                浏览器有两种呈现模式：标准模式和混杂模式（quirks mode）。在标准模式中，浏览器根据规范呈现页面；在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。
            DOCTYPE 切换
            对于 HTML 4.01 文档，
            包含严格 DTD 的 DOCTYPE 常常导致页面以标准模式呈现。
            包含过度 DTD 和 URI 的 DOCTYPE 也导致页面以标准模式呈现。
            但是有过度 DTD 而没有 URI 会导致页面以混杂模式呈现。
            DOCTYPE 不存在或形式不正确会导致 HTML 和 XHTML 文档以混杂模式呈现。
200  <i><em>标签语义分别表示斜体和加粗，是否正确？
            A    正确
            B    错误
        正确答案: B
        解释：
            <i><em>都表示斜体，如果这种斜体字对该浏览器不可用的话，可以使用高亮、反白或加下划线等样式。区别在于<em>表示强调，<i>单纯表示斜体
            <i>标签只是单纯的样式标签，表现斜体的样式，但是语义上与普通文本无异；<em>标签在样式上表示为斜体，同时在语义上也表示为斜体。<em>标签可以被设备识别，而<i>标签不能被识别。
201  如何获取下面表单 select域的选择部分的文本？()
        <form name="a">
        <select name="a" size="1" id=”obj”>
        <option value="a">1</option>
        <option value="b">2</option>
        <option value="c">3</option>
        </select>
        </form> 
            A    obj.options[obj.selectedIndex].text
            B    obj.options[obj.selectedIndex].value
            C    obj. value
            D    obj.text
        正确答案: A
        解释：
            window.onload = function(){ //首先获得下拉框的节点对象； var obj = document.getElementById(&quot;obj&quot;); 
                //1.如何获得当前选中的值？： var value = obj.value; //2.如何获得该下拉框所有的option的节点对象 var options = obj.options; 
                //注意：得到的options是一个对象数组 //3.如何获得第几个option的value值?比如我要获取第一option的value,可以这样： var value1 =options[0].value;
                //4.如何获得第几个option的文本内容?比如我要获取第一option的文本,可以这样： var text1 = options[0].text;
                //5.如何获得当前选中的option的索引？ var index = obj.selectedIndex; //6.如何获得当前选中的option的文本内容？
                //从第2个问题，我们已经获得所有的option的对象数组options了 //又从第5个问题，我们获取到了当前选中的option的索引值 
                //所以我们只要同options[index]下标的方法得到当前选中的option了 var selectedText =options[index].text; }




*/