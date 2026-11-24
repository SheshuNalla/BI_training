
import { useState } from "react";

import {
  EmployeeDialog,
  type Employee,
} from "@/features/employees/EmployeeDialog";

import { Button } from "./components/ui/button";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  function handleAddEmployee(employee: Employee) {
    setEmployees((previous) => [...previous, employee]);
  }

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

          <EmployeeDialog onSave={handleAddEmployee} />
        </div>

        <div className="space-y-3">
          {employees.map((employee, index) => (
            <div
              key={`${employee.email}-${index}`}
              className="rounded-lg border p-4"
            >
              <h2 className="font-semibold">{employee.name}</h2>
              <p className="text-sm text-muted-foreground">
                {employee.email}
              </p>
              <p className="text-sm">{employee.department}</p>
              <Button>Delete</Button>
            </div>
        
          ))}

          {employees.length === 0 && (
            <p className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
              No employees added yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
