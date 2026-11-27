import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { employees } from "../../data/employees";

function EmployeeCharts() {
  const departmentData = Object.entries(
    employees.reduce<Record<string, number>>((result, employee) => {
      result[employee.department] =
        (result[employee.department] || 0) + 1;

      return result;
    }, {})
  ).map(([department, count]) => ({
    department,
    employees: count,
  }));

  const statusData = Object.entries(
    employees.reduce<Record<string, number>>((result, employee) => {
      result[employee.status] =
        (result[employee.status] || 0) + 1;

      return result;
    }, {})
  ).map(([status, count]) => ({
    status,
    count,
  }));

  const colors = ["#2563eb", "#16a34a", "#f59e0b"];

  return (
    <div className="grid gap-6 lg:grid-cols-2">

      {/* Department Bar Chart */}
      <div className="rounded-xl border bg-white p-5">
        <h2 className="mb-4 font-semibold text-slate-800">
          Employees by Department
        </h2>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={departmentData}>
            <XAxis dataKey="department" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar
              dataKey="employees"
              fill="#2563eb"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Status Pie Chart */}
      <div className="rounded-xl border bg-white p-5">
        <h2 className="mb-4 font-semibold text-slate-800">
          Employee Status
        </h2>

        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={statusData}
              dataKey="count"
              nameKey="status"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {statusData.map((entry, index) => (
                <Cell
                  key={entry.status}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default EmployeeCharts;