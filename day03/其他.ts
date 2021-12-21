// &
let obj: { name: string } & { age: number }
obj = {
  name: '伏羲',
  age: 20
}

// |
let a: 1 | 2
a = 1
a = 2

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5
// let b: myType ==> let b: 1 | 2 | 3 | 4 | 5
let b: myType
