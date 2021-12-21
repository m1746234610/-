
// function fn(a: number): number {
//   return a
// }

/* 
  泛型的作用：当函数或类的值不确定值的时候，通过一个变量来表示值的类型
    写法 函数名后面 + <任意大写英文>
*/

function fn<T>(a: T): T {
  return a
}
// 使用方法：
fn(123)// 1.直接调用，不指定泛型，TS一定程度上可以自行判断
fn<string>('name')// 2.指定类型后调用

//* 泛型可以指定多个
function fn2<T, K>(a: T, b: K): [T, K] {
  console.log(a, b)
  return [a, b]
}
fn2(123, 'name')

interface Inter {
  length: number
}

function fn3<T extends Inter>(a: T): number {
  console.log(a, a.length)
  return a.length
}
// 这里只能传带有.length方法的参数
fn3('123') // 3
// fn3(123) // 报错

// fn3({number:123}) // 报错
fn3({ length: 123 }) // 123
// fn3({ length: 'name' }) // 报错

class Name<T>{
  name: T
  constructor(name: T) {
    this.name = name
  }
}

let name1 = new Name<string>('古')