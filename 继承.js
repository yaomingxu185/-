 /*       //每一个类型都会有一个原型： __proto__
        //Student类
        var Student = function () {
            this.name = '名字'
            this.age = '40'
            this.study = function () {
                console.log('study')
            }
        }
        //s是实例
        var s = new Student()
        //继承
        var Animal = function () {
            this.eat = function () {
                console.log('eat')
            }
        }
        var Bird = function () {
            this.fly = function () {
                console.log('fly')
            }
        }
        //继承方法一：原型继承，等号后面要的是一个对象，所以要用new给它变成对象
        //原型继承：可以赋值一个对象做为它的原型
        Bird.prototype = new Animal()
        var b = new Bird()//此时的这个b对象就有fly和eat这两个属性
        b.fly()//使用


        //继承方法二
        var Fish = function () {
            Animal.call(this)
            this.swim = function () {
                console.log('swim')
            }
        }
        var c = new Fish()
        c.eat()

        //继承方法三：es6
        class Animals {
            constructor() {

            }
            eat() {
                console.log('woaini')
            }
        }
        class Fishs extends Animals {
            swim() {

            }

        }
        var f = new Fishs()
        f.eat()



class Animal {
            constructor(type, weight) {//这是构造函数：意思是说这个函数在构造的时候就执行的，这里面的属性是每个函数都有的
                this.type = type
                this.weight = weight
            }
            breath() {//这个是Animal独有的属性
                console.log('我会呼吸')
            }
        }
        class Human extends Animal {
            constructor(name, weight) {
                super('人', weight)
                //super相当于调用了父类的构造函数，相当于把super的两个参数传入Animal里面的constructer里面
                this.name = name
            }
            study() {//这是Human独有的
                console.log('我会学习')
            }
        }
        var xiaoming = new Human('小明', 334)//这里面传入几个参数，主要看的是Human的conster()这个里面有几个参数
        //xiaoming这个对象原本属性有：type，weight，name,继承的是breath属性，自己独有的是study属性
        */