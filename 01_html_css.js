/*
1  在不涉及样式情况下,页面元素的优先显示与标签选用无关(正确)

2  img标签中src属性表示（图片存储的地址）

3  sessionStorage 保存数据的方法正确的是：
   sessionStorage.setItem('健名','健值')//注意：这儿不是sessionStorage.saveItem('健名','键值')
   解释：这里面是JSON格式的数据；你只要记住两点，设置一般用 set 开头， 获取采用 get 开头，对于键值的话，一般都是 (key, value)的形式；

4  下列哪一个属性是CSS3新增的属性？
    A    box-shadow
    B    border
    C    background
    D    display
    答案：A
    涉及到的有：
       css3新增的属性：
       一. box-shadow(阴影效果) 
        使用: 
        box-shadow: 20px 10px 0 #000; 
        二. border-colors(为边框设置多种颜色) 
        使用: 
        border: 10px solid #000; 
        说明:  
        颜色值数量不固定, 且FF的私有写法不支持缩写: -moz-border-colors: #333 #444 #555; 
        三. boder-image(图片边框) 
        使用: 
            border-image: url(exam.png) 20 20 20 20 repeat;
            说明: 
        (1). 20 20 20 20 ---> 边框的宽度, 分别对应top, right, bottom, left边框, 改变宽度可以实现不同的效果; 
        (2). 边框图片效果(目前仅实现了两种):  
        repeat --- 边框图片会平铺, 类似于背景重复; 
        stretch --- 边框图片会以拉伸的方式来铺满整个边框; 
        (3). 必须将元素的边框厚度设置为非0非auto值. 
        四. text-shadow(文本阴影) 
        使用:  
            text-shadow: [<颜色><水平偏移><纵向偏移><模糊半径>] || [<水平偏移><纵向偏移><模糊半径><颜色>]; 
        说明: 
        (1) <颜色>和<模糊半径>是可选的, 当<颜色>未指定时, 将使用文本颜色; 当<模糊半径>未指定时, 半径值为0; 
        (2) shadow可以是逗号分隔的列表, 如: 
        text-shadow: 2px 2px 2px #ccc, 3px 3px 3px #ddd; 
        (3) 阴影效果会按照shadow list中指定的顺序应用到元素上; 
        (4) 这些阴影效果有可能相互重叠, 但不会叠加文本本身; 
        (5) 阴影可能会跑到容器的边界之外, 但不会影响容器的大小.
        五. text-overflow(文本截断) 
        使用: 
            text-overflow: inherit | ellipsis | clip ; 
        -o-text-overflow: inherit | ellipsis | clip; 
        说明:  
        (1) 还有一个属性ellipsis-word, 但各浏览器均不支持. 
        六. word-wrap(自动换行) 
        使用: 
            word-wrap: normal | break-word; 
        七. border-radius(圆角边框) 
        使用: 
            -moz-border-radius: 5px; 
        -webkit-border-radius: 5px; 
        八.  opacity(不透明度)    
        使用: 
        opacity: 0.5; 
        filter: alpha(opacity=50); 
        -ms-filter(opacity=50);  
        九. box-sizing(控制盒模型的组成模式) 
        使用: 
            box-sizing: content-box | border-box; // for opera 
            -moz-box-sizing: content-box | border-box; 
            -webkit-box-sizing: content-box | border-box; 
        说明: 
            1. content-box:  
            使用此值时, 盒模型的组成模式是, 元素宽度 = content + padding + border; 
            2. border-box:  
            使用此值时, 盒模型的组成模式是, 元素宽度 = content(即使设置了padding和border, 元素的宽度 
            也不会变). 


        汇总：一. box-shadow(阴影效果) 
             二. border-colors(为边框设置多种颜色) 
             三. boder-image(图片边框) 
             四. text-shadow(文本阴影)
             五. text-overflow(文本截断)  
             六. word-wrap(自动换行) 
             七. border-radius(圆角边框)
             八.  opacity(不透明度) 
             九. box-sizing(控制盒模型的组成模式)  
5  HTML的注释标记是以下哪个选项？
        A    //注释内容
        B   /* 注释内容 * /
        C   <!-- 注释内容 -->
        D   《注释内容》
        答案: C 
        所有的和注释想关的如下：
            1，HTML注释 
            <!--注释的内容--> 

            2，CSS注释 
            /* 注释内容 * / 

            3，JS注释 
            单行注释以 // 开头。 
            多行注释以 /* 开始，以 * / 结尾。
6  css中定位相关样式属性为____。
         A   float
         B   text-indent
         C   position
         D   visibility
         答案: C   Position 允许你对元素进行定位；float  属性决定在哪个方向浮动；text-indent 规定文本的缩进；visibility属性规定元素是否可见
7  HTML5 提供两种新对象，通过 javascript API 来存储本地数据，这两种对象是（）
        A    cookies和sessionVariables
        B    localStorage和sessionStorage
        C    cookies和locationObjects
        答案: B  
        解释：Web Storage实际上由两部分组成：sessionStorage与localStorage。  
            sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。  
            localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
8  下列定义的 css 中，哪个权重是最低的？
         A   #game div.name
         B   #game .name
         C   #game div
         D   #game .name span
         答案: C   
         内联样式 > id 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器
         当然 !important的优先级是最高的
9  下面有关jquery事件的响应，描述错误的是？
        A    onclick 鼠标点击某个对象
        B    onfocus 元素失去焦点
        C    onload 是某个页面的css js html 文档结构和图像被完全加载
        D    onmousedown 某个鼠标按键被按下
        答案: B 
        解释：onfocus 获得焦点 onblur 失去焦点
10  下列哪个操作是W3C标准定义的阻止事件向父容器传递：
        A    e.preventDefault()
        B    e.cancelBubble=true
        C    e.stopPropagation()
        D    e.stopImmediatePropagation()
        答案: C
        解释：
            DOM中的事件对象：（符合W3C标准）
            preventDefault()        取消事件默认行为
            stopImmediatePropagation() 取消事件冒泡同时阻止当前节点上的事件处理程序被调用。
            stopPropagation()      取消事件冒泡对当前节点无影响。
            IE中的事件对象：
            cancelBubble()          取消事件冒泡
            returnValue()             取消事件默认行为


*/