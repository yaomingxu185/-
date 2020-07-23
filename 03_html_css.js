/*
21  以下对form表单中input元素的readonly与disabled属性描述正确的是？（ ）
            A    Readonly为真时，脚本无法修改input的值
            B    Disabled为真时，脚本无法修改input的值
            C    Readonly为真时，input的值不会随着表单提交
            D    Disabled为真时，input的值不会随着表单提交
        答案: D 
        解释：
          disabled和readonly这两个属性有一些共同之处，比如都设为true，则form属性将不能被编辑，往往在写js代码的时候容易混合使用这两个属性
        其实他们之间是有一定区别的：
          如果一个输入项的disabled设为true，则该表单输入项不能获取焦点，用户的所有操作（鼠标点击和键盘输入等）对该输入项都无效，最重要的一点是当提交表单时，这个表单输入项将不会被提交。
          而readonly只是针对文本输入框这类可以输入文本的输入项，如果设为true，用户只是不能编辑对应的文本，但是仍然可以聚焦焦点，并且在提交表单的时候，该输入项会作为form的一项提交。
22  关于HTTP协议，下面哪个说法是正确的？
            A    HTTP协议是有状态协议。
            B    以下是一个Http链接的response 的响应头： GET /xxx/xxx/js/lib/test.js HTTP/1.1 Host: 127.0.0.1 Connection: keep-alive Pragma: no-cache Cache-Control: no-cache Accept: * /*
            C    RESTful 接口中，利用HTTP协议的method字段来描述要对资源操作的方式，比如GET表示获取资源，POST表示新增一个资源，PUT表示更新资源,DELETE 表示删除资源等等。
            D   一个HTTP请求返回的HTTP状态码中，304表示临时重定向。
        答案:C
        原因：A错误，http是无状态的
            B错误，后面的是request 头
            C正确，GET表示获取资源，POST表示新增一个资源，PUT表示更新资源,DELETE 表示删除资源等等
            D错误，状态码304表示：如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。
23  请选出用于标题的标签
            A    <h1></h1>
            B    <h7></h7>
            C    <em></em>
            D    <h3></h3>
        答案: A D
        根本没有h7
        <em> 标签告诉浏览器把其中的文本表示为强调的内容
24  添加样式的方式有
            A    内联式：即直接加在标签上的样式  如:<div style="width:100px;"></div>
            B    导入样式：@import url("css/style.css")
            C    嵌入式：即用<style>.classname {width: 100px;}</style>标签括起来写在页面中的样式
            D    外部引用式：即将样式单独放到一个文件夹中，然后用link标签引入页面的形式，如：<link rel="stylesheet" type="text/css" href="Css.css" />
            答案: A B C D     
            知识点： 
            1.   导入样式：在 .css文件中使用@import url("...")来引入另一个css样式表
            2.   外部样式：在html页面中的head中使用 link 标签引入，如<link rel="stylesheet" type="text/css" href="a.css" />
            3. 内部样式(嵌入式)：在HTML页面中的 style 标签中使用样式 , <style type="text/css">...</style>
            4. 内联样式：与html标签的内部使用style属性设置的样式，直接与当前html标签相关联，如<div style=" width:100px; "></div> 
25  关于栅格系统，哪些是正确的
            A    col-sm-*
            B    col-xs-*
            C    col-md-*
            D    col-lg-*
        答案: A B C D 
26  问一份标准的HTML文档有哪几个必须的HTML标签？
            A    <html>
            B    <head>
            C    <title>
            D    <body>
        答案: A B C D 
27  基于以下 HTML 结构，以下关于 main1.css 和 main2.css 的描述有哪些是正确的？
    <head>
       <link herf = 'main1.css' rel = 'stylesheet'>
       <link herf = 'main2.css' rel = 'stylesheet'>
    </head>
            A    main1.css和main2.css同时开始加载，先加载完成的优先解析
            B    如果main1.css和main2.css中有相同的选择器规则，那么main2.css中的规则将合并main1.css的规则
            C    main2.css只有在main1.css加载并解析后，才开始加载
            D    如果main1.css和main2.css中有相同的选择器规则，那么main2.css中的规则将被忽略
        答案: A B 
        解释：link标签是同时加载的 script标签才会加载完一个再加载另一个
            加载和解析是两个概念，加载是并行的，解析是顺序的
28  iframe的使用场景有？
            A    与第三方域名下的页面共享cookie
            B    上传图片，避免当前页刷新
            C    左边固定右边自适应的布局
            D    资源加载
        答案: A B C D 
        涉及到的知识点：
                iframe可用在以下几个场景中：
                1：典型系统结构，左侧是功能树，右侧就是一些常见的table或者表单之类的。为了每一个功能，单独分离出来，采用iframe。 
                2：ajax上传文件。 
                3：加载别的网站内容，例如google广告，网站流量分析。
                4： 在上传图片时，不用flash实现无刷新。
                5： 跨域访问的时候可以用到iframe，使用iframe请求不同域名下的资源。
29  嵌入在HTML文档中的图像格式可以是？
            A    *.gif
            B    *.tif
            C    *.bmp
            D    *.jpg
        答案: A C D
        网页html文档支持的图片格式有jpg,gif,png和bmp 这四种，
        jpg ， gif   和   png 格式的图片特点是体积很小，因为在网上很常见，然而 bmp就不常见了，因为这种格式虽然很清晰色彩丰富，但是所占内存很大，所以很少见
30  下面哪些是HTML5 新增的表单元素？
            A    datalist
            B    optgroup
            C    output
            D    legend
        答案: A C
        解释：HTML5的心得表单元素：
            datalist 元素规定输入域的选项列表。 
            keygen 元素的作用是提供一种验证用户的可靠方法。 
            output 元素用于不同类型的输出
31  哪一个不是浏览器默认的天生inline-block标签（拥有内在尺寸，可设置高宽，不会自动换行）？
            A    <button>
            B    <input>
            C    <label>
            D    <img>
        答案: C  
        解释：行内块元素有，input textarea object img select，默认属性是inline-block
          1.常见的块级元素(自动换行， 可设置高宽 )有：
           div,h1-h6,p,pre,ul,ol,li,form,table,label等
          2，常见的行内元素（无法自动换行，无法设置宽高）有：
            a,img,span，i（斜体）,em（强调）,sub(下标)，sup（上标）等。
          3.常见的行块级元素(拥有内在尺寸，可设置高宽，不会自动换行 )有：
            (button,input，textarea,select), img等

*/