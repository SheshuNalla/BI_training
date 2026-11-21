import {describe, it, expect} from "vitest";

import {mapEmployee} from "../src/employeeMapper.js";

describe("mapEmployee", () => {
    
    it("should map employee data", () => {
        
        const employee = {
            _id: "emp101",
            firts_name: "sheshu",
            last_name: "Nalla",
            email : "ex@gmail.com",
            password: "secret223"
        };
        
        const result = mapEmployee(employee);

        expect(result).toEqual({
            id: "emp101",
            fullName: "sheshu Nalla",
            email: "ex@gmail.com"
        });
    });

    it("should not expose password", () => {

        const employee = {
            id: "emp101",
            fullName: "sheshu Nalla",
            email: "ex@gmail.com",
            password: "secret223"
        };

        const result = mapEmployee(employee);

        expect(result).not.toHaveProperty("password");
    });
});