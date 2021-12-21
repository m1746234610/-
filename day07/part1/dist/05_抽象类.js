"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
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
    let dog = new Dog('旺财', 3);
    let cat = new Cat('咪咪', 1);
    dog.sayHello();
    cat.sayHello();
})();
