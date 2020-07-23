/*
103  display:inline兼容所有的浏览器。请判断这句话的正确与否。
        答案: false 
        解释：
            w3c中这样说明：
            所有主流浏览器都支持 display 属性。
            这里说所有的浏览器,那我自己开发的浏览器也是浏览器,所以说这个 '所有的浏览器' 太宽泛了
104  input属于窗体元素,层级显示比flash、其它元素都高。请判断这句话的正确与否。
        答案: false 
        解释：
            在html中，帧元素（frameset）的优先级最高，表单元素比非表单元素的优先级要高。
            表单元素包括：文本输入框，密码输入框，单选框，复选框，文本输入域，列表框等等；
            非表单元素包括：连接（a），div,table,span等。
            所有的html元素又可以根据其显示分成两类：有窗口元素以及无窗口元素。有窗口元素总是显示在无窗口元素的前面。
            有窗口元素包括：select元素，object元素，以及frames元素等等。
            无窗口元素：大部分html元素都是无窗口元素。
            层级显示优先级： frameset > 表单元素 > 非表单元素
105  下列 html 语义化标签中，描述存在错误的是
            A    <em>强调文字，<blockquote>长文本引用
            B    <strong>强调文字，<h1>文章栏目标题
            C    <a>超链接，<p>文章段落
            D    <section>定义文档中的节，<nav>导航
            E    <ul>有序列表。<ol>无序列表
        答案: E
        解释：
            <blockquote> 标签定义块引用。
            <h1> - <h6> 标签可定义标题。
            <strong> 标签和 <em> 标签一样，用于强调文本，但它强调的程度更强一些。
            <a>标签定义超链接，用于从一张页面链接到另一张页面。
            <p>标签定义段落。
            <section> 标签定义文档中的节（section、区段）。
            <nav> 标签定义导航链接的部分。
            <ul> 标签定义无序列表。 
            <ol> 标签定义有序列表。
106  在 HTML5 中，哪个方法用于获得用户的当前位置？
            A    getPosition()
            B    getCurrentPosition()
            C    getUserPosition()
            D    getLocation()
        答案: B
        解释：
            getCurrentPosition（）获取用户当前位置放入一个值中保存，
            getLocation()地图定位
            选项中其他函数都不存在
107  假设一个搜索结果展示页面，需要把搜索关键词高亮显示，应该使用以下哪个HTML标签？
            A    <em>
            B    <highlight>
            C    <mark>
            D    <bold>
        答案: C
        解释：
                HTML5的标签只有<mark>而没有<highlight>，<mark>标签可用于突出显示部分文本。
                <mark> 标签定义带有记号的文本。请在需要突出显示文本时使用 <m> 标签。 <em> 把文本定义为强调的内容。 
                <strong> 把文本定义为语气更强的强调的内容。 
                <dfn> 定义一个定义项目。 <code> 定义计算机代码文本。 
                <samp> 定义样本文本。 
                <kbd> 定义键盘文本。它表示文本是从键盘上键入的。它经常用在与计算机相关的文档或手册中。 
                <var> 定义变量。您可以将此标签与 <pre> 及 <code> 标签配合使用。 
                <cite> 定义引用。可使用该标签对参考文献的引用进行定义，比如书籍或杂志的标题。
                CSS字体加粗的方法： font-weight 属性设置文本的粗细。
                使用 bold 关键字可以将文本设置为粗体 
                highlight 该属性用来高亮显示指定的代码行。可以通过单个数字来高亮显示单行，或者传入一个类似 [1, 2, 3] 的数组来高亮显示指定的多行。
108  处理a.html文件时，以下哪行伪代码可能导致内存越界或者抛出异常（）

                    int totalBlank = 0;
                    int blankNum = 0;
                    int taglen = page.taglst.size();
            A       for(int i = 1; i < taglen-1; ++i)
                    {
                            //check blank
            B             while(page.taglst[i] == "<br>" && i < taglen)
                        {
            C                       ++totalBlank;
            D                       ++i;
                        }
            E             if(totalBlank > 10)
            F                      blankNum += totalBlank;
            G             totalBlank = 0;
                    }
            注意：以上代码中taglen是html文件中存在元素的个数，a.html中taglen的值是15，page.taglst[i]取的是a.html中的元素，例如page.taglst[1]的值是<html>
            a.html的文件如下：
            <html>
            <title>test</title>
            <body>
            <div>aaaaaaa</div>
            </body>
            </html>
            <br>
            <br>
            <br>
            <br>
            <br>
        答案: B  
        解释：
            答案为B，因为while(page.taglst[i] == "<br>" && i < taglen)这个判断，先执行page.taglst[i] == "<br>"这个判断，如果这个判断返回值为true，再执行i < taglen这个判断。当i=taglen的时候，执行page.taglst[i] == "<br>"这个判断就会越界，所以B处，最先出现越界
            把&&左边和右边位置调换一下就对了
109  请阅读以下代码：
        <div style=”width:400px;height:200px;”>
        <span style=”float:left;width:auto;height:100%;”>
                <i style=”position:absolute;float:left;width:100px;height:50px;”>hello</i>
        </span>
        </div>

        问题：span标签的width和height分别为多少？
            A    width = 0px，height = 0px
            B    width = 400px，height = 200px
            C    width = 100px，height = 50px
            D    width = 0px，height = 200px
        答案: D  
        解释：
            首先span不是块级元素，是不支持宽高的，但是style中有了个float：left；就使得span变成了块级元素支持宽高，height:100%;即为，200，宽度由内容撑开。
            但是内容中的 i 是绝对定位，脱离了文档流，所以不占父级空间，所以span的width=0
            1.span标签是无法设置宽高的；
            2.float会把浮动元素变成块级元素；
            3.绝对定位脱离了文档流
110  下面代码执行结果正确的是
        <?php
        $j=5;
        Switch($j){
        Default:  echo  “no result”;
        case 1:   echo “周一”;
        case 2:   echo “周二 ”;
        case 3:   echo “周三”;
        case 4:   echo “周四”;
        case 5:   echo “周五”;
        case 6:  
        case 7:  echo “周末”;
        }
        ?>
            A    周五
            B    周五周末no result
            C    周五周末
            D    语法错，没有运行结果
        答案: C
        解释：
            没有break，所以继续执行
            工作原理：
            首先对一个简单的表达式 n（通常是变量）进行一次计算。------$j=5
            将表达式的值与结构中每个 case 的值进行比较。如果存在匹配，则执行与 case 关联的代码。-----匹配到case 5:   echo “周五”;所以输出周五。
            代码执行后，使用 break 来阻止代码跳入下一个 case 中继续执行。default 语句用于不存在匹配（即没有 case 为真）时执行。-----由于case 5后面没有break语句，所以依次执行下面代码输出case 6,case7输出周末。

*/