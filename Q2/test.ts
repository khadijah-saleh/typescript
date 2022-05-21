//////////////////////////////////// Union types //////////////////////////////////////////////

// types annotation

let x : number | string

x = 5
// console.log(x)

x = 'hello'
// console.log(x)


///////////////////////////////////// Function /////////////////////////////////////////

function fun(x : string):string
{
    return "hello"
}

/////////////////////////////////////////// Interfaces /////////////////////////////////////////

interface ITest
{
    print()

}

class Test implements ITest
{
    constructor()
    {

    }

    print() {
        console.log("test class")
    }
}

let t = new Test()
t.print()

////////////////////////////////////////////////// Generics ///////////////////////////////////////////////////////

function gen<T>(y:T)
{
     return "nnnnn"
}

////////////////////////////////////////////////////////// Enums ///////////////////////////////////////////////////

enum Weekdayas
{
    Saterday = 1 ,
    Sunday = 2 ,
    Monday = 3 ,
    Tusday = 4 , 
    Wednsday = 5 ,
    Thursday = 6,
    Friday =7
}





///////////////////////////////////////////////////////////// Modules /////////////////////////////////////////

// export class Employee {
//     id: number;
//     eName: string;
//     constructor(name: string, code: number) {
//         this.eName = name;
//         this.id = code;
//     }
//     displayEmployee() {
//         console.log ("Employee Id: " + this.id + ", Employee Name: " + this.eName );
//     }
// }

// import { Employee } from "./Employee";             in another file
// let empObj = new Employee("Steve Jobs", 1);

///////////////////////////////////////////////////////////////////////////////////////