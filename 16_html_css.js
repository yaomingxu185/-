/*
152  以下使用的是驼峰式命名的有
            A    typesOfFish
            B    types-of-fish
            C    typeoffish
            D    type_of_fish
        正确答案: A 
        解释：
            驼峰大小写格式是指第一个字母小写，剩下的字母每个单词的首字母大写
            驼峰命名法分为大驼峰命名法(TypesOfFish)和小驼峰命名法(typesOfFish),大驼峰命名法也就是帕斯卡命名法。
153  浏览器将打开一个新的窗口，应在a标签中使用
            A    "target=_self"
            B    "target=_top"
            C    "target=_blank"
            D    "target=_parent"
        正确答案: C  
        解释：
            target的值：      _blank         在新窗口打开链接
                            _self            在当前框架中打开链接
                            _parent       在父框架打开链接
                            _top             在当前窗口打开链接
                            framename  在指定框架打开链接
154  关于html的盒模型，下列说法正确的是？
            A    margin是内边距
            B    padding是外边距
            C    border是边框
            D    border-radius是css3标准，因此IE并不支持border-radius属性
        正确答案: C
        解释：
            IE 9+ 支持border-radius属性。
            圆角css代码：border-radius只有在以下版本的浏览器：Firefox4.0+、Google Chrome 10.0+、Opera 10.5+、IE9+支持border-radius标准语法格式
            参考链接： http://www.poluoluo.com/jzxy/200809/44948.html
155  以下哪个选项不是块级元素（）
            A    div
            B    span
            C    p
            D    h1
        正确答案: B
        解释：
                常见的内联元素：<a>、<b>、<span>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code>
                常见的块级元素：<div>、<p>、<hx>、<ol>、<ul>、<dl>、<tabel>、<address>、<blockquote>、<form>
                常见的内联块级元素：<img>、<input>
156  以下代码做什么？
        <input type =”text” name=”user_name” autofocus=”autofocus”/>
            A    页面加载后，浏览器将自动聚焦user_name字段
            B    都不正确
            C    表单加载时创建一个text字段
            D    加载一个text表单
        正确答案: A 
        解释：
            首先，题目中的antofocus打错了，应该是autofocus，这是HTML5新增属性，button和input标签都可以有。
            &lt;input&gt; 标签用于搜集用户信息。 根据不同的 type 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、复选框、掩码后的文本控件、
            单选按钮、按钮等等。 Text 对象 Text 对象代表 HTML 表单中的文本输入域。 在 HTML 表单中 <input type="text"> 每出现一次，Text 对象就会被创建。 
            该元素可创建一个单行的文本输入字段。当用户编辑显示的文本并随后把输入焦点转移到其他元素的时候，会触发 onchange 事件句柄。 name 设置或返回文本域的名称。
157  下列哪个标签告诉浏览器把其中的文本表示为强调的内容
            A    <br />
            B    <em></em>
            C    <div></div>
            D    <h1></h1>
        正确答案: B
        解释：
            A  <br />  换行
            B   <em>  强调、
            C   </div>   分区
            D  <h1> 到  <h6>  标题
            网站标签加粗的方式：
            1、<b></b>加粗标签元素告诉浏览器把其加b标签的文本以粗体方式显示给浏览者。
            2.<strong>标签（不仅是加粗，更加深了语气，符合W3C的标准。）。
            3.<em> 标签是告诉浏览器把其中的文本表示为强调的内容。Internet Explorer 等浏览器会用斜体字显示，有些浏览器会用改变文字的颜色等其他方法来实现强调的效果。需要注意的事：
            a.如果强调太多，有些重要的短语就会被漏掉；
            b.如果强调太少，就无法真正突出重要的部分。这与调味品一样，最好还是不要滥用强调。
            4.<h>内容标题标签，能够提升权重。
            5.font-weight:bold样式加粗标签，而属性值有三种指定方法：
            a.关键字法；
            关键字包括“normal”和“bold”两个；
            b.相对粗细值法；
            相对粗细也是由关键字定义，但是它的粗细是相对于上级元素的继承值而言的，包括“bolder”和“lighter”两个；
            c.数字法；
            从“100”到“900”的9个数字序列（注意，只能是100、200之类的整百数）。这些数字序列代表从最细（100）到最粗（900）的字体粗细程度。每一个数字定义的粗细都要比上一个等级稍微粗一些。
158  哪一个html盒模型中的border的正确写法？
            A    p{  border:5px   solid red;}
            B    p{border:5px  <br> red solid; }
            C    p{border:  red solid 5px; }
            D    p{border: solid red 5px; }
        正确答案: A 
        解释：
            为了代码的可读性，建议按照，border-width，border-style，border-color，的顺序书写。
            但其实顺序调换是不影响呈现的
            此题A、C、D选项在DW中得到的效果是一样的，w3c中的写法为p{border:5px solid red;}    如果不设置其中的某个值，也不会出问题，比如 border:solid #ff0000; 也是允许的。
159  CSS 样式，通过设置左和右 ____ ，可以把块元素调整到中间位置。
            A    边距为auto
            B    边距为50%
            C    边距为none
            D    边距为center
        正确答案: A
        解释：
            margin：0 auto 更标准一些。margin-left和margin-right值为auto，页面居中。只是margin-left：auto 页面左对齐，只是margin-right：auto 页面右对齐。
            margin-top和margin-bottom对设置auto，没有这个效果！
160  设置文字颜色应使用属性
            A    font-family
            B    font-color
            C    color
            D    font
        正确答案: C 
        解释：
            css样式中，字体对颜色设置为：color; 
            背景颜色为：background-color；
161  css属性overflow属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。
            A    True
            B    False
        正确答案: A
        解释：
            参数是scroll时候，必会出现滚动条。
            参数是auto时候，子元素内容大于父元素时出现滚动条。
            参数是visible时候，溢出的内容出现在父元素之外。
            参数是hidden时候，溢出隐藏。
162  对于border-radius，说法错误的是
            A    表示圆角边框
            B    IE8支持良好
            C    IE9支持良好
            D    firefox支持良好
        正确答案: B  
        解释：
            Internet Explorer 9+ 支持 border-radius 和 box-shadow 属性。
            Firefox 、 Chrome 以及 Safari 支持所有新的边框属性。
            对于 border-image ， Safari 5 以及更老的版本需要前缀 -webkit-
            Opera 支持 border-radius 和 box-shadow 属性  但是对于 border-image 需要前缀 -o-




*/