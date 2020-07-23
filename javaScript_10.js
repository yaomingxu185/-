/*
79  下面关于promise的说法中，错误的是（）
            A    resolve（）和reject都是直接生成一个进入相应状态的promise对象，其参数就是进入相应状态时传递过去的参数，可以在完成回调的参数中得到
            B    Promise.resolve（value），Promise.reject（reason）是Promise构造器上还直接提供了一组静态方法
            C    在调用then方法或者catch方法时都是异步进行的，但是执行速度比较快
            D    Promise构造器的prototype上还有两个方法，分别是then和catch。这两个方法的参数也是回调函数，这些函数会在Promise实例进入不同状态后被调用。
                    Then对应到resolve，catch对应到reject
        正确答案: D
        解释:
            then 有两个参数 都是回调函数 第一个回调函数，在Promise 状态为resolve 执行，第二个在状态为reject执行。catch方法，相当于then(null,reject)
            的一个变体。
            promise
            在 JavaScript 的异步进化史中，涌现出一系列解决 callback 弊端的库，而 Promise 成为了最终的胜者，并成功地被引入了 ES6 中。它将提供了一个更好
            的“线性”书写方式，并解决了异步异常只能在当前回调中被捕获的问题。

            Promise 就像一个中介，它承诺会将一个可信任的异步结果返回。首先 Promise 和异步接口签订一个协议，成功时，调用resolve函数通知 Promise，异常时，
            调用reject通知 Promise。另一方面 Promise 和 callback 也签订一个协议，
            由 Promise 在将来返回可信任的值给then和catch中注册的 callback。
            // 创建一个 Promise 实例（异步接口和 Promise 签订协议）
            var promise = new Promise(function (resolve,reject) {
            ajax('url',resolve,reject);
            });

            // 调用实例的 then catch 方法 （成功回调、异常回调与 Promise 签订协议）
            promise.then(function(value) {
            // success
            }).catch(function (error) {
            // error
            })
            Promise 是个非常不错的中介，它只返回可信的信息给 callback。它对第三方异步库的结果进行了一些加工，保证了 callback 一定会被异步调用，
            且只会被调用一次。

            var promise1 = new Promise(function (resolve) {
            // 可能由于某些原因导致同步调用
            resolve('B');
            });
            // promise依旧会异步执行
            promise1.then(function(value){
                console.log(value)
            });
            console.log('A');
            // A B （先 A 后 B）


            var promise2 = new Promise(function (resolve) {
            // 成功回调被通知了2次
            setTimeout(function(){
                resolve();
            },0)
            });
            // promise只会调用一次
            promise2.then(function(){
                console.log('A')
            });
            // A (只有一个)

            var promise3 = new Promise(function (resolve,reject) {
            // 成功回调先被通知，又通知了失败回调
            setTimeout(function(){
                resolve();
                reject();
            },0)

            });
            // promise只会调用成功回调
            promise3.then(function(){
                console.log('A')
            }).catch(function(){
                console.log('B')
            });
            // A（只有A）
            介绍完 Promise 的特性后，来看看它如何利用链式调用，解决异步代码可读性的问题的。

            var fetch = function(url){
                // 返回一个新的 Promise 实例
                return new Promise(function (resolve,reject) {
                    ajax(url,resolve,reject);
                });
            }

            A();
            fetch('url1').then(function(){
                B();
                // 返回一个新的 Promise 实例
                return fetch('url2');
            }).catch(function(){
                // 异常的时候也可以返回一个新的 Promise 实例
                return fetch('url2');
                // 使用链式写法调用这个新的 Promise 实例的 then 方法    
            }).then(function() {
                C();
                // 继续返回一个新的 Promise 实例...
            })
            // A B C ...
            如此反复，不断返回一个 Promise 对象，再采用链式调用的方式不断地调用。使 Promise 摆脱了 callback 层层嵌套的问题和异步代码“非线性”执行的问题。

            Promise 解决的另外一个难点是 callback 只能捕获当前错误异常。Promise 和 callback 不同，每个 callback 只能知道自己的报错情况，
            但 Promise 代理着所有的
            callback，所有 callback 的报错，都可以由 Promise 统一处理。所以，可以通过catch来捕获之前未捕获的异常。

            Promise 解决了 callback 的异步调用问题，但 Promise 并没有摆脱 callback，它只是将 callback 放到一个可以信任的中间机构，
            这个中间机构去链接我们的代码和异步接口。
80  下列js延迟加载的方式中，只有IE浏览器支持的是哪一种方式？（）
备注：该题可能过时，请按照之前的知识选择。
            A    async
            B    defer
            C    动态创建DOM方式
            D    按需异步载入
        正确答案: B
        解释:
            参考链接
            https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
            https://caniuse.com/#search=defer
81  在AngularJS中，哪种控制元素隐藏显示的做法是最正确的
            A    <div ng-show="val"></div>
            B    <div  ng-class="{true: '', false: 'hedden'}[value]"></div>
            C    <div ng-if="val"></div>
            D    <div ng-app="myApp"></div>
        正确答案: A
        解释:
            1、ng-show  指令在表达式为 true 时显示指定的 HTML 元素，否则隐藏指定的 HTML 元素。
            < element   ng-show= "val" > < /element >,如果val表达式为 true 则显示指定的 HTML 元素。
            2、ng-class  指令用于给 HTML 元素动态绑定一个或多个 CSS 类。 
            3、ng-if  指令用于在表达式为 false 时移除 HTML 元素。如果 if 语句执行的结果为 true，会添加移除元素，并显示。ng-if  指令不同于
             ng-hide， ng-hide 隐藏元素，而  ng-if  是从 DOM 中移除元素。
            4、ng-app  指令用于告诉 AngularJS 应用当前这个元素是根元素。所有 AngularJS 应用都必须要要一个根元素。HTML 文档中只允许有一个
             ng-app 指令，如果有多个 ng-app 指令，则只有第一个会被使用。 
            所以选A
82  下面哪一个不是 JavaScript 的保留字？
            A    goto
            B    abstract
            C    implements
           D     super
           E     array
        正确答案: E
        解释:
            保留字
            （字母排序）
            abstract
            boolean break byte
            case catch char class const continue
            debugger default delete do double
            else enum export extends
            false final finally float for function
            goto
            if implements import in instanceof int interface
            long
            native new null
            package private protected public
            return
            short static super switch synchronized
            this throw throws transient true try typeof
            var void volatile
            while with
            记得看连接：http://www.runoob.com/js/js-reserved.html



*/