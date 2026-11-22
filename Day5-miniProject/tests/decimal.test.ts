import { describe, it, expect } from "vitest";

import {
  isValidDecimal,
  parseDecimal,
} from "../src/utils/decimal.js";

describe("Decimal Utility", () => {
  describe("isValidDecimal", () => {
    it("should accept valid decimal values", () => {
      expect(isValidDecimal("45000.50")).toBe(true);
      expect(isValidDecimal("100")).toBe(true);
      expect(isValidDecimal("99.9")).toBe(true);
    });

    it("should reject invalid decimal values", () => {
      expect(isValidDecimal("abc")).toBe(false);
      expect(isValidDecimal("99.999")).toBe(false);
      expect(isValidDecimal("-500")).toBe(false);
      expect(isValidDecimal("")).toBe(false);
      expect(isValidDecimal("10.")).toBe(false);
    });
  });

  describe("parseDecimal", () => {
    it("should convert valid decimal strings into numbers", () => {
      expect(parseDecimal("45000.50")).toBe(45000.5);
      expect(parseDecimal("100")).toBe(100);
      expect(parseDecimal("99.9")).toBe(99.9);
    });

    it("should throw an error for invalid decimal values", () => {
      expect(() => parseDecimal("abc")).toThrow(
        "Invalid decimal value"
      );

      expect(() => parseDecimal("99.999")).toThrow(
        "Invalid decimal value"
      );
    });
  });
});
