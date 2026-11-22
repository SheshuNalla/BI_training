export function isValidDecimal(value: string): boolean {
  return /^\d+(\.\d{1,2})?$/.test(value);
}

export function parseDecimal(value: string): number {
  if (!isValidDecimal(value)) {
    throw new Error("Invalid decimal value");
  }

  return Number(value);
}
