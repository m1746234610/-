(function () {
  class Animal {
    name: string
    constructor(name: string) {
      this.name = name
    }

    sayHello(text: string) {
      console.log('动物再叫:', text);
    }
  }

  class Dog extends Animal {
    //* 在子类中，super表示当前继承的父类

    age: number
    constructor(name: string, age: number) {
      //* 在子类中如果写构造函数，就会对父类中的构造函数进行重写，必需手动的去调用一次父类的构造函数
      super(name) // 将子类的name传递给父类
     
      this.age = age
    }


    sayHello() {
      super.sayHello('汪汪汪')
    }
  }

  let dog = new Dog('旺财', 3)
  dog.sayHello()
})()
