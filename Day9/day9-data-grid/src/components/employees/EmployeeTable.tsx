import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useState } from "react";
import type {ColumnFiltersState, SortingState } from "@tanstack/react-table";

import { employees } from "../../data/employees";
import { columns } from "./EmployeeColumns";
function EmployeeTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
  data: employees,
  columns,
  state: {
    sorting,
    globalFilter,
    columnFilters
  },
  onSortingChange: setSorting,
  onGlobalFilterChange: setGlobalFilter,
  onColumnFiltersChange: setColumnFilters,


  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
});
  

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

      <div className="overflow-x-auto">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          {/* Global Search */}
          <input
            type="text"
            placeholder="Search employees..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 sm:max-w-sm"
          />

          <div className="flex flex-wrap gap-3">

            {/* Department Filter */}
            <select
              value={
                (table.getColumn("department")?.getFilterValue() as string) ?? "all"
              }
              onChange={(e) =>
                table
                  .getColumn("department")
                  ?.setFilterValue(
                    e.target.value === "all" ? undefined : e.target.value
                  )
              }
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm"
            >
              <option value="all">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="HR">HR</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
            </select>

            {/* Status Filter */}
            <select
              value={
                (table.getColumn("status")?.getFilterValue() as string) ?? "all"
              }
              onChange={(e) =>
                table
                  .getColumn("status")
                  ?.setFilterValue(
                    e.target.value === "all" ? undefined : e.target.value
                  )
              }
              className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm"
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="On Leave">On Leave</option>
            </select>

            {/* Clear Filters */}
            <button
              type="button"
              onClick={() => {
                setGlobalFilter("");
                table.resetColumnFilters();
              }}
              className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
            >
              Clear Filters
            </button>

          </div>
        </div>
        <table className="w-full text-left text-sm">

          <thead className="bg-slate-50 text-slate-600">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-4 font-semibold"
                  >
                    {header.isPlaceholder ? null : (
                      <button
                        type="button"
                        onClick={header.column.getToggleSortingHandler()}
                        className="flex items-center gap-2 hover:text-slate-900"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                        {header.column.getIsSorted() === "asc" && "↑"}

                        {header.column.getIsSorted() === "desc" && "↓"}

                        {!header.column.getIsSorted() && "↕"}
                      </button>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-slate-100">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-12 text-center text-slate-500"
                >
                  No employees found. Try changing your search or filters.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="transition-colors hover:bg-slate-50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 text-slate-700"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default EmployeeTable;