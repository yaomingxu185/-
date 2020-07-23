/*
42  以下哪一条Javascript语句会产生运行错误？
            A    var obj=( );
            B    var obj=[ ];
            C    var obj={ };
             D   var obj=/ /;
        正确答案: A 
        解释：
            A，错误
            B，声明obj为数组对象
            C，声明obj为对象
            D，声明obj为正则对象
43  在前提：var arr =[1,3,2]下，下面哪个操作会返回一个数组，并且不是arr？
            A    arr.push(3)
            B    arr.reverse()
            C    [].concat.call(arr,[])
            D    [].sort.call(arr)
        正确答案: C
        解释：
            push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。 reverse() 方法用于颠倒数组中元素的顺序。
            concat() 方法用于连接两个或多个数组。 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。 返回值 返回一个新的数组。
            该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。
            sort() 方法用于对数组的元素进行排序。
44  为每一个指定元素的指定事件（像click）绑定一个事件处理器函数，下面哪个是用来实现该功能的？
            A    trigger (type)
            B    bind(type)
            C    one(type)
            D    bind
        正确答案: B
        解释：
            eg:$("#scroll").bind("click", function() {});
45  if(! "a" in window){
            var a = 1;
        }
        alert(a);
请问 a 的结果是什么？
            A    null
            B    1
            C    undefined
             D   以上都不正确
        正确答案: C 
        解释：
            if(! "a" in window){
            var a = 1;
            }
            alert(a);
            等价于
            var a;
            if(!"a"in window){
            a =1;
            }
            alert(a);
            （1）JavaScript无块级作用域，在全局作用域中声明变量a为window的属性；
            （2）window存在属性a，if语句不成立，a=1赋值语句不执行；
            （3）弹出变量a为undefined；
46  要在10秒后调用checkState，下列哪个是正确的
            A    window.setTimeout(checkState, 10);
            B    window.setTimeout(checkState, 10000);
            C    window.setTimeout(checkState(), 10);
            D    window.setTimeout(checkState(), 10000);
        正确答案: B
        解释：
            checkState加了圆括弧相当于函数表达式，会立即执行，执行的结果作为返回值传递给settimeout。
            window.setTimeout(checkState(), 10000); //立即被调用 
            window.setTimeout(checkState, 10000); // 10s后被调用 
47  请给出这段代码的运行结果（ ）
        <SCRIPT LANGUAGE="JavaScript">
        var bb = 1;
        function aa(bb) {
            bb = 2;
            alert(bb);
        };
        aa(bb);
        alert(bb);
        </SCRIPT>
            A    1 1
            B    1 2
            C    2 1
            D   2 2
        正确答案: C
        解释：
            这道题考察是局部变量和参数传递的问题。
            function aa(bb) {     bb = 2;     alert(bb); };
            在aa函数中，bb是以传值的方式传入的，在函数中，会重新定义一个bb变量，并将其值覆为2，并不影响函数体外的bb变量，所以其值仍然为1.
48  以下代码的执行打印结果是？
        var arr=[];
        arr[0]=0;
        arr[1]=1;
        arr.foo='c';
        console.log(arr.length);
            A    报错
            B    3
            C    2
            D    undefined
        正确答案: C
        解释：
            本身数组就是对象
            这里要理解所谓‘数组’其实是array类型对象的一个特殊作用，就是：我们可以对它进行一种模式的数据存储，但除此之外，它依然是一个对象
            var arr = [‘1’，‘2’] //这本质上是一系列操作：得到一个数组对象；调用了它的数组方法存入了一些数据，arr.length根据存入数据的数目被修改
            arr.length，对arr对象的length属性进行一个访问
            arr.foo = 'hello' 对arr对象创建一个属性，所以.foo 跟.length地位是并列的：就是arr的一个属性，同时arr的数组方法跟这些属性是毫不相关的
49  js数组的方法中，哪些方法不能改变自身数组？（）
            A    pop
            B    splice
            C    sort
            D    concat
        正确答案: D
        解释：
            pop方法：用于删除并返回数组的最后一个元素，把数组长度减1，并且返回它删除的元素的值。如果数组已经为空，则pop()不改变数组，并返回undefined值
            splice()方法：向/从数组中添加/删除项目，然后返回被删除的项目，该方法会改变原始数组
            sort()方法：用于对数组的元素进行排序。返回对数组的引用。请注意，数组在原数组上进行排序，不生成副本。
            concat()方法： 用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
            综上所述，只有concat()方法不会改变数组，故选D
50  下列描述中，错误的是
            A    SQL语言又称为结构化查询语言
            B    java中”static”关键字表明一个成员变量或者是成员方法可以在没有所属的类的实例变量的情况下被访问
            C    面向对象开发中，引用传递意味着传递的并不是实际的对象，而是对象的引用，因此，外部对引用对象所做的改变不会反映到所引用的对象上
            D    java是强类型语言，javascript是弱类型语言
            E    面向对象的三大特性包括：封装，继承，多态 
        正确答案: C
        解释：
            值传递，传递的是原来值的副本。
            引用传递，除了一些特殊的（String，包装类属于不可变类），一般的引用类型在进行传递的时候，一开始形参和实参都是指向同一个地址的，这个时候形参对对象的改变会影响到实参。
51  下面不属于ajax事件的是？
            A    ajaxComplete(callback)
            B    ajaxSuccess(callback)
            C    $.post(url)
            D    ajaxSend(callback)
        正确答案: C
        解释：
            $.post(url)是ajax请求； 
            ajax的事件是： 
            ajaxComplete(callback) 
            ajaxError(callback) 
            ajaxSend(callback) 
            ajaxStart(callback) 
            ajaxStop(callback) 
            ajaxSuccess(callback)


*/