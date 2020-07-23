/*
37  下面哪种方式不能改变作用域链？
            A    while
            B    try catch
            C    eval
        正确答案: A 
        解释：
            1.while的话只是在函数局部环境或者全局环境运行，并不会改变作用域链。
            2.try catch红皮书第四章讲的清清楚楚：虽然执行环境的类型总共只有两种--全局和局部（函数），但还是有其他办法来延长作用域链。这么说是因为有些语句
            可以在作用域链的前端临时增加一个变量对象，该变量对象会在代码执行后被移除。在两种情况下回发生这种现象。具体来说，就是当执行流进入下列任何一个语句
            时，作用域链就会得到加强：
                try catch语句的catch块；
                with语句；
            这两个语句都会在作用域链的前端添加一个变量对象。对WITH语句来说，将会指定的对象添加到作用域链中。对catch语句来说，会创建一个新的变量对象，其中
            包含的是被抛出的错误对象的声明。
            Example：
            function builderUrl(){
                var qs="?debug=true";
                with(location){
                var url = href + qs;   
                }
                return url;
            }
            在此，with语句接受的是location对象，因此其变量对象中就包含了Location对象的所有属性和方法，而这个变量对象被添加到了作用域链的前端。
            builderUrl()函数中定义了一个变量qs。当在with语句中引用变量href时（实际引用的是location.href），可以在当前执行环境的变量对象中找到。
            当引用变量qs时，引用的则是在buildUrl()中定义的那个变量，而该变量位于函数环境的变量对象中。至于with语句内部，则定义了一个名为url的变量，
            因而url就成了函数执行环节的一个部分，所以可以作为函数的值被返回。
            作用域（scope）通常来说一段程序代码中使用的变量和函数并不总是可用的，限定其可用性的范围即作用域，作用域的使用提高了程序逻辑的局部性，
            增强程序的可靠性，减少名字冲突。
            作用域链（scope chain）作用域链决定了哪些数据能被函数访问。当一个函数创建后，它的作用域链会被创建此函数的作用域中可访问的数据对象填充。
38  var myObject = {
        foo: "bar",
        func: function() {
            var self = this;
            console.log(this.foo);  
            console.log(self.foo);  
            (function() {
                console.log(this.foo);  
                console.log(self.foo);  
            }());
        }
    };
    myObject.func();
程序的输出是什么？ 
            A    bar
                 bar
                 bar
                 bar
            B    bar
                 bar
                 bar
                 undefined
            C    bar
                 bar
                 undefined
                 bar
            D    undefined
                 bar
                 undefined
                 bar
        正确答案: C
        解释：
            1.第一个this.foo输出bar，因为当前this指向对象myObject。
            2.第二个self.foo输出bar，因为self是this的副本，同指向myObject对象。
            3.第三个this.foo输出undefined，因为这个IIFE(立即执行函数表达式)中的this指向window。
            4.第四个self.foo输出bar，因为这个匿名函数所处的上下文中没有self，所以通过作用域链向上查找，从包含它的父函数中找到了指向myObject对象的self。   
39  下面这个JS程序的输出是什么：
        function Foo() {
            var i = 0;
            return function() {
                console.log(i++);
            }
        }
        
        var f1 = Foo(),
            f2 = Foo();
        f1();
        f1();
        f2();
           A     0 1 0
           B     0 1 2
           C     0 0 0
           D     0 0 2
        正确答案: A 
        解释：
            分别输出0,1,0；这里涉及到的js知识点也不是很深，主要就是++运算符的理解和闭包的理解。首先Foo函数返回的也是一个函数，即function( ){ console.log(i++),
            而这个函数的i引用的是外层函数的i，形成闭包，使得i的初始值为0。
            var f1 = Foo( ),f2 = Foo( )这一句，前半句var f1 = Foo( )可以看做是var f1 = function( ){ console.log(i++)},。那么第一次执行f1的时候，自然是输出0,
            这里主要理解的是++运算符的使用，放在数字后表示后增，即先执行再+1，这里就是先执行console.log（i）
            之后i再加1，所以f1执行第二次的时候i已经变成了1，自然就输出1了。
            后半句f2 = Foo() 可以看做是f2 = function( ){console.log(i++)}，这没什么可说的，直接输出i的初始值0.
            (转自百度知道：https://zhidao.baidu.com/question/179922118885607404.html)
40  以下Js程序的输出是什么（）
        <SCRIPT LANGUAGE="JavaScript">
            var a="undefined";
            var b="false";
            var c="";
            function assert(aVar){
                if(aVar)     
                    alert(true);
                else  
                    alert(false);
            }
            assert(a);
            assert(b);
            assert(c);
        </SCRIPT>
            A    true，true，true
            B    true，true，false
            C    false，false，true
            D    false，false，false
        正确答案: B 
        解释：
                变量abc都是字符串型的变量，而不是真正的undefined和false，在判断里都会被认为是真值，显示true，只有空串为false
                if（condition）的condition求值结果若非布尔值，ECMAScript会自动调用Boolean()转换函数将结果转换为布尔值。转换规则为：
                数据类型        转换为true的        转换为false的
                String        任何非空字符串          “”（空字符串）
                Number    任何非零数值（包括无穷大）        0和NaN
                Object        任何对象        null
                undefined        --        undefined        
41  有如下代码:
    var name="World!";
        (function(){
        var name;
        if(typeof name=== 'undefined'){
        name='Jack';
        console.log('Goodbye'+name);
        }
        else
        {
        console.log('hello'+name);
        }
        }
        )();
请问执行后弹出的值是：（）
                A     Hello World!
                B    Goodbye Jack
                C    Hello Jack
                D    Goodbye World!
        正确答案: B  
        
        解释：
            当函数内部变量与全局变量同名时 全局变量会被覆盖 因为js是单线程执行 var name当前没有赋值 所以类型为undefined
            s搜索变量是从内部顺原型链往外部找的，内部直接找到了name，就不去外部了，执行第一次if时还没初始化值，所以为undefined，然后赋值，执行console，结束，



























































*/