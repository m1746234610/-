"use strict";
class Person {
    constructor() {
        this.name = '古';
        this.age = 18;
    }
    sayHello() {
        console.log(this, this.age);
    }
    static sayHello() {
        console.log(this, this.age);
    }
}
Person.age = 20;
let son1 = new Person();
son1.sayHello();
Person.sayHello();
