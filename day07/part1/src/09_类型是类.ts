class Fn {
  num: number
  constructor(num: number) {
    this.num = num
  }

}

let obj: Fn

//* obj = 123 //报错
obj = new Fn(123)