let a: number
a = 10
a = 33
// a = 'hello'


// **如果定义变量和赋值同时进行，ts会自动给变量添加上类型
let b = 10;
let c
c = 10


// 在函数上定义类型
function sum(a: number, b: number): string {
  // return a + b
  return 'aaaaaaa'
}

console.log(sum(1, 1));
let str = sum(1, 2)

let a2 = 10
let a3: any
a3 = 'string'
a2 = a3

a2 *= 10 
console.log(a2);
