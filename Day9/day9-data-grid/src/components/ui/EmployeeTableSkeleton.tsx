function EmployeeTableSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      {/* Table header skeleton */}
      <div className="flex gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-5 flex-1 rounded bg-slate-200"
          />
        ))}
      </div>

      {/* Table rows skeleton */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex gap-4">
          {Array.from({ length: 6 }).map((_, cellIndex) => (
            <div
              key={cellIndex}
              className="h-10 flex-1 rounded bg-slate-200"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default EmployeeTableSkeleton;