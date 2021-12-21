import { uname } from './m'
console.log('adfasdfsd')
// 零零零零
let a: number
let b = 15
let cc = 20
console.log(cc);
console.log(uname);

function fn(a: number, b: number) {
  return a + b
}

// 给this确定指定的对象window
function fn2(this: Window) {
  alert(this)
}

let box = document.getElementById('box')
if (box !== null) {
  box.addEventListener('click', function () {
    alert('hello')
  })
}

// 表示box如果有值，就执行这个方法，如果没有，就不执行(es2020写法)
box?.addEventListener('click', function () {
  alert('hello')
})
