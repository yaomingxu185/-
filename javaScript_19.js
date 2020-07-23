/*
157  var color = 'green'
        var  test4399 = {
            color:'blue'
            getColor：function(){
                var color = 'red'
                alter(this.color)
            }
        }
        var getColor = test4399.getColor;
        getColor();
        test4399.getColor();
以上 javascript 代码执行后， 浏览器 alert 出来的结果分别是
            A    undefined,red
            B    green,blue
            C    undefined,blue
            D    green,undefined
            E    blued,undefined
        正确答案: B
        解释：
            知识点一:js函数调用时加括号和不加括号的区别.不加括号相当于把函数代码赋给等号左边,加括号是把函数返回值赋给等号左边.
            参考https://www.zhihu.com/question/31044040
            知识点二:js中this的用法,this总是指向调用它的对象,倒数第二行的getColor为windows调用的,倒数第一行的getColor是test4399对象调用的.
            参考http://www.cnblogs.com/painsOnline/p/5102359.html
            1.getColor()  var getColor = test4399.getColor;即var getColor = function(){var color = "red";alert(this.color);};
            执行getColor()函数时this指向的window，因为window.color为green，所以弹出green
            2.test4399.getColor(),此时this指向的是test4399，test4399.color为blue，所以弹出blue
158  需要删除arr数组中的第i个元素（从第1个元素开始），最好的做法是？
            A    arr.splice(i-1,1)
            B    arr.slice(0,n).concat(arr.slice(n+1,arr.length));
             C   Array.prototype.remove=function(dx)　{　　
             D   if(isNaN(dx)||dx>this.length){return false;}　　
            E    for(var i=0,n=0;i<this.length;i++)　　{　　　　if(this[i]!=this[dx])　　　{　　　　　　this[n++]=this[i]　　　　}　　}　　this.length-=1　}
            F    for(var i=0,n=0;i<this.length;i++)　　{　　　　if(this[i]!=this[dx])　　　　{　　　　　this[n++]=this[i]　　　　}　　}
        正确答案: A  
        解释：
                定义和用法
                splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

                注释：该方法会改变原始数组。

                语法
                arrayObject.splice(index,howmany,item1,.....,itemX)
                参数	描述
                index	必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
                howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
                item1, ..., itemX	可选。向数组添加的新项目。
159  下面结果为真的表达式是：（）
            A    null instanceof Object
            B    null === undefined
            C    null == undefined
            D    NaN == NaN
        正确答案: C 
        解释：
                null和undefined是不同的，但它们都表示“值的空缺”，判断相等运算符“==”认为两者是相等的（要使用严格相等运算符“===”来区分它们）。
160  如何遍历下面的 my_data 对象？
            A    var my_data={a:’Ape’, b:’Banana’, c:’Citronella’};
            B    for(var key in my_data) {}
            C    foreach(my_data as key=>value) {}
             D   for(var i=0;i<my_data.length;i++) {}
             E   全不正确
        正确答案: A
        解释：
            选A; 采用in来遍历对象的属性
            B是php的方法
            C对象没有length, 数组才可以
161  如果不给cookie设置过期时间会怎么样？
            A    立刻过期
            B    永不过期
            C    cookie 无法设置
            D    在浏览器会话结束时过期
        正确答案: D
        解释：
            如果不设置cookie结束时间，他会在关闭浏览器的时候销毁～
162  var arr=[{a:1},{}];
        arr.forEach(function(item,idx){
            item.b=idx;
        });
        上面代码执行后， arr 的值是：（）
             A   [{a:1},{}]
             B   [{a:1,b:0},{b:1}]
             C   [{a:1,b:1},{b:1}]
             D   [{a:!,b:0},{b:0}]
        正确答案: B
        解释：
            arr.forEach（a,b,c）
            这个函数用于数组的遍历，其中三个参数abc意义如下
            a代表arr[0]---arr[arr.length-1]
            b代表0---arr.length-1
            c代表arr
            //参数c被省略了
            所以第一次循环 a={a:1} , b=0;
            执行a.b = 0 后，以为a是一个对象，即给对象啊添加一个b属性，值为0 得到[{a:1,b:0},{}]
            第二次循环也是这个意思
163  在 javascript 中，用于阻止默认事件的默认操作的方法是
            A    stopDeafault()
            B    stopPropagation()
            C    preventPropagation()
             D   preventDefaultEven()
            E    preventDefault()
        正确答案: E
        解释：
            下面三个事件都是事件对象的方法：

            stopPropagation() 阻止事件冒泡。 这个事件不会阻止定义在元素上的其他事件。

            stopImmediatePropagation() 会彻底的阻止事件， 在其之后的绑定在元素上的其他监听事件都不会触发

            preventDefault() 阻止事件的默认动作

            js没有选项中的其他事件
164  只能输入零和非零开头的数字，正确的正则表达式是（）
            A    ^(0|[1-9][0-9]*)$
            B    ^(0|[1-9][1-9]*)$
            C    ^(0|[1-9][0-9])$
            D    ^\+[1-9][0-9]*$
            正确答案: A 
            解释：
                只能输入零／非零开头的数字
                ^ 以。。。开头，$以。。。结尾。
                *任意多次
                |或的意思
                （）组
                []集合


*/