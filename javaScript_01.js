/*
1  JavaScript定义var a="40",var b=7,则执行a%b会得到()。
            A    5
            B    "5"
            C    undefined
            D    null
        正确答案: A 
        解释：
            Javascript是弱类型语言，但是明显字符串“40”不能用于 % 运算符，所以会根据后面的类型进行转化，最后结果是 5
            运算中，+号，数字隐式转换成字符串。其余的运算符号是字符串隐式转换成数字。
2  有以下代码片段：
        var a =[];
        a[0]=1, a[1]=2, a[2]=3, a[5]=4;
请问a.length的值是多少（ ）
            A    会报错
            B    3
            C    4
            D    6
        正确答案: D 
        解释：
            a[0]:1 
            a[1]:2 
            a[2]:3 
            a[3]:undefined 
            a[4]:undefined 
            a[5]:4
            ECMAScript数组的大小是可以动态调整的，既可以随着数据的添加自动增长以容纳新增数据。当把一个值放在超出当前数组大小的位置上时，
            数组就会重新计算长度值，即长度值等于最后一项的索引加一，前面的值都自动被赋值为了undefined了。
3  白屏时间first paint和可交互时间dom ready的关系是？
            A    先触发first paint ，后触发dom ready
            B    先触发dom ready，后触发first paint
            C    一起触发
            D    没关系
        正确答案: A 
        解释：
            页面的性能指标详解：
            白屏时间（first Paint Time）——用户从打开页面开始到页面开始有东西呈现为止
            首屏时间——用户浏览器首屏内所有内容都呈现出来所花费的时间
            用户可操作时间(dom Interactive)——用户可以进行正常的点击、输入等操作，默认可以统计domready时间，因为通常会在这时候绑定事件操作
            总下载时间——页面所有资源都加载完成并呈现出来所花的时间，即页面 onload 的时间
            参考链接：https://www.jianshu.com/p/9b0825cec3c9
            firstPaint：白屏时间，也就是开始解析DOM耗时，用户在没有滚动时候看到的内容渲染完成并且可以交互的时间。
            domReadyTime：用户可操作时间。
4  在jquery中想要找到所有元素的同辈元素，下面哪一个是可以实现的？
            A    eq(index)
            B    find(expr)
            C    siblings([expr])
            D    next()
        正确答案: C 
        解释：
            jQuery siblings() 方法
            siblings() 方法返回被选元素的所有同胞元素。
            下面的例子返回 <h2> 的所有同胞元素：
            实例
            $(document).ready(function(){
            $("h2").siblings();
            });
            jQuery next() 方法
            next() 方法返回被选元素的下一个同胞元素。
            该方法只返回一个元素。
            下面的例子返回 <h2> 的下一个同胞元素：
            实例
            $(document).ready(function(){
            $("h2").next();
            });
            jQuery find() 方法
            find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。
            下面的例子返回属于 <div> 后代的所有 <span> 元素：
            实例
            $(document).ready(function(){
            $("div").find("span");
            });
5  关于javascript的原始类型（primitive type），错误的是
            A    有5种primitive type，分别是Undefined、Null、Boolean、Number 和 String。
            B    var sTemp = "test string";alert (typeof sTemp);结果为string
            C    var oTemp;alert(oTemp == undefined)为true
            D    alert(null == undefined);结果为false
        正确答案: D 
        解释：
            Null类型：      null类型也只有一个值，即null。undefined实际上是从null派生而来的，因此ECMAScript把他们定义为相等的。      
            alert(null == undefined); //output "true"      尽管两个值相等，但是他们的含义却不一样，undefined是声明了变量但为对其初始化时
            赋予该变量的值，null则用于表示尚未存在的对象。如果函数要返回的是对象，那么找不到该对象时，返回的通常是null。
            undefined值是通过null派生出来的，==时它会自动转化为null，所以返回true。不过如果用严格比较符===，不发生转化，将返回false。
            在ECMAScript中（为什么是ECMAScript中，因为JavaScript包括了ECMAScript、DOM、BOM，而ECMAScript定义了JavaScript中的语法、关键字等等），变量可以存放两种类型的值，原始类型和引用类型，原始类型其实可以理解为Java、C#等语言的值类型 ，值存放在栈(stack)上面。ECMAScript中包含五种原始类型，即Undefined、Null、Number、Boolean、String，注意：String类型在JavaScript中属于原始类型 ，这点不同于Java、C#等语言。
                  在为变量赋值时，ECMAScript的解释程序必须判断该值是原始类型的。
                  在JavaScript中，把术语类型（type）定义为值的一个集合，每种原始类型定义了它包含的值的范围及其字面量表示形式。 ECMAScript提供了typeof 运算符来判断一个值是否在某种类型的范围内。可以用这种运算符判断一个值是否表示一种原始类型；如果它是原始类型，还可以判断表示哪种原始类型（注意：对Null值使用typeof运算符，返回的是object）。
            typeof运算符 ：
                  typeof运算符有一个参数，即要检查的变量或值。例如
                  var sTemp = "test string";
                  alert(typeof sTemp);//output "test string"
                  alert(typeof 20); //output "number"
                  对变量或值调用typeof运算符将返回下列值之一：
                  ”undefined“，如果变量是Undefined型的。
                  ”boolean“，如果变量是Boolean型的。
                  ”number“，如果变量是Number型的。
                  ”string“，如果变量是String型的。
                  ”object“，如果变量是一种引用类型或Null类型的。
                  注意：为什么typeof运算符对于null值会返回”object“。这实际上时JavaScript最初实现中的一个错误，后来被ECMA沿用了。现在，null被认为是对象的占位符，从而解释了这一矛盾，但从技术将，它仍是原始值。
            Undefined类型 ：
                  undefined类型只有一个值，即undefined。当声明的变量未初始化时，该变量的默认值是undefined。
                  注意：值undefined并不同于未定义的值。 但是，typeof运算符并不真正区分这两种值。考虑如下代码：
                  var oTemp;
                  alert(typeof oTemp); //output "undefined"
                  alert(typeof oTemp2); //output "undefined"
                  但是，如果不用typeof运算符，就对oTemp2使用其他运算符，这将引起错误，因为那些运算符只能用于已定义的变量。例如，下面代码将引发错误：
                  alert(oTemp2 == undefined); //error
                  当函数无明确返回值时，返回的也是值undefined。
            Null类型：
                 null类型也只有一个值，即null。undefined实际上是从null派生而来的，因此ECMAScript把他们定义为相等的。
                 alert(null == undefined); //output "true"
                 尽管两个值相等，但是他们的含义却不一样，undefined是声明了变量但为对其初始化时赋予该变量的值，null则用于表示尚未存在的对象。如果函数要返回的是对象，那么找不到该对象时，返回的通常是null。
                Boolean类型 ：
                Boolean类型是ECMAScript中最常用的类型之一。它有两个值true和false（即两个Boolean字面量）。即使false不等于0,0也可以在必要时被转换成false，这样在Boolean语句中使用两者都是安全的。
                其实alert(1 == true);返回的是true；alert(0 == false);返回的也是true。不知道为什么说上面说的“false不等于0”是什么意思。
            Number类型 ：
                ECMA-262中定义的最特殊的类型是Number型。这种类型既可以表示32位的整数，还可以表示64位的浮点型。直接输入的（而不是从另外一个变量访问的）任何数字都被看作Number型的字面量。例如下面代码声明了存放整数值的变量，它的值由字面量55定义：
                var iNum = 55;
                整数也可以被表示为八进制（以8为底）或者十六进制（以16为底）的字面量。八进制字面量的首字母必须为0，其后的数字可以是任何八进制数字（0到7），如下面代码所示：
                var iNum = 070; //等于8
                要创建十六进制的字面量，首位数字必须为0，其后接字母x，然后是任意的十六进制数字（0到9和A到F）。这些字母可以是大写的，也可以是小写的。例如：
                var iNum = 0x1f; //等于31
                var iNum2 = 0xab; //等于171
                注意：尽管所有整数都可以表示为八进制或者十六进制的字面量，但所有的数学运算符返回的都是十进制的结果。
                要定义浮点值，必须包括小数点和小数点后的以为数字（例如，用1.0而不是1）。这被看作浮点数数字面量。例如：
                var fNum = 5.0;
                浮点字面量的有趣之处在于，用它进行计算前，真正存储的是字符串。？？？
            String类型：
                String类型的独特之处在于，它是唯一没有固定大小的原始类型。可以用字符串存储0或更多的Unicode字符，由16位整数表示。由于JavaScript中没有字符类型（如Java、c#中的char类型），所以声明一个字符变量用双引号或者单引号都可以。
               另外，String类型还包括几种字符字面量，Java、C和perl的开发者应该对此比较熟悉。下表列出了ECMAScript的字符字面量：
               字面量                   含义
                /n                       换行
                /t                        制表符
                /b                       空格
                /r                        回车
                /f                        换页符
                //                        反斜杠
                /'                        单引号
                /"                       双引号
                /0nnn                八进制代码nnn（n是0到7中的一个八进制数字）  表示的字符
                /xnn                  十六进制代码nn（n是0到F中的一个十六进制数字） 表示的字符
                /unnnn              十六进制代码nnnn（n是0到F中的一个十六进制数字）表示的Unicode字符
6  以下js表达式返回false的是（）
            A    1==true
            B    “”==false
            C    false==null
            D    null==undefined
        正确答案: C
        解释：
            null与undefined在与其他数相等运算时不进行类型转换
            undefined和null与任何有意义的值比较返回的都是false，但是null与undefined之间互相比较返回的是true。
            console.log(null == false); //false
            console.log(null == true);//false
            console.log(undefined == false);//false
            console.log(undefined == true); //false
            console.log(undefined == null);//true
            console.log(undefined == undefined);//true
            console.log(null == null);//true





*/