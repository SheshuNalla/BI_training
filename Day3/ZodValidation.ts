import { z } from "zod";

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

console.log(result);