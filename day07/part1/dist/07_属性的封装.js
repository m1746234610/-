"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        get name() {
            console.log('get 被调用了');
            return this._name;
        }
        set name(value) {
            console.log('set 被调用了');
            this._name = value;
        }
        get age() {
            console.log('get 被调用了');
            return this._age;
        }
        set age(value) {
            console.log('set 被调用了');
            this._age = value;
        }
    }
    let per1 = new Person('古', 20);
    console.log(per1.name);
    per1.name = '钧';
    console.log(per1.name);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    let a = new B(33);
    a.test();
    class C {
        constructor(num) {
            this.num = num;
        }
    }
    let c = new C(123);
    console.log(c);
})();
