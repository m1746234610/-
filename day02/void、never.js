// void: 表示没有返回值
function fn() {
    // return 15 // 如果声明返回值，就会报错
    // *可以返回undefined或null
    // return undefined 
    // return null
}
// never: 表示永远没有返回结果
function fn2() {
    // throw: 抛出异常
    throw new Error('报错了');
    // 当函数报错的时候，会停止运行代码
}
