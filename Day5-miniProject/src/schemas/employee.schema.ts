
import { z } from "zod";
import type {EmployeeDTO} from "../types/employee.dto.js";

const salarySchema = z
  .string()
  .regex(
    /^\d+(\.\d{1,2})?$/,
    "Salary must be a valid decimal with up to 2 decimal places"
  )
  .refine(
    (salary) => Number(salary) > 0,
    "Salary must be greater than zero"
  );

const joiningDateSchema = z
  .string()
  .regex(
    /^\d{4}-\d{2}-\d{2}$/,
    "Joining date must follow YYYY-MM-DD format"
  )
  
.refine((date) => {
  const parts = date.split("-");

  if (parts.length !== 3) {
    return false;
  }

  const year = Number(parts[0]);
  const month = Number(parts[1]);
  const day = Number(parts[2]);

  const parsedDate = new Date(
    Date.UTC(year, month - 1, day)
  );

  return (
    parsedDate.getUTCFullYear() === year &&
    parsedDate.getUTCMonth() === month - 1 &&
    parsedDate.getUTCDate() === day
  );
}, "Invalid calendar date");

export const employeeSchema = z.object({
  employee_id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  salary: salarySchema,
  joining_date: joiningDateSchema,
})satisfies z.ZodType<EmployeeDTO>;
