/*
91  下面有关 javascript 常见事件的触发情况，描述错误的是？（ ）
            A    onmousedown：某个鼠标按键被按下
            B    onkeypress：某个键盘的键被按下或按住
            C    onblur：元素获得焦点
            D    onchange：用户改变域的内容
        正确答案: C
        解释：
            onblur是失去焦点，错得很明显，但是我觉得onkeypress也好像不大对诶，它好像是按住并松开，而不是仅仅按下.
            onkeypress  这个事件在用户按下并放开任何字母数字键时发生。系统按钮（例如，箭头键和功能键）无法得到识别。  
            onkeyup  这个事件在用户放开任何先前按下的键盘键时发生。  
            onkeydown  这个事件在用户按下任何键盘键（包括系统按钮，如箭头键和功能键）时发生。 
            onblur 失去焦点
            onFocus 获得焦点
            onchange:用户作用域改变，例如，用户鼠标离开输入框后
92  有如下代码片段： var a=[]; a[0]=1; a[1]=2; a[2]=3; a[5]=4; 请问 a.length 的值是多少（）。
            A    会报错
            B    3
            C    4
            D    6
        正确答案: D
        解释：
            var a = [];
            a[0]=1; a[1]=2; a[2]=3; a[5]=4;
            则数组a为
            Array[6]
            0: 1
            1: 2
            2: 3
            3:undefined
            4:undefined
            5: 4
            length: 6
            __proto__: Array[0]
            js中，数组会自动根据最大下标延长一位，既下标为n，则数组的长度为n+1。没有填值默认为undefinded。
93  下面哪一种不属于 js 的六种基本数据类型？（）
            A    undefined
            B    string
            C    null
            D    Object
        正确答案: D
        解释：
            ECMAScript 中有 5 中简单数据类型（也称为基本数据类型）： Undefined、Null、Boolean、Number 和 string。还有一种复杂数据类型——Object。
            ES6 后新增了一类数据类型 ：Symbol ，根据 JavaScript 高程, ES5 中的基本数据类型有 5 种：Undefined、Null、Boolean、Number、String.
            而 Object 是属于复杂数据类型，所以我认为这里说的 6 种基本数据类型是指：Undefined、Null、Boolean、Number、String 与 Symbol.
94  下列正确定义函数的是
            A    function foo() {}
            B    Function foo() {}
            C    var foo = new Function() {}
            D    var foo = new function() {}
        正确答案: A
        解释：
            在Javascript定义一个函数一般有如下三种方式：
            1，函数关键字(function)语句： function fnMethodName(x){alert(x);} (最常用的方法)
            2，函数字面量(Function Literals)： var fnMethodName = function(x){alert(x);} 
            3，Function()构造函数： var fnMethodName = new Function(‘x’,’alert(x);’) 
            后两种都是把一个函数复制给变量fnMethodName，而这个函数是没有名字的，即匿名函数（拉达姆函数）。
            A：function foo() {}是普通的函数声明
            B：Function应是小写
            CD：是使用了Function构造函数，正确写法：var foo = new Function();
95  请问在javascript程序中, alert(undefined==null)的输出结果是
            A    undefined
            B    null
            C    true
            D    0
        正确答案: C 
        解释：
            alert(undefined==null)        true
            alert(undefined===null)      false
            alert(null==undefined)        true
            alert(null===undefined)      false
            ECMAScript认为undefined是从null派生出来的
96 在JavaScript中，文本域不支持的事件包括( )
            A    onBlur
            B    onLostFocused
            C    onChange
             D   onFocus
        正确答案: B
        解释：
            onBlur:文本域失去焦点
            onFocus:得到焦点
            onchange:焦点状态改变
97  下面关于CSS布局的描述，不正确的是？
            A    块级元素实际占用的宽度与它的 width 属性有关；
            B    块级元素实际占用的宽度与它的 border 属性有关；
            C   块级元素实际占用的宽度与它的 padding 属性有关；
            D    块级元素实际占用的宽度与它的 background 属性有关。
        正确答案: D 
        解释：
            块级元素的总的宽度=左右padding+左右border+内容区的width，我们实际
            设置的width指的就是内容区的width，所以当改变padding、
            border、width中的任一项的时候，块元素的总宽度都会发生变化。
98  在 javascript 中，以下返回 false 的选项是
            A    var test=1;typeof test=='number';
            B    var test=1.2;typeof test=='float';
            C    var test=undefined;typeof test=='undefined';
             D   var test={};typeof test=='object';
            E    var test='4399'-0;typeof test=='number';
            F    var test=null;typeof test=='object';
        正确答案: B
        解释：
            typeof
            undefined        值未定义
            boolean           布尔值
            string               字符串
            number            数值（整形和浮点）
            object                对象或null
            function            函数
            A 选项 变量test中存储的数字类型 1,  typeof tset 返回 'number', 'number' == 'number',返回 true  
            题目中应该是"=="(相等运算符)
            B 选项 变量test中存储的数字类型 1.2,  typeof tset 返回 'number', 'number' !== 'number',返回 false  
            C选项 变量test中存储的 undefined,  typeof tset 返回 'undefined', 'undefined' == 'undefined',返回 true
            D选项 变量test中存储的对象,  typeof tset 返回 'object', 'object' == 'object',返回 true
            E选项 变量test中存储的数字类型4399(js解释器会将字符串'4399'调用Number()转换为4399,再去计算),  typeof tset 返回 'number', 'number' == 'number',返回 true
            D选项 变量test中存储null,  typeof tset 返回 'object', 'object' == 'object',返回 true
            答案是B typeof 只返回 string  number object 还有 undefined function ，number 就包含了float ,所以
            选项b typeof test 应该返回的是 "number" ,所以 "number"=="float" ==>false
99  在 es6 中，下面程序运行结果输出，选项结果正确的是
        for(let i=0; i<12;i++){}console.log(i)
        const a = 12 ; a = 13 ; console.log(a)
        const g = {b : 3}; console.log(g.b);g.b = 12;console.log(g.b);
        let [head,...tail] = [1,2,3,4];console.log(tail);
            A    11,13,3,12，[3,4]
            B    i not defined ,TypeError,TypeErrpr,4
            C    11,12,3,3,4
            D    i not defined,TypeError,3,12,[2,3,4]
        正确答案: D
        解释：
            1.let 与var不同，存在块级作用域，在for循环中声明，循环之外销毁 所以 i not defined
            2.const 声明一个常量无法更改，所以TypeError
            3.const 声明的是一个常量所以是无法更改的
            const a={x:1};
                console.log(a.x);
                a.x=5;
                console.log(a);//Object {x: 5}
            在这里打印出来 a 是一个对象 且他的属性x 的值为5,但是！！如果const出来的是一个对象他的属性是可以更改的，别问为啥~
            https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const
            4.我打印的只有一个4



*/