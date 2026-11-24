import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

import {
  EmployeeDialog,
  type Employee,
} from "@/features/employees/EmployeeDialog";

import { FilterBar } from "@/features/employees/FilterBar";

function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const {can} = useAuth()

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");

  function handleAddEmployee(employee: Employee) {
    setEmployees((previous) => [...previous, employee]);
  }

  function handleReset() {
    setSearch("");
    setDepartment("all");
  }

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "all" || employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-3xl space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              Employee Management
            </h1>

            <p className="text-sm text-muted-foreground">
              Manage your team members.
            </p>
          </div>
          {can("employee:create") && (
            <EmployeeDialog onSave={handleAddEmployee} />
          )}
          
        </div>

        <FilterBar
          search={search}
          department={department}
          onSearchChange={setSearch}
          onDepartmentChange={setDepartment}
          onReset={handleReset}
        />

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Showing {filteredEmployees.length} of {employees.length} employees
          </p>

          {filteredEmployees.map((employee, index) => (
            <div
              key={`${employee.email}-${index}`}
              className="rounded-lg border p-4"
            >
              <h2 className="font-semibold">{employee.name}</h2>

              <p className="text-sm text-muted-foreground">
                {employee.email}
              </p>

              <p className="text-sm">{employee.department}</p>
            </div>
          ))}

          {filteredEmployees.length === 0 && (
            <p className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
              No matching employees found.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default EmployeesPage;
