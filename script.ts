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


type CarType = {
    name: string,
    color: string,
    producedYear?: number
}

type BmwType = CarType & {
    extraBallon: boolean,
    peopleAmunt?: number 
}

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
const bmwCar = (bmw: BmwType) => {
    return `Name of car ${bmw.name}, color ${bmw.color}, produced in ${bmw.producedYear}, has extra ballon: ${bmw.extraBallon}, people amount on salon: ${bmw.peopleAmunt}`
}

// console.log(bmwCar({name: 'BMW', color: 'black', producedYear: 2023, extraBallon: true, peopleAmunt: 5}));


interface IPoint {
    x: number,
    y: number
}

interface I3DPoint extends IPoint {
    z: number
}

const logPoint = (point: IPoint): void => {
    const d3: I3DPoint = point as I3DPoint
}

interface ICarTask {
    name: string,
    color: string,
    isBallon: boolean,
    speed: ICarSpeedTask,
    price: ICarPriceTask
}

interface ICarSpeedTask {
    max: number,
    min?: number
}

interface ICarPriceTask {
    total: string,
    credit?: string,
    discount?: number
}



// Literal type

let car: 'mers' = 'mers'
car = "mers"
// console.log(car);


type actionType = 'show' | 'hide'
const div = document.getElementById('div') as HTMLDivElement
function logger(action: actionType): string {
    switch (action) {
        case 'show':
            return;
            break;
    
        case 'hide':
            return
            break;
    }
}