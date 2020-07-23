/*
138   var foo = {n:1}
(function(foo){
    console.log(foo.n)
    foo.n = 3;
    var foo = {n:2}
    console.log(foo.n)
})(foo)
console.log(foo.n)
以上 javascript 代码，在浏览器中运行的结果是
            A    1 2 3
            B    undefined 2 1
            C    报错
            D    1 2 1
        正确答案: A
        解释：
            第一步：进行预编译，var全局变量foo、匿名函数 function、var局部变量foo
            第二步：代码自上而下、自左向右执行计算：
            对全局变量foo进行赋值foo={n:1}；注意：此值为对象，属于引用类型；
            匿名函数传入参数foo={n:1}自执行；
            console.log(foo);打出数字1；
            由于存在foo局部变量，那么对foo变量进行赋值foo={n:3}，同时更改了引用类型的参数值，全局foo变量被重新赋值foo={n:3}；
            对局部变量foo进行重新赋值foo={n:2};
            console.log(foo);打出数字2；
            全局变量foo={n:3},因此，console.log(foo);打出数字3；
139  执行以下程序段后，x的值是（ ）。
        var x=0;
        switch(++x)
        {
        case 0: ++x;
        case 1: ++x;
        case 2: ++x;
        }
            A    1
            B    2
            C    3
            D    4
        正确答案: C 
        解释：
            switch中，对x+1,此时x为1，然后进入case 1 中，又执行++x，此时x变为2；由于case 1中没有break
            ，然后继续执行 case 2，执行++x，所以x变成3
140  关于javascript，以下选项描述错误的是
            A    在原型上扩展的可枚举方法，会被for in循环出来
            B    使用object.defineProperty可向对象添加或者修改属性
            C    每个对象都有prototype属性，返回对象类型原型的引用
            D    通过hasOwnProperty可判断一个对象以及其原型链上是否具有指定名称的属性
            E    原型链是JS实现继承的一种模型
            F    For循环是按顺序的，for in 循环是不一定按顺序的
        正确答案: D
        解释：
                var obj=Object.create(null)
                obj他的原型是null，所以obj是没有prototype属性的
                B、C、D 都是错误的。

                B:使用object.defineProperty可向对象添加或者修改属性
                这里是小写的object而非Object，所以错误。

                C: 每个对象都有prototype属性，返回对象类型原型的引用
                var obj = Object.create(null)
                console.log(obj)
                如果使用 chrome 浏览器控制台输入上面代码，可以看到打印了一个空对象，展开看到No Properties，而随便自己用字面量声明一个对象，都能看到proto属性。

                所以，不是每个对象都有prototype属性。后面这句，严格来说是不是每个对象都会返回Object.prototype？，但实际应该是这个对象的原型的引用，
                加个“类型”是什么意思，所以这个选项考点到底是第一句话还是第二句话？

                D: 通过hasOwnProperty可判断一个对象以及其原型链上是否具有指定名称的属性
                这个很明显，从该方法名称就能看出，所以是无法判断原型链上是否有的。在《你不知道的 JavaScript》(上卷) p119 也提到了这个：

                相比之下， hasOwnProperty(..) 只会检查属性是否在myObject 对象中，不会检查[[Prototype]] 链。
141  关于对变量的说法，错误的是？
            A    一般使用var key的形式声明
            B    由于javascript的动态特性，常常直接采取key= val的形式赋值
            C    若声明而未对变量赋值，该变量的值为undefined
             D   var carname="Volvo";var carname;顺序执行后，caranme的值依然为Volvo
        正确答案: B
        解释：
            javascript 一般使用var key = val；的形式复制，声明变量的时候也要用var key； 如果不用var关键字，声明的就是全局变量，一般不要这么做；
            变量重复声明也不会错，js里有声明提前，如果两次声明都有赋值，如：var a=10; var a=100; 则变量a的值是100； 若var a=10; var a; 则变量a的值是10；
            第二次的var a；没什么用。
142  在文件/home/somebody/workspace/somemodule.js中第一行引用了一个模块：require(‘othermodule‘)，请问required 的查找模块的顺序 
        A. /home/somebody/workspace/node_modules/othermodule/index.js 
        B. /home/somebody/workspace/node_modules/othermodule. Js 
        C.CORE MODULES named othermodule 
        D./home/somebody/node_modules/othermodule/index.js
            A    C D A B
            B    C B D A
            C    C B A D
            D    C D B A
        正确答案: C
        解释：
            (1):首先，Node在当前目录下查找package.json(CommonJS包规范定义的包描述文件)，通过JSON.parse()解析出包描述对象，
            从中取出main属性指定的文件名进行定位。如果文件缺少扩展名，将会进入扩展名分析的步骤。 　　
            (2):而如果main属性制定的文件名错误，或者压根没有package.json文件，Node会将index当做默认文件名，然后依次查找index.js、index.node、index.json. 
            　　(3):如果在目录分析的过程中没有定位成功任何文件，则自定义模块进入下一个模块路径进行查找。如果模块路径数组都被遍历完
            毕，依然没有查找到目标文件，则会抛出查找失败异常。 　　按照上面的思路，首先应该查找package.json文件，看看里面有没有核心模块，应该是
            C最先，othermodule不是核心模块，那么接着应该进入扩展名分析的步骤，就应该是查找othermodule. js，对应B，紧接着就是以index为默认
            文件名，也就是A，再接下来就是上一个文件目录D了，
            所以答案是： C B A D
143  假设 output 是一个函数，输出一行文本。下面的语句输出结果是什么？
            A    output(typeof (function() {output(“Hello World!”)})());
            B    undefined Hello World!
            C    Object
             D   string
             E   function
            F    Hello World! undefined
        正确答案: E
        解释：
            1.先立即执行匿名函数，输出Hello World！
            2.函数执行后无返回值，则输出未定义
144  +new Array(017) 输出？（ ）
             A   17
             B   NaN
             C   15
             D   Error
        正确答案: B 
        解释：
            + new Array(017)  等价于  + new Array(15) （15的八进制是17）
            按照规则，数组对象应该采用Number，所以先执行valueOf，发现valueOf返回的是自己，所以继续执行toString，过程如下：
            Number(new Array(15)) 
            // new Array(15).valueOf()不是原始值,所以执行toString()
            Number(new Array(15).toString()) 
            Number(",,,,,,,,,,,,,,") 
            NaN
            所以答案是NaN
145  下面哪个不是RegExp对象的方法？（）
            A    test
            B    match
             C   exec
             D   compile
        正确答案: B
        解释：
                JavaScript RegExp 对象有 3 个方法：test()、exec() 和 compile()。
                (1) test() 方法用来检测一个字符串是否匹配某个正则表达式，如果匹配成功，返回 true ，否则返回 false；
                (2) exec() 方法用来检索字符串中与正则表达式匹配的值。exec() 方法返回一个数组，其中存放匹配的结果。如果未找到匹配的值，则返回 null；
                （3）compile() 方法可以在脚本执行过程中编译正则表达式，也可以改变已有表达式。

                转载自http://www.itxueyuan.org/view/6441.html
146  指令中哪种作用域可以继承父scope
            A    scope:true
            B    scope:{}
             C   scope:parent
             D   默认就继承了父作用域
        正确答案: A 
        解释：
            scope: true和transclude: true会创建新的子作用域，并且进行原型继承；
            scope: {...} 会创建新的独立作用域，不会进行原型继承;
            默认情况下创建directive使用了scope: false，不会创建子作用域.




*/