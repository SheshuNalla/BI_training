import Decimal from "decimal.js";

const price = new Decimal("105.20");

const tax = new Decimal("10.21");

const total = price.plus(tax);

console.log(total.toString());

