/*
176  以下符合 ES6 写法的有：（）
            A    class Foo
                {
                    constructor() {return Object.create(null);}
                }
                Foo()
            B    var m=1;
                 export m;
            C    export var firstName=’Michael’;
            D    在A模块中export{readFile}后，在B模块中import readFile from ‘A’可以获取到readFile
        正确答案: C
        解释：
            A、Fun() 把 class 当成方法来用？ var fun = new Func() 这样用就对了
            B、export 后面变量没加括号；
            D、import readFile 没加括号，是导入 default 的用法，但是前面不是 export 为 default

            参照 export 和 import 用法：
            1、https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
            2、https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
            export需要{}括起来要不然就使用选项c的写法也是可以的。
            选项A错误是因为构造函数需要使用new来调用
            constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，
            一个空的constructor方法会被默认添加。
            constructor() {} 
            constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。
            class Foo { constructor() { return Object.create(null); } } new Foo() instanceof Foo // false 
            上面代码中，constructor函数返回一个全新的对象，结果导致实例对象不是Foo类的实例。
            类的构造函数，不使用new是没法调用的，会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
            class Foo { constructor() { return Object.create(null); } } Foo() 
                // TypeError: Class constructor Foo cannot be invoked without 'new'
177  下列哪两项可以创建函数？
            A    function=myFunction(){……..}
            B    function myFunction(){…...}
            C    myfunction = function(){…….}
            D    myFunction(){….}
        正确答案: B C 
        解释：
            定义函数的方式：
            ①函数声明（其重要特征是函数声明提升，可以把函数声明放在调用它的语句后面）：
            function functionName ( arg0, arg1, arg2 ){
            // 函数体
            }
            ②函数表达式：
            var functionName = function ( arg0, arg1, arg2 ){
            // 函数体
            }
178  下面哪些方法可以用作javascript异步模式的编程？
                A    回调函数
                B    事件监听
                C    发布/订阅
                D    Promises对象
        正确答案: A B C D
        解释：
            回调函数，这是异步编程最基本的方法。
            事件监听，另一种思路是采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
            发布/订阅，上一节的"事件"，完全可以理解成"信号"。
            Promises对象，Promises 对象是CommonJS 工作组提出的一种规范，目的是为异步编程提供统一接口。
179  下面哪些属于JavaScript的typeof运算符的可能结果：（）
                A    symbol
                B    NaN
                C    boolean
                D    null
                E    array
                F    undefined
                G    string
        正确答案: A C F G
        解释：
            typeof Symbol()    //"symbol"
            typeof Number()    //"number"
            typeof String()    //"string"
            typeof Function()    //"function"
            typeof Object()    //"object"
            typeof Boolean()    //"boolean"
            typeof null    //"object"
            typeof undefined    //"undefined"
            ES6 中的基本数据类型是：
            Number、String、Null、Undefined、Symbol、Boolean

            用typeof可以检测出变量的基本数据类型，但是有个特例，就是null的typeof返回的是object，这是个javascript的历史bug。。。

            可以看看这个上面的讨论：
            https://stackoverflow.com/questions/18808226/why-is-typeof-null-object/18808270#18808270
180  在一个表单中，如果想要给输入框添加一个输入验证，可以用下面的哪个事件实现？
            A    hover(over ,out)
            B    keypress（fn）
            C    change()
            D    change(fn)
        正确答案: C D  
        解释：
            keypress（fn）局限于键盘输入
            fn用于校验
            A 模仿悬停事件，即当鼠标移动到一个匹配的元素上面时，会触发指定的第一个函数。当鼠标移出这个元素时，会触发指定的第二个函数。
            B 在每一个匹配元素的keypress事件中绑定一个处理函数
            C  调用执行绑定到change事件的所有函数，包括浏览器的默认行为。
            D 给所有的文本框增加输入验证
181  在前提：var arr =[1,3,2]下，下面哪个操作会返回一个数组，并且不是arr？
            A    arr.push(3)
            B    arr.reverse()
            C    [].concat.call(arr,[])
            D    [].sort.call(arr)
        正确答案: C
        解释：
            push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。 reverse() 方法用于颠倒数组中元素的顺序。
            concat() 方法用于连接两个或多个数组。 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。 返回值
            返回一个新的数组。该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。如果要进行 
            concat() 操作的参数是数组，那么添加的是数组中的元素，而不是数组。 sort() 方法用于对数组的元素进行排序。
182  void();
            A    上面表达式的结果是：
            B    undefined
            C    TypeError
            D    null
            E    SyntaxError
        正确答案: D
        解释：
            typeof  1; //'number'
            typeof (1);//'number'
            typeof (); //SyntaxError 语法错误
            void  0; //undefined
            void (0);//undefined
            void (); //SyntaxError 语法错误
            （chrome、firfox以及node环境下测试都是SyntaxError）
            void 作为运算符后面接的是表达式，void expression。而void(0)也是被当做void 0。如果直接void()，那么我觉得应该是把void当做函数使用了，但是此时void并没有定义。




*/