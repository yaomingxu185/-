/*
183  以下为一段浏览器中可运行的Javascript 代码，则运行该段Javascript代码的页面弹出框中显示的结果是：（）
        var obj = {"key":"1","value":"2"};
        var newObj = obj;
        newObj.value += obj.key;
        alert(obj.value);
            A    2
            B    12
            C    3
             D   21
        正确答案: D 
        解释：
            newObj.value = 2;
            obj.key = '1'; newObj.value += obj.key; 相当于 newObj.value = newObj.value + obj.key;  所以
            '2' + 1
            在javascript中自动转化为字符串拼接操作得到
            '21'
            obj是JS对象，对象由键和值组成，操作以地址进行。
            var newObj = obj相当于两个对象指向同一个地址，修改其中任何一个，另外一个也会受到影响。
184   如何规避javascript多人开发函数重名问题?
            A    可以通过命名规范，比如根据不同的开发人员实现的功能，在函数名加前缀
            B    每个开发人员都把自己的函数封装到类中，然后调用的时候即使函数名相同，但是因为是要类.函数名来调用，所以也减少了重复的可能性
            C    以上答案都不正确
        正确答案: A B
        解释：
            首先是通过命名规范，比如根据不同的开发人员实现的功能，在函数名加前缀，虽然函数名看起来复杂，发布的时候还是可以替换，从而优化。
            还有一种办法是，每个开发人员都把自己的函数封装到类中，然后调用的时候即使函数名相同，但是因为是要类.函数名来调用，所以也减少了重复的可能性
185  页面有一个按钮button id为button1，通过原生的js如何禁用？（）
            A    document.getElementById(“button1”).setAttribute(“Readolny”,true);
            B    document.getElementById(“button1”).setAttribute(“disabled”,”true”);
            C    document.getElementById(“button1”).Readolny=true;
            D    document.getElementById(“button1”).disabled=true;
        正确答案: B D
        解释：
            <input id="btnShow" type="button" value="点击" class="btn"> 上面是一段按钮的html代码 如果要用原生的js来禁用这个按钮 
            可以用这样： document.getElementByIdx_x_x("btnShow").disabled=true;（这样就把按钮禁用了） 如果要重新开启按钮，
            则可以让disabled=false;即可 那么在jquery下面要如何设置呢？其实也很简单 利用jquery的attr的方法即可
            $("#btnShow").attr({"disabled":"disabled"}); 如要让按钮恢复可用，可以采用removeAttr方法把disabled属性删除即可。
            $("#btnShow").removeAttr("disabled");

















































*/