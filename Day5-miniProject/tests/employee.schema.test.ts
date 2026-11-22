import { describe, it, expect } from "vitest";
import { employeeSchema } from "../src/schemas/employee.schema.js";

const validEmployee = {
  employee_id: "EMP101",
  first_name: "Ravi",
  last_name: "Kumar",
  salary: "45000.50",
  joining_date: "2026-11-15",
};

describe("Employee Schema", () => {
  it("should accept valid employee data", () => {
    const result = employeeSchema.safeParse(validEmployee);

    expect(result.success).toBe(true);
  });

  it("should reject invalid salary format", () => {
  const employee = {
    ...validEmployee,
    salary: "abc",
  };

  const result = employeeSchema.safeParse(employee);

  expect(result.success).toBe(false);
  });
  it("should reject salary with more than 2 decimal places",() => {
    const employee = {
        ...validEmployee,
        salary : "45000.567",
    };
    const result = employeeSchema.safeParse(employee);
    expect(result.success).toBe(false);
  });

  it("should reject zero salary", () => {
  const employee = {
    ...validEmployee,
    salary: "0",
  };

  const result = employeeSchema.safeParse(employee);

  expect(result.success).toBe(false);
    });

    it("should reject negative salary", () => {
    const employee = {
        ...validEmployee,
        salary: "-5000",
    };

    const result = employeeSchema.safeParse(employee);

    expect(result.success).toBe(false);
    });


it("should reject invalid date format", () => {
  const employee = {
    ...validEmployee,
    joining_date: "15-11-2026",
  };

  const result = employeeSchema.safeParse(employee);

  expect(result.success).toBe(false);
});

it("should reject impossible calendar dates", () => {
  const employee = {
    ...validEmployee,
    joining_date: "2026-02-30",
  };

  const result = employeeSchema.safeParse(employee);

  expect(result.success).toBe(false);
});

it("should reject empty employee names", () => {
  const employee = {
    ...validEmployee,
    first_name: "",
  };

  const result = employeeSchema.safeParse(employee);

  expect(result.success).toBe(false);
});

it("should accept salary without decimal places", () => {
  const employee = {
    ...validEmployee,
    salary: "45000",
  };

  const result = employeeSchema.safeParse(employee);

  expect(result.success).toBe(true);
});


});