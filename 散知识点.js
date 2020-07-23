// /*动画调用
// animation: myMove 4s linear 2s infinite alternate ;
// 调用动画的规则名称 动画持续的时间（可选） 动画的过渡类型 延迟时间 
// 动画播放次数（默认1次，也可以成数字或者infinite则是无限循环） 是否停留在结束状态 forwards 反向运动 alternate 

// content:" ";
// /*
// :before 和:after必须要有content。哪怕里面的内容为空
// */

// //load全部的东西加载完之后
//         window.addEventListener('load',function(){
//             var p2 = document.getElementById('p')
//             console.log(p2)
//         })





//                 //localStorage是本地永久存储,不支持对象的存储，必须要用JSON.stringfy

//         var a = document.getElementsByClassName('a')
//         for (var i = 0; i < a.length; i++) {
//             a[i].addEventListener('click', function () {
//                 // a[i].style.backgroundColor='red'//这么写是错误的，这里的i已经是for循环的最后一个值了，这里应该用this
//                 this.style.backgroundColor = 'red'
//                 //这里的this指的是使用它的一个对象 
//             })
//         }

//         var obj = {
//             f: function () {
//                 console.log(this)
//                 //这里的this指的是obj这个对象本身
//                 setTimeout(function () {
//                     console.log(this)
//                     //这里的this指的是window，因为setTimout是window的方法
//                 }, 1000)
//             }
//         }



//         本地打开的HTML文件不能设置cookie，必须是服务器打开的才能设置
//         cookie不能删除，
//         setCookie('name',1)
//         getCookie('name')
//         删除方法就只能是设置过期，设置过期时间（-1）
//         */