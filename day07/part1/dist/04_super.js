"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello(text) {
            console.log('动物再叫:', text);
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        sayHello() {
            super.sayHello('汪汪汪');
        }
    }
    let dog = new Dog('旺财', 3);
    dog.sayHello();
})();
