import { employeeSchema } from "./schemas/employee.schema.js";
import { toEmployee, toEmployeeDTO } from "./mappers/employee.mapper.js";

const rawEmployee = {
    employee_id: "EMP101",
    first_name: "Ravi",
    last_name: "Kumar",
    salary: "45000.50",
    joining_date: "2026-11-15",
};

const result = employeeSchema.safeParse(rawEmployee);

if(result.success){
    const employee = toEmployee(result.data);
    console.log("Domain Model")
    console.log(employee);

    const dto = toEmployeeDTO(employee);
    console.log("Converted back to DTO")
    console.log(dto);

} else{
    console.log("Invalid employee data");
    console.log(result.error.issues);
}