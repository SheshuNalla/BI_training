import { Command } from "cmdk";
import { useEffect, useState } from "react";

interface CommandPaletteProps {
  onSearch: (value: string) => void;
  onStatusFilter: (value: string) => void;
  onClear: () => void;
}

function CommandPalette({
  onSearch,
  onStatusFilter,
  onClear,
}: CommandPaletteProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((previous) => !previous);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[15vh]">
      <Command
        className="w-full max-w-lg rounded-xl border border-slate-200 bg-white p-3 shadow-xl"
        label="Employee commands"
      >
        <Command.Input
          autoFocus
          placeholder="Search commands..."
          className="w-full border-b border-slate-200 p-3 text-sm outline-none"
        />

        <Command.List className="max-h-64 overflow-y-auto py-2">
          <Command.Empty className="p-4 text-sm text-slate-500">
            No commands found.
          </Command.Empty>

          <Command.Group heading="Employee Actions">
            <Command.Item
              onSelect={() => {
                onSearch("");
                setOpen(false);
              }}
              className="cursor-pointer rounded-md p-3 text-sm aria-selected:bg-slate-100"
            >
              Show all employees
            </Command.Item>

            <Command.Item
              onSelect={() => {
                onStatusFilter("Active");
                setOpen(false);
              }}
              className="cursor-pointer rounded-md p-3 text-sm aria-selected:bg-slate-100"
            >
              Show active employees
            </Command.Item>

            <Command.Item
              onSelect={() => {
                onStatusFilter("Inactive");
                setOpen(false);
              }}
              className="cursor-pointer rounded-md p-3 text-sm aria-selected:bg-slate-100"
            >
              Show inactive employees
            </Command.Item>

            <Command.Item
              onSelect={() => {
                onClear();
                setOpen(false);
              }}
              className="cursor-pointer rounded-md p-3 text-sm aria-selected:bg-slate-100"
            >
              Clear all filters
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}

export default CommandPalette;