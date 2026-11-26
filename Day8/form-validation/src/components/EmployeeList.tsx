import { toast } from "sonner";
import {
  useEmployees,
  useDeleteEmployee,
} from "../hooks/useEmployees";
import type { Employee } from "../services/employeeService";

interface EmployeeListProps {
  onEdit: (employee: Employee) => void;
}

function EmployeeList({ onEdit }: EmployeeListProps) {
  const {
    data: employees,
    isPending,
    isError,
    error,
    isFetching,
  } = useEmployees();

  const deleteMutation = useDeleteEmployee();

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) return;

    try {
      await deleteMutation.mutateAsync(id);
      toast.success("Employee deleted successfully!");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to delete employee."
      );
    }
  };

  if (isPending) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-500">Loading employees...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="rounded-2xl border border-red-200 bg-white p-6">
        <p className="text-sm text-red-600">
          Failed to load employees: {error.message}
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Employees
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Manage your registered employees.
          </p>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
          {employees.length} Total
        </span>
      </div>

      {isFetching && (
        <p className="mb-3 text-xs text-slate-400">
          Refreshing employee data...
        </p>
      )}

      {employees.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
          <p className="font-medium text-slate-700">
            No employees found
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Register your first employee using the form.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {employees.map((employee) => (
            <article
              key={employee.id}
              className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:shadow-sm"
            >
              <div className="mb-3">
                <h3 className="font-semibold text-slate-800">
                  {employee.name}
                </h3>
                <p className="mt-1 break-all text-sm text-slate-500">
                  {employee.email}
                </p>
              </div>

              <div className="space-y-1 text-sm text-slate-600">
                <p>Phone: {employee.phone}</p>
                <p>
                  Department:{" "}
                  <span className="font-medium text-slate-700">
                    {employee.department}
                  </span>
                </p>
              </div>

              <div className="mt-4 flex gap-2 border-t border-slate-100 pt-3">
                <button
                  type="button"
                  onClick={() => onEdit(employee)}
                  className="flex-1 rounded-lg border border-blue-200 px-3 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50"
                >
                  Edit
                </button>

                <button
                  type="button"
                  disabled={deleteMutation.isPending}
                  onClick={() => handleDelete(employee.id)}
                  className="flex-1 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:opacity-50"
                >
                  {deleteMutation.isPending ? "Deleting..." : "Delete"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default EmployeeList;
