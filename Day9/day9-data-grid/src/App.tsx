import EmployeeTable from "./components/employees/EmployeeTable";
import EmployeeCharts from "./components/dashboard/EmployeeCharts"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">

      <div className="mx-auto max-w-7xl space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Employee Management
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage and monitor your organization's employees.
          </p>
        </div>

        <EmployeeCharts/>
        <EmployeeTable />

      </div>

    </div>
  );
}

export default App;