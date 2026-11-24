
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

type FilterBarProps = {
  search: string;
  department: string;
  onSearchChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onReset: () => void;
};

export function FilterBar({
  search,
  department,
  onSearchChange,
  onDepartmentChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row">
      <Input
        placeholder="Search employees..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        className="sm:flex-1"
      />

      <Select value={department} onValueChange={onDepartmentChange}>
        <SelectTrigger className="sm:w-48">
          <SelectValue placeholder="All departments" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All departments</SelectItem>
          <SelectItem value="Engineering">Engineering</SelectItem>
          <SelectItem value="Design">Design</SelectItem>
          <SelectItem value="HR">Human Resources</SelectItem>
          <SelectItem value="Marketing">Marketing</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}
