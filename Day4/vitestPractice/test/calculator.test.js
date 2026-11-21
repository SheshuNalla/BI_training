import { describe, it, expect } from "vitest";

import { calculate } from "../src/calculator.js";

describe("should calculate", () => {
    
    it("should add two numbers", () => {
        expect(calculate(100, 3)).toBe(300)
    });

    it("should subtract two numbers", () => {
        expect(calculate(0,100)).toBe(0)
    });

    it("checking with decimal", () => {
        expect(calculate(10.5,2)).toBe(21)
    });
});