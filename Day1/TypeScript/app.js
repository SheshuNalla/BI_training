"use strict";
let age = "sheshu";
// console.log(typeof(age))
// Primitive data types 
let username = "sheshu";
let age1 = 24;
let numebr = 1234567789n;
let isLoggedin = true;
let id1 = Symbol("id"); // creates a unique value
let id2 = Symbol("id");
// console.log(id1 === id2)
// Arrays in TypeScript:
// we have to specify the type of data we are storing.
// single dimensional array:
const employees = ["ajay", "rahul", "rajesh"];
// also store elements of different datatypes.
const values = ['apple', 1, 2, 3, "banana", "tomato", 556];
// Multi dimentional array:
const mArray = [[1, 2, 3], [4, 5, 6]];
// console.log(mArray[0][0]);
// console.log(mArray[0][1]);
// console.log(mArray[0][2]);
// console.log(mArray[1][0]);
//Tuples in Typescript: data type specified each position.
const data = ["sheshu", 24, 23000];
// console.log(data);
// Enums in TypeScript: allowa us to define a collection of constant values 
// use it with the enum name
// it can generate runtime javascript
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Developer"] = "DEVELOPER";
    UserRole["Manager"] = "MANAGER";
    UserRole["Intern"] = "INTERN"; //3
})(UserRole || (UserRole = {}));
const user = UserRole.Intern;
let request;
request = "successfull";
const employee = {
    id: 101, // it wont change.
    name: "sheshu",
    email: "sheshu@gmail.com",
    phone: 9876543210 // this becomes optional
};
employee.name = "Arjun";
const student = ["sheshu", "sai", "sooraj"];
console.log(student);
function getValue(value) {
    return value;
}
;
const getNumber = getValue(100);
const getString = getValue("sheshu");
const getBoolean = getValue(true);
console.log(getNumber);
console.log(getString);
console.log(getBoolean);
