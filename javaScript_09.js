/*
69  如何判断一个js对象是否是Array,arr为要判断的对象，其中最准确的方法是？
            A    typeof(arr)
            B    arr instanceof Array
            C    arr.toString==='[object Array]';
            D    Object.prototype.toString.call(arr) === '[object Array]';
        正确答案: D  
        解释:
            解析看这里：http://www.nowamagic.net/librarys/veda/detail/1250 
            简单概括下：
                typeof(arr) 返回的是 Object
                instanceof 在跨 frame 对象构建的场景下会失效
                arr.toString 没有这种用法，正确的用法是 arr.toString() 返回的是数组的内容
            其实Array本身有isArray这个方法判断
70  以 下语句的执行结果是什么？
        console.log('one')
        setTimeout(function(){
            console.log('two')
        },0)
        console.log('three')
            A    ’one’’two’’three’
            B    ‘one’’three’’two’
            C    ‘one’’three’
            D    ‘two’’one’’three’
        正确答案: B
        解释:
            回调时，被回调的函数会被放在event loop里，等待线程里的任务执行完后
            才执行event loop里的代码。 因此，上述代码会先把线程里的执行完后，再执行event loop里的setTimeout函数.。
            setTimeout的方式(注册事件)：有两个参数，第一个参数是函数，第二参数是时间值。调用setTimeout时，把函数参数，放到事件队列中。
            主程序运行完，再调用。
            one第一个执行就不用说了，而后面的函数用了settimeout，这个函数是指定毫秒数后调用函数或者是计算表达式的，而settimeout设置为0s
            ，你以为他会马上执行？
            其实他被js放在队列中了，要等别人执行完了，
            他才会执行。所以如果你想让后面的语句先执行在执行本身的话就用settimeout(0)吧。 ps:中间的函数没注意大小写
71  下面哪种方式不能改变作用域链？
            A    with
            B    while
            C    try catch
            D    eval
        正确答案: B 
        解释:
            1.while的话只是在函数局部环境或者全局环境运行，并不会改变作用域链。 2.try catch红皮书第四章讲的清清楚楚：虽然执行环境的类型总共只
            有两种--全局和局部（函数），但还是有其他办法来延长作用域链。这么说是因为有些语句可以在作用域链的前端临时增加一个变量对象，该变量对
            象会在代码执行后被移除。在两种情况下回发生这种现象。具体来说，就是当执行流进入下列任何一个语句时，作用域链就会得到加强：  
            try catch语句的catch块；     with语句； 这两个语句都会在作用域链的前端添加一个变量对象。对WITH语句来说，将会指定的对象
            添加到作用域链中。对catch语句来说，会创建一个新的变量对象，其中包含的是被抛出的错误对象的声明。
                Example： function builderUrl(){      var qs="?debug=true";    
                with(location){      var url = href + qs;       
                }     return url; } 在此，with语句接受的是location对象
                ，因此其变量对象中就包含了Location对象的所有属性和方法，而这个变量对象被添加到了作用域链的前端。
                builderUrl()函数中定义了一个变量qs。当在with语句中引用变量href时（实际引用的是location.href），可以在当前执行环境的变量对象中找到。
                当引用变量qs时，引用的则是在buildUrl()中定义的那个变量，
            而该变量位于函数环境的变量对象中。至于with语句内部，则定义了一个名为url的变量，因而url就成了函数执行环节的一个部分，所以可以作为函数的
            值被返回。
72  当/的两边都是整数时，/表示整除，是否正确？
            A    正确
            B    错误
        正确答案: B
        解释:
            整除的意思是相除之后是一个整数，除数与被除数之间是倍数的关系。
            题目说了两边都是整数，所以不存在字符串的说法  
            实际上 /  就是表示普通的除法运算
73  以下 javascript 代码，在浏览器中运行的结果是（）
        var a = 4399<0 || typeof(4399+'')
        console.log(a)
            A    true
            B    string
            C    undefined
           D     false
           E     number
        正确答案: B
        解释:
            ||  这个是短路或，也就是||前面为true的话就直接等于前面的值了，不会再看||后面。
            这里4399<0是false，所以还需要往后看，4399+''是字符串类型，typeof返回的是值的类型
            所以在控制台输出的是String
            1.4399<0值为false
            2.js中字符串的前面或者后面有加号，此时加号为拼接，4399+“” => 4399,原式中的4399被隐式转换成字符串，字符串4399与空字符串拼接
            的字符串4399 。
            短路或 :如果第一项是true 则结果为true 如果第一项为false 结果 为第二项（第二项不做计算直接返回）
74  请问在javascript程序中,alert(undefined==null)的输出结果是
            A    null
            B    undefined
             C   true
            D    false
            E    以上答案都不正确
        正确答案: C
        解释:
            undefined值是派生自null值的，因此ECMA-262规定对它们的相等性测试要返回true。 
            ==是true ===是false
75  angularjs1中服务的正确写法是？
            A    ng-service
            B    ng-server
            C    ng-command
            D    ng-class
        正确答案: A 
        解释:
            service是服务的意思，server是服务器，伺候者，发球员。通过字面意思可以做出选择，容易错选B。
76  下列描述中，关于 js 函数定义方式，正确的是
            A    function add(a,b){return a+b;}函数表达式
            B    var add=new Function(‘a’,’b’,’return a+b’)函数表达式
            C    function add(a,b){return a+b;}函数声明
            D    var add=function(a,b){return a+b;}函数声明
            E    var add=new Function(‘a’,’b’,’return a+b’);函数声明
        正确答案: C
        解释:
            一.函数声明语法定义：function sum(num1,num2){return num1+num2}
            二.函数表达式定义函数：1.var sum = function(num1,num2){return num1+num2};
            2.var sum = new Function("num1","num2","return num1+num2");Function构造函数可以接受任意数量的参数，
            但最后一个参数始终被看成函数体，注意函数表达式定义函数的方法与声明其他变量时一样需要加分号。
77  下面有关JavaScript中 call和apply的描述，错误的是？
            A    call与apply都属于Function.prototype的一个方法，所以每个function实例都有call、apply属性
            B    两者传递的参数不同，call函数第一个参数都是要传入给当前对象的对象，apply不是
            C    apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入
            D    call传入的则是直接的参数列表。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。
        正确答案: B
        解释:
            相同点:两个方法产生的 作用是完全一样的
            不同点:方法传递的参数不同
            call, apply方法它们除了第一个参数,即执行时上下文对象相同外,call方法的其它参数将依次传递给借用的方法作参数,而apply就两个参数
            ,第二个参数为一个数组传递。
            1.作用
            在特定的作用域总调用函数，等于设置函数体内this对象的值，以扩充函数赖以运行的作用域。
            window.color="red";
            var o={color:"blue"};
            function getColor(){
                console.log(this.color);
            }
            getColor.call(this);
            getColor.call(window);
            getColor.call(o);
            2.区别
            接收参数的方式不同：
            对于call（），第一个参数是运行函数的作用域，其余参数都直接传递给函数即传递给函数的参数必须逐个列举出来。
            对于apply（），第一个参数是 运行函数的作用域 ，另一个参数是参数数组,可以是Array实例或arguments对象。
            function sum(num1,num2){
            return num1+num2;
            }
            function callSum(num1,num2){
            return sum.call(this,num1,num2);
            }
            function callSum(num1,num2){
            return sum.apply(this,arguments);
            }
            function callSum(num1,num2){
            return sum.apply(this,[num1,num2]);
            }
78  下列代码
        var obj={}
        ……..
        obj.hasOwnProperty("val")
中hasOwnProperty的作用是？
            A    判断obj对象是否具有val属性
            B    判断obj对象是否具有val的值
            C    判断obj的原型对象是否具有val的属性
            D    判断obj的原型对象是否具有val的值
        正确答案: A 
        解释:
            hasOwnProperty： 是用来判断一个对象是否有你给出名称的属性或对象。不过需要注意的是，此方法无法检查该对象的原型链中是否具有该属性，
            该属性必须是对象本身的一个成员。
            isPrototypeOf : 是用来判断要检查其原型链的对象是否存在于指定对象实例中，是则返回true，否则返回false。
            hasOwnProperty:从字面上理解，是属于自己私有的属性，不是公共的。因此，只能是检测实例自己的属性，不能是原型对象上的属性。
            hasPrototypeProperty:从字面上就可以知道是检测原型对象上的属性。





*/