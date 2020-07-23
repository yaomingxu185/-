/*
7  以下 javascript 代码，在浏览器中运行的结果是
        function foo(){
            console.log('first')
            setTimeout(() => {
                console.log('second')
            }, 5);
        }
        for(var i = 0;i<439999;i++){
            foo()
        } 
            A    first,second,first,second..依次顺序输出
            B    首先全部输出first，然后全部输出second
            C    first，second无顺序输出
            D    首先输出first，超出5ms输出所有second，最后输出余下的first
        正确答案: B  
        解释：
            这里考察的知识点是回调的运行机制。
            回调时，被回调的函数会被放在event loop里，等待线程里的任务执行完后才执行event loop里的代码。
            因此，上述代码会先把线程里的console.log('first')执行完后，再执行event loop里的console.log('second')。
            因此，答案选B。
            JavaScript 是单线程的，setTimeout 设置的是异步任务，会放在 macrotask 里面，等待执行栈的代码执行完毕之后才会执行 macrotask 里面的异步任务，
            所以这里会等待 for 循环执行完毕才会执行定时器设置的任务。
8  下面哪个选项中的对象与浏览列表有关（ ）
            A    window,location
            B    location,history
            C    navigator,window
            D    historylist,location
        正确答案: B
        解释：
            与浏览列表有关的对象:history screen location Navigator
            这题死记硬背就行，记住就行
9  Number(null);
上面的代码将返回：
            A    Null
            B    0
            C    undefined
            D    1
        正确答案: B
        解释：
            null    empty   0,  number 默认把其转化为0
            下面几个都会转化为0：
            Number()
            Number(0)
            Number('')
            Number('0')
            Number(false)
            Number(null)
            Number([])
            Number([0])
            下面这些也需要注意一下：
            console.log(Number(""));           //0
            console.log(Number(null));         //0
            console.log(Number(undefined));    //NaN
            
            console.log(parseInt(""));        //NaN
            console.log(parseInt(null));      //NaN
            console.log(parseInt(undefined)); //NaN
            
            console.log(null == 0); //false
            console.log(undefined == 0); //false
10  在准备XMLHttpRequest对象时，在send()前需要调用哪个方法？
            A    prepare ()
            B    open ()
            C    init ()
            D    build ()
        正确答案: B 
        解释：
            Ajax技术核心就是XMLHttpRequest对象。
            Ajax技术的工作原理：可以分成3步
            1.创建Ajax对象：var xhr = new XMLHttpRequest();
            2.xhr 发送请求：xhr.open('get','test.html','true');
                                    xhr.send();
            3.xhr获取响应：
                                    xhr.onreadystatechange = function(){
                                            if(xhr.readystate == 4){//请求的状态码
                                                                /*
                                                                            0:请求还没有建立（open执行前）
                                                                            1：请求建立了还没发送（执行了open）
                                                                                2：请求正式发送（执行了send）
                                                                            3：请求已受理，有部分数据可以用，但还没有处理完成
                                                                            4：请求完全处理完成
                                                                    * /
                                                                    alert(xhr.responseText);//返回的数据
                                                                    }
                                                            }
                            可以看到，send()前是open()
11  关于angularjs1说法，错误的是
            A    前端mvc，极大降低前端开发的耦合
            B    极大的丰富了dom操作
            C    实现了数据双向绑定
            D    实现了依赖注入
        正确答案: B 
        解释：
            依赖注入（Dependency Injection），是这样一个过程：由于某客户类只依赖于服务类的一个接口，而不依赖于具体服务类，所以客户类只定义一个注入点。
            在程序 运行过程中，客户类不直接实例化具体服务类实例，而是客户类的运行上下文环境或专门组件负责实例化服务类，然后将其注入到客户类中，
            保证客户类的正常运行。
            Angular大大减少了对DOM的访问。 jQuery极大的丰富了DOM操作
12  假设有如下代码，那么a(10)的返回结果是？（ ）
        function a(a)
        {
        a^=(1<<4)-1;
        return a;
        }
            A    5
            B    10
            C    15
            D    16
        正确答案: A  
        解释：
            1<<4   左移相当于1*2^4=16
            a^=16-1=15
            a=a^15=10^15
            ^ 异或运算：
            10的二进制00001010
            15的二进制00001111
            ========>00000101  转成十进制：5
            （按位异或运算，同为1或同为0取0，不同取1）
13  下列不属于javascript内置对象的是
            A    Math
            B    Date
            C    RegExp
            D    Window
            E    Error
        正确答案: D 
        解释：
            JS中，可以将对象分为“内部对象”、“宿主对象”和“自定义对象”三种。
            1，内部对象
            js中的内部对象包括Array、Boolean、Date、Function、Global、Math、Number、Object、RegExp、String以及各种错误类对象，
            包括Error、EvalError、RangeError、ReferenceError、SyntaxError和TypeError。
            其中Global和Math这两个对象又被称为“内置对象”，这两个对象在脚本程序初始化时被创建，不必实例化这两个对象。
            2.宿主对象
            宿主对象就是执行JS脚本的环境提供的对象。对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，所以又称为浏览器对象，
            如IE、Firefox等浏览器提供的对象。不同的浏览器提供的宿主对象可能不同，即使提供的对象相同，其实现方式也大相径庭！这会带来浏览器兼容问题，增加开发难度。
            浏览器对象有很多，如Window和Documen，Element，form，image，等等。
            3.自定义对象
            顾名思义，就是开发人员自己定义的对象。JS允许使用自定义对象，使JS应用及功能得到扩充
14  flash和js通过什么类如何交互?
                A    ExtensionContex
                B    ExternalInterface
                C    IInterpolator
                D    FlexContentHolder
            正确答案: B 
            解释：
                Flash提供了ExternalInterface接口与JavaScript通信，ExternalInterface有两个方法，call和addCallback，call的作用是让Flash调
                用js里的方法，addCallback是用来注册flash函数让js调用。
                Flash提供了ExternalInterface接口与JavaScript通信
                两个方法：call和addCallback
                作用：call让Flash调用js里的方法，addCallback是用来注册flash函数让js调用。




*/
