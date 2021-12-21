(function () {
  /* 
    以abstract开头的类是抽象类
        抽象类跟其他类区别不大，只实例对象是不能被用来创建
        抽象类生来就是被拿来继承的


    抽象类中可以添加抽象方法

  */
  abstract class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    /* 
      以abstract开头的方法是抽象方法
      抽象方法只能写在抽象类中
      抽象方法没有方法体
      所有继承的子类都必须对父类中的抽象方法进行重写
    */
    abstract sayHello(): void
  }

  class Dog extends Animal {
    sayHello() {
      console.log('汪汪汪~~');
    }
  }

  class Cat extends Animal {
    sayHello() {
      console.log('喵喵喵~~');
    }
  }

  // let ani = new Animal('旺财', 3) // 报错

  let dog = new Dog('旺财', 3)
  let cat = new Cat('咪咪', 1)

  dog.sayHello()
  cat.sayHello()


})()