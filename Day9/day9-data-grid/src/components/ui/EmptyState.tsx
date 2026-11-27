import { SearchX } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

function EmptyState({
  title = "No employees found",
  description = "Try changing your search or filters.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
      <SearchX size={36} className="text-slate-400" />

      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

      <p className="max-w-sm text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;