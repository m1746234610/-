"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑~~`);
        }
        sayHello() {
            console.log('汪汪汪~~');
        }
    }
    class Cat extends Animal {
        run() {
            console.log(`${this.name}在跑~~`);
        }
        sayHello() {
            console.log('喵喵喵~~');
        }
    }
    let dog = new Dog('虎子', 3);
    let cat = new Cat('咪咪', 2);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
    cat.run();
})();
