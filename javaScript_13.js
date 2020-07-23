/*
100  w3c 制定的 javascript 标准事件模型，以下正确的顺序以及描述是
            A    事件捕获>事件冒泡
            B    事件捕获->事件处理->事件冒泡
             C   事件冒泡->事件处理
             D   事件冒泡->事件处理->事件捕获
            E    事件处理->事件捕获->事件冒泡
        正确答案: B   
        解释：
            先事件捕获从windows > document 往下级直到 特定的事件节点，然后进行事件处理，再事件冒泡，
            从特定节点往上级，这个完整的过程
101  AngularJS1中页面中用于数据绑定的占位符是什么？
            A    %% %%
            B    ## ##
            C    {{ }}
            D    && &&
        正确答案: C 
        解释：
            Angular.js 中{{ }}语法是内置的模板语法，视图会随着$scope变化而改变
102  有如下代码片段：
        var obj ={a:1,b:function () {alert(this.a)}}; 
        var fun =obj.b; 
        fun();
运行结果是（ ）
            A    弹出a
            B    弹出1
            C    弹出undefined
            D    什么也看不到
        正确答案: C
        解释：
            虽然fun是obj.b的一个引用，但是实际上，它引用的是b函数本身，因此此时的fun()其实 是一个不带任何修饰的函数调用，所以this指向window。
            this的行为有时候会显得极其诡异，让人感到困惑，但只需要记住 this的值要等到代码真正执行时才能确定
            同时this的值具体有以下几种情况：
            new 调用时指的是被构造的对象
            call、apply调用，指向我们指定的对象
            对象调用，如执行obj.b()，this指向obj
            默认的，指向全局变量window(相当于执行window.fun())
            这样看来，当你执行fun()的时候，以上1,2点均不满足。
            第3点,因为this是运行时确定的，而我们执行fun()，等同于windown.fun()(与obj没有任何关系)，自然的this指向window，而window没有定义变量a，结果是undefined。
103  function A() {
            this.do=function() {return ‘foo’;};
        }
        A.prototype=function() {
            this.do=function() {return ‘bar’};
        };
        var x=new A().do();
x 的值是：
            A    bar
            B    报错
            C    foo
             D   undefined
        正确答案: C
        解释：
            只有实例对象上不存在的属性和方法才会去原型上查找
104  下面有关javascript系统方法的描述，错误的是？
            A    parseFloat方法：该方法将一个字符串转换成对应的小数
            B    isNaN方法：该方法用于检测参数是否为数值型，如果是，返回true，否则，返回false。
            C    escape方法： 该方法返回对一个字符串编码后的结果字符串
            D    eval方法：该方法将某个参数字符串作为一个JavaScript执行
        正确答案: B
        解释：
            NaN,即非数值（Not a Number）是一个特殊的数值，这个数值用来表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误了）。
            针对NaN的特点，ECMAScript定义了isNaN（）函数。这个函数接受一个参数，该参数可以是任何类型，而函数会帮我们确定这个参数
            是否“不是数值”。isNaN（）在接受一个值后，会尝试将这个值转换为数值。
            某些不是数值的值会直接转换为数值，例如字符串“10”或Boolean值。而任何不能被转换为数值的值都会导致这个函数返回true。
            eval：返回字符串表达式中的值
            unEscape：返回字符串ASCI码
            escape：返回字符的编码
            parseFloat：返回实数
105  在jquery中想要实现通过远程http get请求载入信息功能的是下面的哪一下事件？
            A    $.ajax()
            B    load(url)
            C    $.get(url)
             D   getScript(url)
        正确答案: C  
        解释：
            A.ajax() 方法通过 HTTP 请求加载远程数据。$.ajax(opts);opts为json格式，常见参数url、type、data等。
            B.load() 方法从服务器加载数据，并把返回的数据放入被选元素中。$(selector).load(URL,data,callback);
            必需的 URL 参数规定您希望加载的 URL。
            可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
            可选的 callback 参数是 load() 方法完成后所执行的函数名称。
            C.$.get() 方法通过 HTTP GET 请求从服务器上请求数据。
            $.get(URL,callback);
            必需的 URL 参数规定您希望请求的 URL。
            可选的 callback 参数是请求成功后所执行的函数名。
            D.getScript() 方法通过 HTTP GET 请求载入并执行 JavaScript 文件。
            jQuery.getScript(url,success(response,status));
106  如下代码输出的结果是什么：
        console.log(1+ "2"+"2");
        console.log(1+ +"2"+"2");
        console.log("A"- "B"+"2");
        console.log("A"- "B"+2);
            A    122
                 122
                 NaN
                 NaN
            B    122
                 32
                 NaN
                 NaN2
            C   122
                32
                NaN2
                NaN
             D  122
                32
                NaN2
                NaN2
        正确答案: C
        解释：
            console.log(1+ "2"+"2");   //对于加法来说，如果只有一个操作数是字符串，则将另一个操作数也转换为字符串，然后将两者拼接,为122
            console.log(1+ +"2"+"2");   //(+"2")应用了一元加操作符，一元加操作符相当于Number()函数，会将 (+"2")转换为2,1+2+"2"=32
            console.log("A"- "B"+"2");   //在减法中遇到字符串和加法相反，调用Number()函数将字符串转换为数字，不能转换则返回NaN，此时运用加法规则，NaN+"2"，"2"是字符串，则将两者拼接。
            console.log("A"- "B"+2);   //这个与上面的不太相同，减法运算后依然为NaN，但是加号后面的为数字2，加法规则中，如果有一个操作数是NaN，则结果为NaN
107  var F=function(){};
        Object.prototype.a=function(){};
        Function.prototype .b=function(){};
        var f=new F();
关于这段代码正确的结论是：（）
            A    f能取到a，但取不到b
            B    f能取到a,b
            C    F能取到b，不能取到a
             D   F能取到a，不能取到b
        正确答案: A  
        解释：
            这个问题涉及到js的原型继承
            1.  f.__proto__ === f[的构造函数].prototype === F.prototype
            2.  F.prototype.__proto__ ===  (F.prototype)[的构造函数].prototype ===   Object.prototype (所以a能够 通过f.a访问)
            3. f.constructor === F
            4. F.__proto__ === F[的构造函数].prototype === Function.prototype (所以b可以通过, f.constructor.b访问到)
            注意: 
            (F.prototype)[的构造函数] === Object
            F[的构造函数] === Function
            多啰嗦一句( js 的继承靠的是__proto__ ,并不是prototype)
108  javascirpt中的数字在计算机内存储为多少Byte？
            A    2 Byte
            B    4Byte
            C    8Byte
            D    16Byte
        正确答案: C
        解释：
            关于Javascript中数字的部分知识总结：
            1.Javascript中，由于其变量内容不同，变量被分为基本数据类型变量和引用数据类型变量。基本类型变量用八字节内存，存储基本数据类型(数值、布尔值、null和未定义)的值，引用类型变量则只保存对对象、数组和函数等引用类型的值的引用(即内存地址)。
            2. JS中的数字是不分类型的，也就是没有byte/int/float/double等的差异。






*/