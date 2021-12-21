"use strict";
function fn(a) {
    return a;
}
fn(123);
fn('name');
function fn2(a, b) {
    console.log(a, b);
    return [a, b];
}
fn2(123, 'name');
function fn3(a) {
    console.log(a, a.length);
    return a.length;
}
fn3('123');
fn3({ length: 123 });
class Name {
    constructor(name) {
        this.name = name;
    }
}
let name1 = new Name('古');
