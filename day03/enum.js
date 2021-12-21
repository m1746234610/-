// enum: 枚举，
var Gender;
(function (Gender) {
    Gender[Gender["unknown"] = 0] = "unknown";
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["famale"] = 2] = "famale";
})(Gender || (Gender = {}));
var obj;
obj = {
    name: '古',
    gender: Gender.famale
};
console.log(obj.gender === Gender.famale);
var Num;
(function (Num) {
    Num[Num["one"] = 0] = "one";
    Num[Num["two"] = 1] = "two";
    Num[Num["therr"] = 2] = "therr";
    Num[Num["four"] = 3] = "four";
    Num[Num["five"] = 4] = "five";
})(Num || (Num = {}));
var x;
x = Num.two;
console.log(x);
