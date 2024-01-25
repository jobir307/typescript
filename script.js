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
// producedYear - required
// producedYear? - not required
var logCar = function (car) {
    return "Name of car ".concat(car.name, ", color ").concat(car.color, ", produced in ").concat(car.producedYear);
};
console.log(logCar({ name: 'BMW', color: 'black', producedYear: 2020 }));
