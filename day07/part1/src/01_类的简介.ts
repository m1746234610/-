class Person {
  /* 
    直接定义的实例属性，通过实例对象访问
    let per = new Person()
    per.name

    通过static定义的属性是类属性(静态属性)，不需要实例化就可以访问的属性
    Person.age

    readonly开头的属性是只读属性，无法修改
  */

  readonly name = '古'
  age = 18

  static readonly age = 20


  // 实例方法
  sayHello() {
    console.log(this, this.age);
  }
  
  // 类方法
  static sayHello() {
    console.log(this, this.age);
  }

  constructor() {

  }
}

let son1 = new Person()
// console.log(son1)
// // 实例属性
// console.log(son1.name, son1.age)
// // 类属性
// console.log(Person.age);

// son1.name = '钧'
// console.log(son1.name);

son1.sayHello()

Person.sayHello()

