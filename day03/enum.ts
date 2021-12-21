// enum: 枚举，
enum Gender {
  unknown = 0,
  male = 1,
  famale = 2
}


let obj: { name: string, gender: 0 | 1 | 2, [proName: string]: unknown }
obj = {
  name: '古',
  gender: Gender.famale
}

console.log(obj.gender === Gender.famale);



enum Num {
  one,
  two,
  therr,
  four,
  five
}

let x: number

x = Num.two
console.log(x);
