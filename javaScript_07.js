/*
52  以下代码，在浏览器中执行的结果是
        var A = {n:4399}
        var B = function(){this.n = 9999}
        var C = function(){var n = 8888}
        B.prototype = A
        C.prototype = A
        var b = new B()
        var c = newC()
        A.n++;
        console.log(b.n)
        console.log(c.n)
            A    9999 8889
            B    10000 8888
            C    4400 8889
            D    9999 4400
            E    4400 4400
        正确答案: D
        解释：
            console.log(b.n);
            在查找 b.n 是首先查找 b 对象自身有没有 n 属性，如果没有会去原型（prototype）上查找
            当执行 var b = new B() 时，函数内部 this.n=9999(此时this指向b) 返回b对象，b对象有自身的n属性，所以返回 9999
            console.log(c.n);
            同理
            当执行 var c = new C() 时，c对象没有自身的n属性，向上查找，找到原型 （prototype）上的 n 属性，因为 A.n++(此时对象A中的n为4400)， 所以返回4400
            new运算的具体执行过程：
                1)创建一个空对象
                2)把这个空对象的__proto__指向构造函数的prototype
                3)把这个空对象赋值给this
                4)执行构造函数内的代码，注意此时的this指向新对象，this.n=9999 等价于b.n=9999;
            然后访问b.n，存在，直接输出b.n。
            再去访问c.n，不存在，通过原型链__proto__向上寻找，c.__proto__指向C.prototype也就是A，所以就是输出A.n
53  (function() {
            var a = b = 5;
        })();   
        console.log(b);
        console.log(a);
上面的输出结果:
            A    5，5
            B    undefined，undefined
            C    5，undefined
            D    5，Uncaught ReferenceError: a is not defined
        正确答案: D
        解释：
            一个考点在于var a=b=5相当于拆解成var a=b; b=5; 然后，b=5前面没有var，相当于声明为全局变量（这种方式在严格模式下会报错，此题不考虑)。
            所以就相当于： var b; (fun…{ var a=b; b=5; })(); console.log(b); //5 console.log(a); //报错 此处报错也就是另一个考点，a声明的是函数的局部变量，
            在函数结束是就销毁了，所以在全局下找不到a，于是报错。 （手机码字，排版如果出错，请原谅⁄(⁄ ⁄ ⁄ω⁄ ⁄ ⁄)⁄）
54 请阅读以下代码：
        var obj = {};
        obj.log = console.log;
        obj.log.call(console,this);
该代码在浏览器中执行，输出的日志结果是什么？
            A    window
            B    console
            C    obj
            D    undefined
        正确答案: A
        解释：
            关于call()函数。
            语法：call([thisObj[,arg1[, arg2[,   [,.argN]]]]])  
            定义：调用一个对象的一个方法，以另一个对象替换当前对象。 
            call和apply是为了动态改变this而出现的，当一个object没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。
            题中：obj.log.call(console,this) = console.log.call(console,this)
            即输出切换的上下文console中的this。即windows对象
            call()方法,第一个参数和apply()一样,是在其中运行的作用域即this;和apply()不同的是,call()方法中的其余的参数必须直接传给函数,
            即在使用call()方法时参数必须逐个的列出来. this 在函数执行时，this 总是指向调用该函数的对象。要判断 this 的指向，其实就是判断 this 所
            在的函数属于谁。 在《javaScript语言精粹》这本书中，把 this 出现的场景分为四类，简单的说就是： 有对象就指向调用对象 
            没调用对象就指向全局对象 用new构造就指向新对象 通过 apply 或 call 或 bind 来改变 this 的所指。 console.log(this) //这个this 是
            传入log的参数，此时this指向window，比如在控制台窗口
55  (function() {
        var x=foo();
        var foo=function foo() {
        return “foobar”
        };
        return x;
      })();
            A    foo()
            B    类型错误
            C    undefined
             D   foobar
        正确答案: B
        解释：
            var foo=function foo() {
            return “foobar”
            };
            foo变量“被提前”了，但是他的赋值（也就是函数）并没有被提前，从这一点上来说，和前面我们所讲的变量“被提前”是完全一致的，并且，由于“被提前”的变量的默认值是 undefined。
            函数声明可以被提前，但函数表达式不能被提前
            var x = foo();
            var foo=function foo() {...}
            语句中变量的声明会提升，但是定义不会提升。以上代码等同于：
            var foo;
            var x = foo();
            foo = function foo() {...}
            当执行到 x = foo() 时，由于foo未被定义为函数，所以会返回
            TypeError: foo is not a function
56  var x = new Boolean(false);
        if (x) {
        alert('hi');
        }
        var y = Boolean(0);
        if (y) {
        alert('hello'); 
        }
的显示结果是
            A    hi
            B    hi hello
            C    hello
            D    不显示
        正确答案: A
        解释：
            此题考查的是 JS 的类型转换：
            if(x) 这里期望 x 是一个布尔类型的原始值，而 x 是一个对象，任何对象转为布尔值，都为得到 true（切记！在 JS 中，只有 0，-0，NaN，""，
            null，undefined 这六个值转布尔值时，结果为 false）。
            题目的第二部分，一定要注意 y = Boolean(0)，而不是 y = new Boolean(0)。这两个有很大区别，用 new 调用构造函数会新建一个布尔对象，
            此处没有加 new，进行的是显示类型转换，正如上述第一条所说，0 转换布尔，结果为 false，所以此时 y 的值就是 false。如果加了 new，
            那么 y 就是一个 Boolean 类型的对象，执行 if(y) 时，对象转布尔，始终是 true，所以结果会与不加 new 的时候相反。
57  angularjs1中的服务实质上是
            A    网络服务
            B    单例对象
            C    接口对象
             D   函数调用
        正确答案: B 
        解释：
                单例模式是一种常用的软件设计模式。在它的核心结构中只包含一个被称为单例的特殊类。通过单例模式可以保证系统中一个类只有一个实例而且该实
                例易于外界访问，从而方便对实例个数的控制并
                节约系统资源。如果希望在系统中某个类的对象只能存在一个，单例模式是最好的解决方案。
                单例模式的要点有三个；一是某个类只能有一个实例；二是它必须自行创建这个实例；三是它必须自行向整个系统提供这个实例。
                angularjs的服务是一个单例对象或函数，对外提供特定的功能。
58  下列哪些是javascript原始数据类型。
            A    String
            B    Null
             C   Undefined
             D   Object
            E    Boolean
            F    Number
        正确答案: A B C E F
        解释：
                基本数据类型：Number，String，Boolean，Undefined，Null

                复杂数据类型：Object，Array，Function，RegExp，Date，Error

                全局数据类型：Math


*/