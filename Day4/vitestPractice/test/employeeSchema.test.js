import { describe, it, expect} from "vitest";

import { employeeSchema } from "../src/employeeSchema.js";

describe("employeeSchema",() => {

    it("should accept valid employee data", () => {

        const employee = {
            name: "sheshu Nalla",
            email: "sheshu@ex.com",
            age: 23
        };

        const result = employeeSchema.safeParse(employee);

        expect(result.success).toBe(true);
    });

    it("should reject invalid email", () => {

        const employee = {
            name: "sheshu Nalla",
            email: 11,
            age: 23
        };

        const result = employeeSchema.safeParse(employee);

        expect(result.success).toBe(false);
    });

    it("should reject employee below 18", () => {

        const employee = {
            name: "sheshu Nalla",
            email: "sheshu@ex.com",
            age: 16
        };

        const result = employeeSchema.safeParse(employee);

        expect(result.success).toBe(false);
    })
})