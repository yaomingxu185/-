/*
212  下面关于 CSS 布局的描述，不正确的是？（ ）
        A  块级元素实际占用的宽度与它的 width 属性有关；
        B  块级元素实际占用的宽度与它的 border 属性有关；
        C  块级元素实际占用的宽度与它的 padding 属性有关；
      D   块级元素实际占用的宽度与它的 background 属性有关。
    正确答案: D
    解释：
      素实际占用的宽度=width+border*2+padding*2+margin*2 所以与width border padding margin有关，与background无关
213  下列哪个不属于id与class之间的区别
      A  id在文档中只能使用一次，而class可以多次使用
      B  id比class具有更高的样式优先级
      C  一个元素只能有一个id属性值，却可以拥有多个class属性值
      D  在class中可以定义:hover伪类，在id中不能定义
    正确答案: D
    解释：
      伪类选择符E:hover的定义和用法:
      设置元素在其鼠标悬停时的样式。
      E元素可以通过其他选择器进行选择，比如使用类选择符、id选择符、类型选择符等等。
      特别说明:IE6并非不支持此选择符，但能够支持a元素的:hover ，也就是只支持通过类型选择符选择的a元素的:hover 。
      上面是我复制粘贴来的哈，出处：http://www.cnblogs.com/myhomepages/archive/2016/10/28/5986239.html
      总之，id 和 class 都可以
214  下面有关html Doctype的描述，说法错误的是？
      A  它的责任就是告诉浏览器文档使用哪种html或者xhtml规范
      B  不同文档模式主要影响CSS内容的呈现，尤其是浏览器对盒模型的解析
      C  不同浏览器在混杂模式下的行为差异非常大，如果不使用某些hack技术，跨浏览器的行为根本就没有一致性可言。
      D  如果在文档开始处没有发现文档类型声明，则所有浏览器都会默认开启严格模式
    正确答案: D
    解释：
      type不存在或错误，浏览器默认 混杂模式
215  以下正确表示10^2的是
      A  10<sub>2</sub>
      B  102
      C  10<mark></mark>
      D  10*2
    正确答案: B
    解释：
      包含在 <sup> 标签和其结束标签 </sup> 中的内容将会以当前文本流中字符高度的一半来显示，但是与当前文本流中文字的字体和字号都是一样的。
      <sup></sup>上标
      <sub></sub>下标
      <mark></mark>突出显示
      <sup>下标文本</sup>
      <sub>上标文本</sub>
      <mark>突出显示</mark>
      可以看做是气球飘在上方是P，沉在下面是b
216  以下说法，错误的是
      A  mark用于显示变粗的文字
      B  <del>用于显示删除的文本
      C  <ins>的文字会带下划线
      D  <strong>用于强调文本
    正确答案: A
    解释：
    mark 高亮显示文本
    <del>用于显示带中划线的文子
217  在 css 选择器当中，优先级排序正确的是
      A  id选择器>标签选择器>类选择器
      B  id选择器>类选择器>标签选择器
      C  类选择器>标签选择器>id选择器
      D  标签选择器>类选择器>id选择器
    正确答案: B 
    解释：
      CSS选择器如下：
      　　1. 标签名选择器     div { color：Red;}         /即页面中的各个标签名的css样式
      　　2.类选择器          .divClass {color:Red;}       /即定义的每个标签的class 中的css样式
      　　3.ID选择器         #myDiv  {color:Red;}        /即页面中的标签的id
      　　4.后代选择器（类选择器的后代选择器）  .divClass  span { color:Red;}   /即多个选择器以逗号的格式分隔 命名找到准确的标签
      　　5.群组选择器   div,span,img {color:Red}    /即具有相同样式的标签分组显示
      　　选择器的优先级 1.最高优先级是 (直接在标签中的设置样式，假设级别为1000)<div style="color:Red;"></div>
      　　2.次优先级是（ID选择器 ,假设级别为100）   #myDiv{color:Red;}
      　　3.其次优先级是（类选择器，假设级别为10） .divClass{color:Red;}
      　　4.最后优先级是 （标签选择器，假设级别是 1）  div{color:Red;}
      　　5.那么后代选择器的优先级就可以计算了啊
      　　比如 .divClass  span { color:Red;}   优先级别就是：10+1=11
218  选出你认为最合理的定义标题的方法。
      A  <span class=”heading”>文章标题</span>
      B  <p><b>文章标题</b></p>
      C  <h1>文章标题</h1>
      D  <strong>文章标题</strong>
    正确答案: C 
    解释：
      H1不是随便用的，H1有利于SEO优化，一般来说一个页面里只有一个
      A是添加了一个类
      B是用加粗
      C使用标签h1
      D是强调
      自然是选用标签h1
219  <table>标签中，哪个是表格边框线的粗细？
      A  bordercolor
      B  border
      C  cellspacing
      D  cellpadding
    正确答案: B
    解释：
      bordercolor表示边框颜色；
      cellspacing表示单元格之间的间隔；
      cellpadding表示单元格内边距。
220  下面哪条声明能固定背景图片（）
      A  background-attachment:fixed;
      B  background-attachment:scroll;
      C  background-origin: initial;
      D  background-clip: initial;
    正确答案: A  
    解释：
      background-attachment
      有三个值，scroll是默认值，背景图像会随着页面其余部分的滚动而移动。
              fixed当页面的其余部分滚动时，背景图像不会移动。
              inherit规定应该从父元素继承 background-attachment 属性的设置。
      background-origin
      属性规定 background-position 属性相对于什么位置来定位。
      background-clip 
        属性规定背景的绘制区域。



*/