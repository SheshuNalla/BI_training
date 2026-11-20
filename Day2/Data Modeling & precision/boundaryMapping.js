"use strict";
function mapEmployee(row) {
    return {
        employeeId: row.employee_id,
        firstName: row.first_name,
        lastName: row.last_name,
    };
}
;
const databaseResponse = {
    employee_id: 101,
    first_name: "sai",
    last_name: "sooraj"
};
const employee = mapEmployee(databaseResponse);
console.log(employee);
