import { describe, it, expect} from "vitest";
import type {EmployeeDTO} from "../src/types/employee.dto.js";
import type {Employee} from "../src/types/employee.model.js";

import { toEmployee, toEmployeeDTO } from "../src/mappers/employee.mapper.js";


const mockEmployeeDTO : EmployeeDTO = {
    employee_id: "EMP101",
    first_name: "Ravi",
    last_name: "Kumar",
    salary: "45000.50",
    joining_date: "2026-11-15",
};

describe("Employee Mapper",()=> {
    it("should convert EmployeeDTO to Employee",() =>{
        const result = toEmployee(mockEmployeeDTO);

        expect(result).toEqual({
            employeeId: "EMP101",
            firstName: "Ravi",
            lastName: "Kumar",
            salary: 45000.5,
            joiningDate: new Date("2026-11-15T00:00:00.000Z"),
        });
    });

    it("should convert Employee to mockEmployeeDTO",() => {
        const employee: Employee = toEmployee(mockEmployeeDTO);
        
        const result = toEmployeeDTO(employee);
        expect(result).toEqual(mockEmployeeDTO);
    })
})