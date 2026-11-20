let age = "sheshu";

// console.log(typeof(age))

// Primitive data types 

let username: string | null = "sheshu";

let age1: number = 24;

let numebr : bigint = 1234567789n;

let isLoggedin: boolean = true;

let id1: symbol = Symbol("id") // creates a unique value
let id2: symbol = Symbol("id") 
// console.log(id1 === id2)


// Arrays in TypeScript:
// we have to specify the type of data we are storing.
// single dimensional array:
const employees: string[] = ["ajay", "rahul", "rajesh"]; 

// also store elements of different datatypes.
const values: (string | number)[] = ['apple',1,2,3,"banana", "tomato", 556];

// Multi dimentional array:
const mArray: number[][]  = [[1,2,3],[4,5,6]];
// console.log(mArray[0][0]);
// console.log(mArray[0][1]);
// console.log(mArray[0][2]);
// console.log(mArray[1][0]);

//Tuples in Typescript: data type specified each position.
const data: [string, number, number] = ["sheshu", 24, 23000];
// console.log(data);


// Enums in TypeScript: allowa us to define a collection of constant values 
// use it with the enum name
// it can generate runtime javascript
enum UserRole {
    Admin = "ADMIN",      //0
    Developer = "DEVELOPER",      //1
    Manager = "MANAGER",        //2
    Intern = "INTERN"     //3
}

const user : UserRole = UserRole.Intern

// console.log(user);

//String Literals: it allows us to use strings directly.
type Status = "pending" | "successfull" | "unsuccessfull";
let request: Status;
request = "successfull";
// console.log(request);

// Interface: defines structure or shape of an object.
interface Employee {
    readonly id: number,  // readonly used to prevent reassignment.
    name: string,
    email: string,
    phone?: number  //  '?' idicates optional property.
}

const employee : Employee = {
    id: 101,             // it wont change.
    name: "sheshu",
    email: "sheshu@gmail.com",
    phone: 9876543210     // this becomes optional
};

employee.name = "Arjun";
// console.log(employee)

// Type Alias: Same as interface but not limited to objects i.e it can represent many different kinds of types.
// type Employee = {
//     id: number,
//     name: string,
//     phone: number
// }
type Student = string[];
const student : Student = ["sheshu", "sai", "sooraj"];
console.log(student);

// Generic type: <T> is generic type parameter.
function getValue <T>(value: T): T{
    return value;
};

const getNumber = getValue(100);
const getString = getValue("sheshu");
const getBoolean = getValue(true);
 console.log(getNumber);
 console.log(getString);
 console.log(getBoolean);