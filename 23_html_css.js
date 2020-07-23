/*
221  <svg> 标签的目的是什么？
      A  用来结构化网页
      B  用可伸缩矢量图来画图或文本
      C  用CSS来预格式化图片或文本
      D  用来插入JavaScript内容
    正确答案: B
    解释：
      G 即 Scalable Vector Graphics，是一种用来绘制 矢量图 的 HTML5 标签。你只需定义好XML属性，就能获得一致的图像元素。
222  CSS 样式，边距： 10px 20px 40px 30px ；哪一个是底边距？
      A  10px
      B  40px
      C  30px
      D  20px
    正确答案: B
    解释：
      巧记：顺时针，上右下左，仿佛时针从12点或0点开始走一样！
      padding:10px 5px 15px 20px;
      上填充是 10px
      右填充是 5px
      下填充是 15px
      左填充是 20px

      padding:10px 5px 15px;
      上填充是 10px
      右填充和左填充是 5px
      下填充是 15px

      padding:10px 5px;
      上填充和下填充是 10px
      右填充和左填充是 5px

      padding:10px;
      所有四个填充都是 10px
223  下列哪个不是块元素？
      A  <div>
      B  <p>
      C  <h1>
      D  <span>
    正确答案: D
    解释：
      ---> 块级元素 在浏览器显示时，通常会以新行来开始（和结束）。块级元素按照其应用于结构还是内容分为三种：结构化块状元素，终端块状元素，多目标块状元素。
      结构化块状元素： 这类元素用于构造文档的结构，没有语义上的含义，仅仅划分出了文档的组织方式，并没有体现文档的内容。 
      终端块状元素： 这类元素用于从结构转向内容，拥有语义上的含义，能够表明内容的性质。终端块状元素属于结构的终点，它们不能再包含其他块级元素，只能包含文本或行级元素。
      多目标块状元素： 多目标指的是可以自由的扩展或嵌套文档的结构，以可以终端的形式出现。当多目标块状元素以结构化的方式使用时就含有结构化的内涵，以终端的形式使用就含有语义的内涵。 
      ----> 内联元素 (inline element)或称为行内元素 一般都是基于语义级(semantic)的基本元素，只能容纳文本或者其它内联元素。
      简单判断方法 :
      块级元素会独占一行,默认情况下,其宽度自动填满其父元素宽度。
      行内元素不会独占一行,相邻的行内元素会排列在同一行里,直到一行排不下,才会换行,其宽度随元素的内容而变化。
224  下列哪一个是页面载入时会触发什么Dom事件？
      A  onchange
      B  onaclive
     C   onload
     D   onresize
      正确答案: C
      解释：
        onload是加载完触发
        A是指表单内容改变，
        B没有见过
        C是对的，load完毕后，会触发DOM的加载
        D是BOM的事件
225  在不改变元素的显示属性的情况下，元素都是可以设置宽度的，并且能够设置成功，这句话是否正确？
      A  正确
      B  错误
    正确答案: B
    解释：
      在CSS中，html中的标签元素大体被分为三种不同的类型： 块状元素、内联元素(又叫行内元素)和内联块状元素。 

      常用的块状元素有：
      <div>、<p>、<h1>…<h6>、<ol>、<ul>、<dl>、<table>、<address>、<blockquote> 、<form>
      什么是块级元素？ 
      在html中<div>、<p>、<h1>、<form>、<ul>和<li>就是块级元素。设置display:block就是将元素显示为块级元素。如下代码就是将内联元素a转换为块状元素，从而使a元素具有块状元素特点。 a{display:block;} 
      块级元素特点：
      1、每个块级元素都从新的一行开始，并且其后的元素也另起一行。（真霸道，一个块级元素独占一行）;
      2、元素的高度、宽度、行高以及顶和底边距都可设置。
      3、元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。 

      常用的内联元素有： 
      <a>、<span>、<br>、<i>、<em>、<strong>、<label>、<q>、<var>、<cite>、<code> 在html中，<span>、<a>、<label>、<strong> 和<em>就是典型的内联元素（行内元素）（inline）元素。
      当然块状元素也可以通过代码display:inline将元素设置为内联元素。如下代码就是将块状元素div转换为内联元素，从而使div 元素具有内联元素特点。
      div{ display:inline; } ...... <div>我要变成内联元素</div> 
      内联元素特点： 
      1、和其他元素都在一行上； 
      2、元素的高度、宽度及顶部和底部边距不可设置； （这是答案^-^）
      3、元素的宽度就是它包含的文字或图片的宽度，不可改变。 

      常用的内联块状元素有：
      <img>、<input>
      内联块状元素（inline-block）就是同时具备内联元素、块状元素的特点，代码display:inline-block就是将元素设置为内联块状元素。
      inline-block 元素特点： 
      1、和其他元素都在一行上； 
      2、元素的高度、宽度、行高以及顶和底边距都可设置。
226  以下关于盒子模型描述正确的是：
      A  标准盒子模型中：盒子的总宽度 ＝ 左右margin + 左右border + 左右padding + width
      B  IE盒子模型中：盒子总宽度 ＝ 左右margin + 左右border + width
      C  标准盒子模型中：盒子的总宽度 ＝ 左右margin + 左右border + width
      D  IE盒子模型中：盒子总宽度 ＝ width
    正确答案: A
    解释：
      标准盒子模型 ＝ margin + border + padding + content （content =  width | height）
      IE盒子模型 ＝ margin + content （content = border + padding + width | height）



*/