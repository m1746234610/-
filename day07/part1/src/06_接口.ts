(function () {

  // 通过*类型别名*描述一个对象类型
  type myObj = {
    name: string,
    age: number,
    [Name: string]: unknown // 类型名字: 类型名字的属性  :  值的类型
  }

  let obj: myObj = {
    name: '古',
    age: 18,
    sex: '男'
  }

  /* 
    接口用来定义一个类的结构，用来定义一个类里有哪些属性和方法
      也能当成类型声明去使用
  */
  interface myObj2 {
    name: string,
    age: number,
  }

  /* 
    接口在定义类的时候可以限制类的结构
      接口里的属性不能有实际的值
      接口只定义对象的结构，不考虑实际的值
      接口里的方法都是抽象方法
  */
  interface myHel {
    name: string,
    sayHello(): void
  }

  class myHe implements myHel {
    name: string
    constructor(name: string) {
      this.name = name
    }

    sayHello() {
      console.log(123);
    }

    say(){
      console.log(123);
    }

  }


})()