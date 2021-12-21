var a;
a = 10;
a = 33;
// a = 'hello'
// **如果定义变量和赋值同时进行，ts会自动给变量添加上类型
var b = 10;
var c;
c = 10;
// 在函数上定义类型
function sum(a, b) {
    // return a + b
    return 'aaaaaaa';
}
console.log(sum(1, 1));
var str = sum(1, 2);
var a2 = 10;
var a3;
a3 = 'string';
a2 = a3;
a2 *= 10;
console.log(a2);
