//////////////////////////////////// Union types //////////////////////////////////////////////
// types annotation
var x;
x = 5;
// console.log(x)
x = 'hello';
// console.log(x)
///////////////////////////////////// Function /////////////////////////////////////////
function fun(x) {
    return "hello";
}
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.print = function () {
        console.log("test class");
    };
    return Test;
}());
var t = new Test();
t.print();
////////////////////////////////////////////////// Generics ///////////////////////////////////////////////////////
function gen(y) {
    return "nnnnn";
}
////////////////////////////////////////////////////////// Enums ///////////////////////////////////////////////////
var Weekdayas;
(function (Weekdayas) {
    Weekdayas[Weekdayas["Saterday"] = 1] = "Saterday";
    Weekdayas[Weekdayas["Sunday"] = 2] = "Sunday";
    Weekdayas[Weekdayas["Monday"] = 3] = "Monday";
    Weekdayas[Weekdayas["Tusday"] = 4] = "Tusday";
    Weekdayas[Weekdayas["Wednsday"] = 5] = "Wednsday";
    Weekdayas[Weekdayas["Thursday"] = 6] = "Thursday";
    Weekdayas[Weekdayas["Friday"] = 7] = "Friday";
})(Weekdayas || (Weekdayas = {}));
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
