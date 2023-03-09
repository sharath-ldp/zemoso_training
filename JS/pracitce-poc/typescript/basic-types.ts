//Basic Types
let x :number = 10
let company :string = 'ZEMOSO'
let isMorning :boolean = true
let y :any = 'Hello'

let ids : number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1,true,'sharath']

//Tuple
let person: [number,string,boolean] = [1,'Brad',true]

let employee: [number,string][]

employee = [
    [1,'sharath'],
    [2,'sriVyshnavi'],
    [3,'Lavanya'],
] 

//Union
let pid: string | number
pid = 22

//Enum
enum Direction1 {
    Up=5,
    Down,
    Left,
    Right,
}

console.log(Direction1.Up)

//Objects
type User = {
    id: number,
    name:string
}
const user:User = {
    id:1,
    name:"sharath",
}

//Functions
function addNum(x:number , y:number):number{
    return x + y
}
addNum(3,5)

function log(message : string|number):void{
    console.log(message)
}

//Interface
interface UserInterface {
    readonly id:number,
    name:string,
    age?:number
}

const user1:UserInterface = {
    id:1,
    name:"sharath"
}
//here age is optional
//and user1.id is error as it is read only

//Generics
function getArray<T>(items: T[]):T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['1','2','3','4'])

