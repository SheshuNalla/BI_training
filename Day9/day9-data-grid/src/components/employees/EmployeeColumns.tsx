import type { ColumnDef } from "@tanstack/react-table";
import type { Employee } from "../../types/employee";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Employee",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "designation",
    header: "Designation",
  },
  {
    accessorKey: "salary",
    header: "Salary",
    cell: ({ row }) => {
      const salary = row.original.salary;

      return `₹${salary.toLocaleString("en-IN")}`;
    },
  },
  {
    accessorKey: "joiningDate",
    header: "Joining Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];