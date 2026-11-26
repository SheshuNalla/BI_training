import { useState } from "react";

import RegistrationForm from "./components/RegistrationForm";
import EmployeeList from "./components/EmployeeList";
import type { Employee } from "./services/employeeService";

function App() {
  const [selectedEmployee, setSelectedEmployee] =
    useState<Employee | null>(null);

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSaved = () => {
    setSelectedEmployee(null);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Employee Management
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage employee registrations and information.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[400px_minmax(0,1fr)]">
          <RegistrationForm
            selectedEmployee={selectedEmployee}
            onSaved={handleSaved}
          />

          <EmployeeList onEdit={handleEdit} />
        </div>
      </div>
    </main>
  );
}

export default App;
