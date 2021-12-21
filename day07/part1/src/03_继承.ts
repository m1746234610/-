(function () {

  // 1. 定义一个动物类
  class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHello() {
      console.log('动物在叫');
    }
  }

  /* 
    class Dog extends Animal
      - 此时Animal为父类，Dog为子类
      - 使用继承后，子类会继承父类*所有的方法和属性*
      - 将子类中共有的代码写入父类中，这样只需要写一次就可以够了
      - 子类中也可以添加一些父类中没有的方法
      - 如果子类中添加和父类中相同的方法，子类方法会覆盖父类的方法
          这种子类覆盖父类方法的形式，称为"重写"
  */


  // 2. 让Dog类继承动物类
  class Dog extends Animal {
    run() {
      console.log(`${this.name}在跑~~`);
    }

    sayHello() {
      console.log('汪汪汪~~');
    }
  }

  // 3. 让Cat类继承动物类里
  class Cat extends Animal {
    run() {
      console.log(`${this.name}在跑~~`);
    }

    sayHello() {
      console.log('喵喵喵~~');
    }
  }


  let dog = new Dog('虎子', 3)
  let cat = new Cat('咪咪', 2)

  console.log(dog);
  dog.sayHello()
  dog.run()

  console.log(cat);
  cat.sayHello()
  cat.run()
})()

