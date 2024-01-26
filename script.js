var fullname = 'Jobir Shukrullayev';
var x = 45;
var isMarried = false;
var res = x + fullname;
// console.log(res);
var num = null;
var a = undefined;
// console.log(num);
// array
var colors = ['red', 'green', 'blue'];
var numbers = [2, 4, 8];
// console.log(numbers);
// any
var smth = 1;
// console.log(smth)
smth = 'Hakimjon';
// console.log(smth)
smth = true;
// console.log(smth)
smth = ['black', 5, true];
// console.log(smth)
smth = {
    name: 'Jobir',
    birthYear: 1996,
    job: 'programmer'
};
// console.log(smth)
// Function
function logger(a) {
    if (typeof a === 'number')
        console.log(a.toFixed());
    else if (typeof a === 'string')
        console.log(a.toLowerCase());
}
// logger(45)
var nums = [1, 2, 3, 4, 5, 6];
nums.map(function (num) { return num.toFixed(); });
/*
interface ICar {
    name: string,
    color: string,
    producedYear?: number
}

interface IBmw extends ICar {
    extraBallon: boolean,
    peopleAmunt?: number
}

const logCar = (car: ICar) => {
    return `Name of car ${car.name}, color ${car.color}, produced in ${car.producedYear}`
}
 */
var bmwCar = function (bmw) {
    return "Name of car ".concat(bmw.name, ", color ").concat(bmw.color, ", produced in ").concat(bmw.producedYear, ", has extra ballon: ").concat(bmw.extraBallon, ", people amount on salon: ").concat(bmw.peopleAmunt);
};
var logPoint = function (point) {
    var d3 = point;
};
// Literal type
var car = 'mers';
car = "mers";
var div = document.getElementById('div');
function actionLogger(action) {
    switch (action) {
        case 'show':
            return true;
        case 'hide':
            return false;
    }
}
// ENUM
var Dictionary;
(function (Dictionary) {
    Dictionary[Dictionary["uz"] = 0] = "uz";
    Dictionary[Dictionary["ru"] = 1] = "ru";
    Dictionary[Dictionary["en"] = 2] = "en";
})(Dictionary || (Dictionary = {}));
var uzbIndex = Dictionary.uz;
var uzb = Dictionary[uzbIndex];
console.log(uzb);
