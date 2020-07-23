/*
132  for(var i=0;i<5;++i){
            setTimeout(function(){
                console.log(i+ ' ');
            },100);
        }
以上代码执行的结果是（）。
            A    5 5 5 5 5
            B    0 0 0 0 0
            C    0 1 2 3 4
            D    1 2 3 4 5
        正确答案: A 
        解释：
            setTimeout() 是异步的，只有等到主线上的都执行完，才会执行异步的，此时i已经变成5。由于共循环了5次,异步队列中存放了
            五次setTimeout()，会按照队列的顺序依次执行，且共同访问的是同一个变量。所以每次结果都是5，特别强调一下，
            这里和setTimetou(function,100)中的100 无关，假如：setTimeout(function,0)，变成0 结果也是一样的。
            每次循环进来之后，由于setTimeout()，内部的匿名函数并没有立即执行，而是等到100ms后，而此时i早已变为5。
            1）可以利用匿名函数创建立即执行函数（或者叫模仿跨级作用域）来解决这个问题；
            for(var i=0;i<5;++i){
            (function(num){
            setTimeout(function(){
            console.log(num+ ' ');
            },100);
            })(i);
            }
            创建立即执行函数并传入参数i。 因为函数的参数是按值传递的，所以i的当前值就赋值给了num，并传递给了setTimeout 中的闭包，在闭包中保存了i当前值的一个副本。
            看到这里是不是要给我点个赞呢！
            2）也可以使用ES6中的 let命令
            for(let i=0;i<5;++i){
                setTimeout(function(){
                    console.log(i+'');
                },100);
            }
133  var arrTemp = [1,2,3] 
        arrTemp.shift()
        arrTemp.push(1)
        arrTemp.unshift(2)
        var arrNew = arrTemp.concat([1,2])
        console.log(arrNew)
以上 javascript 代码，在浏览器中运行的结果是
            A    [2,2,3,1,1,2]
            B    [2,1,2,1,1,2]
            C    [2,2,3,1,[1,2]]
            D    [2,1,2,1,[1,2]]
        正确答案: A
        解释：
            很简单，shift删除数组第一个元素，此时arrTemp变成[2,3]；
            push在数组后面添加一个元素，此时arrTemp变成[2,3,1]；
            unshift在数组前面添加一个元素，
            此时arrTemp变成[2,2,3,1]；concat是将两个数组进行连接，
            此时arrTemp变成[2,2,3,1,1,2]。
134  在ECMAScript6 中,下面哪个不属于Promise的状态？
            A    Pending
            B    Rejected
            C    Resolved
            D    Pause
        正确答案: D  
        解释：
            Promise对象只有三种状态。
            异步操作“未完成”（pending）
            异步操作“已完成”（resolved，又称fulfilled）
            异步操作“失败”（rejected）
            这三种的状态的变化途径只有两种。

            异步操作从“未完成”到“已完成”
            异步操作从“未完成”到“失败”。
            这种变化只能发生一次，一旦当前状态变为“已完成”或“失败”，就意味着不会再有新的状态变化了。因此，Promise对象的最终结果只有两种。

            异步操作成功，Promise对象传回一个值，状态变为resolved。
            异步操作失败，Promise对象抛出一个错误，状态变为rejected。

            参考链接为:http://javascript.ruanyifeng.com/advanced/promise.html#toc9
135  表达式 ”2”+3+4 的值为？
            A    ”27”
            B    9
            C    ”234”
            D    ”9”
        正确答案: C 
        解释：
            1、“+”是左关联，表达式相当于("2"+3)+4
            2、根据ES5规范11,6,1节，如果某个操作数是字符串或者能够通过以下步骤转换为字符串的话，+将进行拼接操作。（ToPrimitive、DefaultValue。。。）
136  var foo=”Hello”;
        (function(){
            var bar=”World”;
            alert(foo+bar);
        })();
        alert(foo+bar);
其中 alert 两次输出结果为（）
            A    hello world报错
            B    hello world hello world
            C    hello world hello
        正确答案: A 
        解释： 
            (function(){
            
                var bar=”World”;
            
                alert(foo+bar);
            
            })();
            
            //此函数是一个匿名自执行函数，会先调用并执行一次，即alert (foo+bar)的字符串拼接；
            
            // var bar=”World”是函数内部声明的局部变量，外部无法调用，所以外部的alert(foo+bar)会报错。
137  以下代码执行后，array的结果是？
        var array=[-1,1,3,4,6,10]; 
        array.sort((a,b)=>Math.abs(a-3)-Math.abs(b-3));
            A    [10,-1,6,1,4,3]
            B    [10,6,4,3,1,-1]
             C   [3,4,1,6,-1,10]
             D   [-1,1,3,4,6,10]
        正确答案: C
        解释：
                array. sort(sortFunction)是按照sortFunction结果大小排序。

                一言不合先把比较的对象定义在数组上方，再手工分析
                <code class="language-java">class Untitled {
                    public static void main(String[] args) {
                    //4 2 0 1 3 7
                    var array=[-1,1,3,4,6,10];
                    array.sort((a,b)=>Math.abs(a-3)-Math.abs(b-3));        System.out.println(array);
                
                    }
                }</code>
                发现最小的是算好后的第三个数字，对应原数组原位置上面是，3。
                看看选项中只有一个是以3排在前面的数组。
                好了，后面的不用比了。



*/