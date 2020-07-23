/*
172  AngularJS1元素过滤的正确写法是哪一个？
            A    x in list if(query(x))
            B    x in list | filter:query
            C    x in list ? filter:query
            D    x in list if filter:query
        正确答案: B 
        解释：
            filter的两种使用方法
            1. 在模板中使用filter
            我们可以直接在{{}}中使用filter，跟在表达式后面用 | 分割，语法如下：
            {{ expression | filter }}
            也可以多个filter连用，上一个filter的输出将作为下一个filter的输入
            {{ expression | filter1 | filter2 | ... }}
            filter可以接收参数，参数用 : 进行分割，如下：
            {{ expression | filter:argument1:argument2:... }}
            除了对{{}}中的数据进行格式化，我们还可以在指令中使用filter，例如先对数组array进行过滤处理，然后再循环输出：
            <span ng-repeat="a in array | filter ">

            2. 在controller和service中使用filter
            我们的js代码中也可以使用过滤器，方式就是我们熟悉的依赖注入，例如我要在controller中使用currency过滤器，只需将它注入到该controller中即可，代码如下：
            app.controller('testC',function($scope,currencyFilter){
                $scope.num = currencyFilter(123534);  
            }
            在模板中使用{{num}}就可以直接输出 $123,534.00了！在服务中使用filter也是同样的道理。

            ng提供了一个$filter服务可以来调用所需的filter，你只需注入一个$filter就够了，使用方法如下：
            app.controller('testC',function($scope,$filter){
                $scope.num = $filter('currency')(123534);
            $scope.date = $filter('date')(new Date());  
            }

            可以达到同样的效果。好处是你可以方便使用不同的filter了。
173  console.log(([])?true:false); 
        console.log(([]==false?true:false)); 
        console.log(({}==false)?true:false) 
        得到的结果分别是什么？（）
            A    false true true
            B    true true true
            C    true false true
            D    true true false
        正确答案: D
        解释：
            答案选C：“true、true、false”。此题考察类型转换，三元运算符先“分清是非”，再决定今后该走哪条路，“==”运算符比较“喜欢”Number类型。（我就不严谨地这么一说，若要刨根问底，请看《JavaScript权威指南》）

            下面是题目的类型转换结果：

            Boolean([]); //true
            Number([]); //0
            Number({}); // NaN
            Number(false); //0
            因此：

            console.log(([])?true:fasle);// => console.log((true)?true:false);
            console.log([]==false?true:false); // => console.log(0==0?true:false);
            console.log(({}==false)?true:false); // => console.log((NaN==0)?true:false);
            《JavaScript权威指南》的部分相关知识点
            “==”运算符（两个操作数的类型不相同时）

            如果一个值是null，另一个值是undefined，则它们相等
            如果一个值是数字，另一个值是字符串，先将字符串转换为数学，然后使用转换后的值进行比较。
            如果其中一个值是true，则将其转换为1再进行比较。如果其中的一个值是false，则将其转换为0再进行比较。
            如果一个值是对象，另一个值是数字或字符串，则将对象转换为原始值，再进行比较。
            对象到数字的转换

            如果对象具有valueOf()方法，后者返回一个原始值，则JavaScript将这个原始值转换为数字（如果需要的话）并返回一个数字。
            否则，如果对象具有toString()方法，后者返回一个原始值，则JavaScript将其转换并返回。（对象的toString()方法返回一个字符串直接量（作者所说的原始值），JavaScript将这个字符串转换为数字类型，并返回这个数字）。
            否则，JavaScript抛出一个类型错误异常。
            空数组转换为数字0

            数组继承了默认的valueOf()方法，这个方法返回一个对象而不是一个原始值，因此，数组到数学的转换则调用toString()方法。空数组转换为空字符串，空字符串转换为数字0.
174  以下哪一项不属于浏览器Response Headers字段：
            A    Referer
            B    Connection
            C    Content-Type D
            D    Server
        正确答案: A
        解释：
            说一说常见的请求头和相应头都有什么呢？
            1)请求(客户端->服务端[request]) 
                GET(请求的方式) /newcoder/hello.html(请求的目标资源) HTTP/1.1(请求采用的协议和版本号) 
                Accept: * /*(客户端能接收的资源类型) 
                Accept-Language: en-us(客户端接收的语言类型) 
                Connection: Keep-Alive(维护客户端和服务端的连接关系) 
                Host: localhost:8080(连接的目标主机和端口号) 
                Referer: http://localhost/links.asp(告诉服务器我来自于哪里) 
                User-Agent: Mozilla/4.0(客户端版本号的名字) 
                Accept-Encoding: gzip, deflate(客户端能接收的压缩数据的类型) 
                If-Modified-Since: Tue, 11 Jul 2000 18:23:51 GMT(缓存时间)  
                Cookie(客户端暂存服务端的信息) 
                Date: Tue, 11 Jul 2000 18:23:51 GMT(客户端请求服务端的时间)


            2)响应(服务端->客户端[response])
                HTTP/1.1(响应采用的协议和版本号) 200(状态码) OK(描述信息)
                Location: http://www.baidu.com(服务端需要客户端访问的页面路径) 
                Server:apache tomcat(服务端的Web服务端名)
                Content-Encoding: gzip(服务端能够发送压缩编码类型) 
                Content-Length: 80(服务端发送的压缩数据的长度) 
                Content-Language: zh-cn(服务端发送的语言类型) 
                Content-Type: text/html; charset=GB2312(服务端发送的类型及采用的编码方式)
                Last-Modified: Tue, 11 Jul 2000 18:23:51 GMT(服务端对该资源最后修改的时间)
                Refresh: 1;url=http://www.it315.org(服务端要求客户端1秒钟后，刷新，然后访问指定的页面路径)
                Content-Disposition: attachment; filename=aaa.zip(服务端要求客户端以下载文件的方式打开该文件)
                Transfer-Encoding: chunked(分块传递数据到客户端）  
                Set-Cookie:SS=Q0=5Lb_nQ; path=/search(服务端发送到客户端的暂存数据)
                Expires: -1//3种(服务端禁止客户端缓存页面数据)
                Cache-Control: no-cache(服务端禁止客户端缓存页面数据)  
                Pragma: no-cache(服务端禁止客户端缓存页面数据)   
                Connection: close(1.0)/(1.1)Keep-Alive(维护客户端和服务端的连接关系)  
                Date: Tue, 11 Jul 2000 18:23:51 GMT(服务端响应客户端的时间)
            在服务器响应客户端的时候，带上Access-Control-Allow-Origin头信息，解决跨域的一种方法。
175  写出下面代码的运行结果
        var a,b;
        (function(){
            alert(a);
            alert(b);
            var a=b=3;
            alert(a);
            alert(b);
        })();
        alert(a);
        alert(b);
            A    undefined，undefined，3,3，undefined，3
            B    undefined，undefined，3,3，undefined，undefined
            C    0，0，3,3，undefined，undefined
            D    undefined，undefined，3,3，0，0
        正确答案: A   
        解释：
            经过测试，是这样执行的
            
                var a,b;
            
                (function(){
            
                    alert(a);   //这是第一个输出的,先在局部没找到a变量，然后去全局找，找到了但没定义，输出undefined
            
                    alert(b);    //这是第二个输出的，其他同上
            
                    var a=b=3;    //定义一个局部变量a=3,然后给全局变量b赋值 b=3;
            
                    alert(a);     //这是第三个输出，局部变量a=3
            
                    alert(b);     //这是第四个输出，全局变量b=3
            
                })();            //这个函数体已经执行完毕，里面的内存已经被垃圾回收器回收，局部变量a销毁
            
                alert(a);        //这是第五个输出，全局变量a=undefined
            
                alert(b);        //这是第六个输出，全局变量b=3
            
                
            
                故正确答案是undefined,undefined,3,3,undefined,3;选A




*/