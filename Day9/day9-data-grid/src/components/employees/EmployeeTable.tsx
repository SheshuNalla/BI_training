import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import {
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
} from "lucide-react";


import EmptyState from "../ui/EmptyState";
import CommandPalette from "../ui/CommandPalette";
import type {ColumnFiltersState, SortingState } from "@tanstack/react-table";
import type { Employee } from "../../types/employee";
import { columns } from "./EmployeeColumns";
import { useEffect, useState } from "react";
import { getEmployees } from "../../lib/employeeApi";
function EmployeeTable() {

  const [data, setData] = useState<Employee[]>([]);
  const [total, setTotal] = useState(0);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  useEffect(() => {
    const limit = pagination.pageSize;
    const offset = pagination.pageIndex * limit;

    const response = getEmployees(limit, offset);

    setData(response.data);
    setTotal(response.total);
  }, [pagination]);

  const table = useReactTable({
  data,
  columns,

  state: {
    sorting,
    globalFilter,
    columnFilters,
    pagination,
  },

  onSortingChange: setSorting,
  onGlobalFilterChange: setGlobalFilter,
  onColumnFiltersChange: setColumnFilters,
  onPaginationChange: setPagination,

  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),

  manualPagination: true,
  pageCount: Math.ceil(total / pagination.pageSize),
});
  

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

      <CommandPalette
        onSearch={(value) => {
          setGlobalFilter(value);
        }}
        onStatusFilter={(value) => {
          table.getColumn("status")?.setFilterValue(value);
        }}
        onClear={() => {
          setGlobalFilter("");
          table.resetColumnFilters();
        }}
      />

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

                        {header.column.getIsSorted() === "asc" && (
                          <ArrowUp size={14} />
                        )}

                        {header.column.getIsSorted() === "desc" && (
                          <ArrowDown size={14} />
                        )}

                        {!header.column.getIsSorted() && (
                          <ArrowUpDown size={14} className="text-slate-400" />
                        )}
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
                <td colSpan={columns.length}>
                  <EmptyState title="No employees found" description="Try changing your search or filters"/>
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
        <div className="flex flex-col gap-4 border-t border-slate-200 bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Records Information */}
          <p className="text-sm text-slate-500">
            Showing{" "}
            {total === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1}
            {" "}to{" "}
            {Math.min(
              (pagination.pageIndex + 1) * pagination.pageSize,
              total
            )}
            {" "}of {total} employees
          </p>

          <div className="flex flex-wrap items-center gap-3">

            {/* Page Size */}
            <select
              value={pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
            >
              <option value={5}>5 per page</option>
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
            </select>

            {/* Previous Button */}
            <button
              type="button"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {/* Page Information */}
            <span className="text-sm text-slate-600">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}

export default EmployeeTable;