/*
15  以下为一段浏览器中可运行的Javascript 代码，则运行该段Javascript代码的页面弹出框中显示的结果是：（）
        var obj = {"key":"1","value":"2"};
        var newObj = obj;
        newObj.value += obj.key;
        alert(obj.value);
                A    2
                B    12
                C    3
                D    21
        正确答案: D
        解释：
            已知 newObj.value = 2;
            obj.key = '1'; newObj.value += obj.key; 相当于 newObj.value = newObj.value + obj.key;  所以
            
            '2' + 1
            在javascript中自动转化为字符串拼接操作得到
            '21'
16  angularjs1中定义服务哪种方法是错误的？
            A    $provide
            B    factory
            C    service
           D     $instance
        正确答案: D
        解释：
            angularjs中factory,service,provider 自定义服务
            （angularjs的题自动忽略吧，没学过，会的同学可以看看）
17 angularjs1中关于服务的说法错误的是
            A    避免全局对象污染
            B    能注入到其它组件
            C    避免代码分散到各处
            D    主要进行DOM操作和数据绑定
        正确答案: D
        解释：
            angular 指令的link函数中进行dom操作和事件绑定，服务主要是封装与后台交互的数据接口提供复用性。
            AngularJs相对于其他的框架来说，有一下的特性：
            1 MVVM
            2 模块化
            3 自动化双向数据绑定
            4 语义化标签
            5 依赖注入
18  下列代码存在几个变量没有被回收？（ ）
        var i = 1;
        var i = 2;
        var add = function() {
            var i = 0;
            return function()
        {
                i++;
                console.log(i);
            }
        }();
        add();
            A    0个
            B    1个
            C    2个
            D    3个
        正确答案: D
        解释：
                代码回收规则如下：
                1.全局变量不会被回收。
                2.局部变量会被回收，也就是函数一旦运行完以后，函数内部的东西都会被销毁。
                3.只要被另外一个作用域所引用就不会被回收
                有3个变量没有被回收，首先是全局变量中的i，第二行会覆盖掉第一行，因此
                只有1个。第二个是var add，这个变量也没有回收，他定义了一个匿名函数，
                并将它赋给了add。第三个就是闭包中的变量i，闭包中的局部变量是不会被
                回收的，因此是3个变量没有被回收
                二行是属于同一个作用域，第二个var会被忽略，不会在内存中再次为a变量分配内存
19  angularjs1指令中compile主要是做什么用的？
            A    绑定DOM
            B    数据绑定
            C    定义模版
            D    以上都不是
        正确答案: A 
        解释：
            为了解决AngularJS性能问题，编译阶段应分为两个阶段
            1,compile (绑定DOM)   
            2,link（数据绑定）。
20 假设val已经声明,可定义为任何值。则下面js代码有可能输出的结果为:
        onsole.log('Value is ' + (val != '0') ? 'define' : 'undefine');
            A    Value is define
            B    Value is undefine
            C    define
            D    undefine
            E    Value is define 或者 Value is undefine
            F    define 或者 undefine
            G    其它选项都有可能
        正确答案: C 
        解释：
            优先级高于 三目运算。低于括号。 所以括号中无论真假 加上前边的字符串都为 TRUE 三目运算为TRUE是 输出 define
21  以下代码的输出结果是
        var f = function g() {
                return 23;
            };
        typeof g();
            A    "number"
            B    "undefined"
            C    "function"
            D    Error
        正确答案: D
        解释：
            如果是typeof f，结果是function
            如果是typeof f()，结果是number
            如果是typeof g,结果是undefined.
            如果是typeof g(),结果是ReferenceError，g is not defined
22 函数的调用方式有哪些：（）
            A    直接调用
            B    作为对象方法调用
            C    作为构造函数调用
            D    通过call和apply方法调用
        正确答案: A B C D
23 在JavaScript中，以下哪些是原始值（primitive value）？
            A    ”3”
            B    10
            C    null
            D    [1]
        正确答案: A B C
        解释：
            ECMAScript中，变量可以存放两种类型的值，即原始值和引用值。
            原始值是存储在栈中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。
            引用值是存储在堆中的对象，也就是说，存储在变量处的值是一个指针，指向存储对象的内存处。
            ECMAScript中有5种原始类型，即undefined、null、number、string、boolean。
            选项中的值分别是：string、number、null，而最后一个是数组，数组是一个对象，所以是引用值。
24  以下选项中哪些属于原生 js 操作数组的方法
            A    splice
            B    shift
            C    resort
            D    sort
            E    pop
            F    push
            G    unshift
        正确答案: A B D E F G
        解释：
            Array 对象方法 方法 ：
            concat() 连接两个或更多的数组，并返回结果。 
            join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。 
            pop() 删除并返回数组的最后一个元素 
            push() 向数组的末尾添加一个或更多元素，并返回新的长度。 
            reverse() 颠倒数组中元素的顺序。 
            shift() 删除并返回数组的第一个元素 
            slice() 从某个已有的数组返回选定的元素 
            sort() 对数组的元素进行排序 
            splice() 删除元素，并向数组添加新元素。 
            toSource() 返回该对象的源代码。 
            toString() 把数组转换为字符串，并返回结果。 
            toLocaleString() 把数组转换为本地数组，并返回结果。 
            unshift() 向数组的开头添加一个或更多元素，并返回新的长度。 
            valueOf() 返回数组对象的原始值
            js数组方法中只有sort方法对数组进行排序，排序规则可以是添加自定义排序方法




*/