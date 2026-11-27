import { employees } from "../data/employees";
import type { Employee } from "../types/employee";

interface EmployeeResponse {
  data: Employee[];
  total: number;
  limit: number;
  offset: number;
}

export function getEmployees(
  limit: number,
  offset: number
): EmployeeResponse {
  const data = employees.slice(offset, offset + limit);

  return {
    data,
    total: employees.length,
    limit,
    offset,
  };
}