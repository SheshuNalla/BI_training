import Decimal from "decimal.js";
const price = new Decimal("105.20");
const tax = new Decimal("10.21");
const total = price.plus(tax);
console.log(total.toString());
const createdAt = new Date("2026-11-19T09:30:00Z");
console.log(createdAt.toISOString());
