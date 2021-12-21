let a: string = 'str'
let aa: string = 'str'

// any类型
let b
console.log(typeof b); // 在js中打印的是undefined
b = 6
console.log(typeof b); // 在js中打印的是number
a = b // any直接赋值不会报错


// unknown类型
let c: unknown
console.log(typeof c); // 在js中打印的是undefined
c = 6
console.log(typeof c); // 在js中打印的是number
// aa = c // 会报错

c = 'ccc'
console.log(typeof c); // 在js中打印的是string
// aa = c // 也会报错，因为编译器不知道c是什么类型

/* *
解决办法：告诉编译器c的类型
  1.通过if判断
  2.通过as
  3.通过<类型>变量
*/

// 1. if
if (typeof c === 'string') {
  aa = c
}

// 2. as
aa = c as string // as string的意思是告诉编译器c是string类型
// aa = c as number // *如果不as对也会报错

// 3. <类型>
aa = <string>c