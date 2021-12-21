// 声明变量的时候没有指定变量的类型，也没有给变量赋值的时候，变量就会是any类型
var aa;
aa = 'string';
var bb = aa - 1;
console.log(bb);
aa = 7;
var bb2 = aa - 1;
console.log(bb2);
