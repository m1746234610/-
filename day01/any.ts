// 声明变量的时候没有指定变量的类型，也没有给变量赋值的时候，变量就会是any类型
let aa

aa = 'string'

const bb = aa - 1

console.log(bb)

aa = 7

const bb2 = aa - 1

console.log(bb2)