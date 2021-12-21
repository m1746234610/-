(function () {
  class Person {
    /* 
      public 公共属性，属性可以在任意位置访问（修改）
      private 私有属性，属性只能在类中访问（修改）
      pratected 受保护的属性，只能在父类和子类中访问（修改）
    */
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
      this._name = name
      this._age = age
    }

    get name() {
      console.log('get 被调用了');
      return this._name
    }

    set name(value: string) {
      console.log('set 被调用了');
      this._name = value
    }

    get age() {
      console.log('get 被调用了');
      return this._age
    }

    set age(value: number) {
      console.log('set 被调用了');
      this._age = value
    }
  }
  let per1 = new Person('古', 20)
  console.log(per1.name);
  per1.name = '钧'
  console.log(per1.name);



  class A {
    protected num: number
    constructor(num: number) {
      this.num = num
    }
  }

  class B extends A {
    test() {
      console.log(this.num);
    }
  }

  let a = new B(33)
  a.test()
  // console.log(a.num);

  // class C {
  //   num: number
  //   constructor(num: number) {
  //     this.num = num
  //   }
  // } ====>

  class C {
    constructor(public num: number) {

    }
  }
  let c = new C(123)
  console.log(c);

})()