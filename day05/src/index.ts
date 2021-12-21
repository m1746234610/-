import { name } from './m1'

function fn(x: number, y: number): number {
  return x + y
}

const obj = { name: '第三方', age: 25 }
console.log(obj.age);
obj.age = 20
console.log(obj.age);

console.log(fn(123, 456))
console.log(fn(1235, 4567))
console.log(name);

console.log(Promise)

let fn2 = (a: number, b: number) => a + b
console.log(fn2(12, 34));
console.log(fn2(100, 300));
console.log(123123123);

