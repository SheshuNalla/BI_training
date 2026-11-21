import { z } from "zod";
// object schema:
const EmployeeSchema = z.object({
    name : z.string(),
    age : z.number(),
    email : z.string()
});

const employee = {
    name: "sheshu",
    age: 23,
    email : "sheshu@gmail.com"
};

const result = EmployeeSchema.safeParse(employee);

// console.log(result);

// array schema:
const employee_array = z.array(z.string());

const emarray = ["sheshu", "rahul", "sai"];

const res = employee_array.safeParse(emarray);
console.log(res);
if (!res.success){
    console.log(res.error.issues);
}

