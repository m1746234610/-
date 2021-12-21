"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name);
    }
}
let dog = new Dog('小黑', 3);
let dog2 = new Dog('小白', 2);
dog.bark();
dog2.bark();
