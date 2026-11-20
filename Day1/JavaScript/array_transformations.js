const employees = [
  { id: 1, name: "Rahul", salary: 30000, department: "IT" },
  { id: 2, name: "Priya", salary: 45000, department: "HR" },
  { id: 3, name: "Arjun", salary: 50000, department: "IT" },
  { id: 4, name: "Sneha", salary: 25000, department: "Finance" }
];
employees.push({id: 5, name: "sheshu", salary: 30000, department: "IT"})
console.log(employees)

//map() transforms every element and returns in a new array:
const names = employees.map((user) => {
    return {
        
        // name : user.name,
        salary : user.salary * 1.10
    };
})
// console.log(names);

// filter() creates a new array containing only the elements which satisfies a condition:
const _users = employees.filter(user => {
    return user.salary > 30000;
})

// console.log(_users);

// reduce() Reduce an array into a single result
const total_salary = employees.reduce((total, user) => {
    return total + user.salary * 1.10
},0);

// console.log(total_salary);

// find() return first element that satisfies the condition
const employee = employees.find(employee => {
    return employee.id === 3
});
console.log(employee);