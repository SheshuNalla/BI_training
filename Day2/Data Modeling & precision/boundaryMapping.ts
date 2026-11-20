type EmployeeRow = {
    employee_id : number,
    first_name : string,
    last_name : string
};

type Employee = {
    employeeId : number,
    firstName: string,
    lastName: string
};

function mapEmployee(row: EmployeeRow): Employee {
  return {
    employeeId: row.employee_id,
    firstName: row.first_name,
    lastName: row.last_name,
  };
};

const databaseResponse = {
    employee_id : 101,
    first_name : "sai",
    last_name : "sooraj"
};

const employee = mapEmployee(databaseResponse);

console.log(employee, databaseResponse);