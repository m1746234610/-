class Dog {
  // 1. 在Dog类中定义好属性
  name: string
  age: number

  // 构造函数：会在类被调用的时候执行
  constructor(name: string, age: number) {
    //* 在构造函数中的this指向的是当前创建的实例对象
    //* 可以在构造函数中向实例添加新属性

    // 2. 在构造函数中对定义好的属性进行赋值
    this.name = name
    this.age = age
  }

  bark() {
    // alert('汪汪');
    
    // 在方法中可以通过this来表示当前方法的对象
    console.log(this.name);
  }
}

let dog = new Dog('小黑', 3)
let dog2 = new Dog('小白', 2)

// console.log(dog);
// console.log(dog2);

dog.bark()
dog2.bark()