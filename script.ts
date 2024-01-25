const fullname: string = 'Jobir Shukrullayev'
const x: number = 45
const isMarried: boolean = false
const res: string = x + fullname
// console.log(res);


const num: null = null
const a: undefined = undefined
// console.log(num);


// array
const colors: string[] = ['red', 'green', 'blue']
const numbers: number[] = [2, 4, 8]
// console.log(numbers);


// any
let smth: any = 1
// console.log(smth)
smth = 'Hakimjon'
// console.log(smth)
smth = true
// console.log(smth)
smth = ['black', 5, true]
// console.log(smth)
smth = {
    name: 'Jobir',
    birthYear: 1996,
    job: 'programmer'
}
// console.log(smth)


// Function

function logger(a: number | string): void {
    if (typeof a === 'number')
        console.log(a.toFixed())
    else if (typeof a === 'string')
        console.log(a.toLowerCase())
}
// logger(45)


const nums: number[] = [1, 2, 3, 4, 5, 6]
nums.map((num: number) => num.toFixed())

// producedYear - required
// producedYear? - not required
const logCar = (car: {name: string, color: string, producedYear?: number}) => {
    return `Name of car ${car.name}, color ${car.color}, produced in ${car.producedYear}`
}
console.log(logCar({name: 'BMW', color: 'black', producedYear: 2020}));
