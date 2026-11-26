export interface Employee {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  department: string;
  designation: string;
  salary: number;
  joiningDate: string;
  status: "Active" | "Inactive" | "On Leave";
}