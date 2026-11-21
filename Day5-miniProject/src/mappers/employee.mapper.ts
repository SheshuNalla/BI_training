import type { EmployeeDTO } from "../types/employee.dto.js";
import type { Employee } from "../types/employee.model.js";

export function toEmployee(dto: EmployeeDTO): Employee {
    return {
        employeeId: dto.employee_id,
        firstName: dto.first_name,
        lastName: dto.last_name,
        salary: Number(dto.salary),
        joiningDate: new Date(`${dto.joining_date}T00:00:00.000Z`)
    }
};

export function toEmployeeDTO(employee: Employee): EmployeeDTO{
    return {
        employee_id: employee.employeeId,
        first_name: employee.firstName,
        last_name: employee.lastName,
        salary: employee.salary.toFixed(2),
        joining_date: employee.joiningDate.toISOString().slice(0,10)
    }
};