// *定义一个对象，里面要有一个name属性，一个age属性。不能多也不能少
let a: { name: string, age?: number } // ?表示可有可无

a = {
  name: '古',
  age: 23
}
console.log(a);


// 需求(object)：创建一个对象，对象中必须包含name:'钧'，其他随意

// 修改前: 
let c: { name: '钧' }
// c = { name: '钧', age: 123 }
console.log(c);

// 修改后: proName: 属性名  string: 类型   unkown: 任意类型
let c2: { name: '钧', [proName: string]: unknown }
c2 = { name: '钧', age: 18 }
console.log(c2)


// 需求(function)：创建一个函数，限制它的参数，返回值
let fun: (a: number, b: number) => number

// 参数名可随便写
fun = function (num, num2) {
  return num + num2
}