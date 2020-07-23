/*
147    下列哪些会返回false？
            A    null
            B    undefined
            C    0
            D    ‘0'
        正确答案: A B C
        解释：
            ABC 转换为false的值：false、“”（空字符串）、0和NAN、null、undefined
            数据类型	转换为true的值	转换为false的值
            Boolean	true	false
            String 	任何非空字符串	空字符串
            Number	任何非零数字值（包括无穷大）	0和Null
            Object	任何对象	null
            Undefined	
148  语句var arr=[a,b,c,d];执行后，数组arr中每项都是一个整数，下面得到其中最大整数语句正确的是哪几项？
            A    Math.max(arr)
            B    Math.max(arr[0], arr[1], arr[2], arr[3])
            C    Math.max.call(Math, arr[0], arr[1], arr[2], arr[3])
            D    Math.max.apply(Math,arr)
        正确答案: B C D
        解释：
            Math.max(args...)传入参数是任意数量的值
            A  传入数组,所以错误
            B  可以
            C  Function.call()可以传入任意多个参数,C正确
            D  Function.apply()第二个参数以数组形式传递,D正确
149  下列函数哪些是JavaScript的全局函数？
            A    encodeURI
            B    parseFloat
            C    setTimeout
            D    eval
        正确答案: A B D
        解释：
            按选项的意思来看，应该指的是ECMAScript本身的global全局对象下的属性，在W3C上看是没有setTimeout的，setTimeout来自于window
150  下面哪些语句可以 在JS里判断一个对象oStringObject是否为String。
            A    oStringObject instanceof String
            B    typeof oStringObject == 'string'
            C    oStringObject is String
            D    以上答案都不正确
        正确答案: A
        解释：
            JS 中值的类型分为原始值类型和对象类型。原始值类型包括 number, string, boolean, null 和 undefined；对象类型即 object。
            首先原始值类型它就不是对象。
            另外，要注意 'hello' 和 new String('hello') 的区别，前者是字符串字面值，属于原始类型，而后者是对象。用 typeof 运算符返回的值也是完全不一样的：
            typeof 'hello';  // 'string'
            typeof new String('hello');  // 'object'
            之所以很多人分不清字符串字面值和 String 对象，归根结底就是 JS 的语法对你们太过纵容了。当执行 'hello'.length 时，发现可以意
            料之中的返回 5，你们就觉得 'hello' 就是 String 对象，不然它怎么会有 String 对象的属性。其实，这是由于 JS 在执行到这条语句的时
            候，内部将 'hello' 包装成了一个 String 对象，执行完后，再把这个对象丢弃了，这种语法叫做 “装箱”，
            在其他面向对象语言里也有（如 C#）。不要认为 JS 帮你装箱了，你就可以在写代码的时候不分箱里箱外了！
151  以下哪一个不是JavaScript的数据类型：
            A    String
            B    Boolean
            C    Undefined
             D   Integer
        正确答案: D  
        解释：
            在 JavaScript 中有 5 种不同的数据类型：
            string 、number 、boolean 、object 、function

            3 种对象类型：
            Object 、Date 、Array

            2 个不包含任何值的数据类型：
            null 、undefined
152  如何把 7.25 四舍五入为最接近的整数？
             A   round(7.25)
             B   rnd(7.25)
             C   Math.rnd(7.25)
              D  Math.round(7.25)
        正确答案: D 
        解释：
            ◎Math.ceil()向上取整，即它总是将数值向上舍入为最接近的整数；
            ◎Math.floor()向下取整，即它总是将数值向下舍入为最接近的整数；
            ◎Math.round()标准取整，即它总是将数值四舍五入为最接近的整数(这也是我们在数学课上学到的舍入规则)
153  下列哪个正确的引入了myScript.js？
             A   <script href="myScript.js">
             B   <script name="myScript.js">
             C   <script src="myScript.js">
             D   <script root="myScript.js">
        正确答案: C 
        解释：
            <link> 和href配合 加载css，hypertext reference超文本引用，页面加载到href时不会停下来
            <script>和src配合 加载script文件，source资源，页面会停下来等待资源加载完毕（并执行完），所以一般js放在body的最下面
154  下列事件哪个不是由鼠标触发的事件（）
            A    click
            B    contextmenu
             C   mouseout
             D   keydown
        正确答案: D
        解释：
            click是鼠标点击事件
            contextmenu 是当浏览者按下鼠标右键出现菜单时或者通过键盘的按键触发页面菜单时触发的事件 [ 试试在页面中的 <body> 中加入
                onContentMenu="return false" 就可禁止使用鼠标右键了 ]
            mouseout 事件会在鼠标指针移出指定的对象时发生。
            keydown 事件会在用户按下一个键盘按键时发生，由键盘触发
155  var one;
        var two=null;
        console.log(one==two,one===two);
上面代码的输出结果是：
            A    true false
            B    true true
            C    false false
             D   false true
            E    错误：one没有定义
        正确答案: A
        解释：
            在JavaScript中下面的值被当作假 false. undefined. null. 空字符串 数字0 数字NAN == 和 ===的区别是，==会将两边的值进行隐式类型转换，
            而 ===也不会。 题目中，var one; 只定义未赋值，故one是的值为undefined, undefined和null转换为
            Boolean类型后都为false，===不会进行转换， ，那么undefined和null当然不相等啦，所以是
156  var x=10;
function cals(myNum) {

            return x+myNum;
        }
     函数 cals(7) 返回什么？
                A    NaN
                B    17
                C    107
                 D   10
                E    7
        正确答案: B
        解释：
            myNum本身就没有写明类型，传进去的是数字，return两个数字相加就是这两个数字之和呀，如果传进去的是"7"（注意引号这里是字符串），
            输出的结果那就是107了，+号两边都是数字就直接返回数字之和，如果有一个字符串就拼成字符串。



*/