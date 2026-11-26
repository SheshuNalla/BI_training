import axiosInstance from "../api/axiosInstance";

export interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
}

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await axiosInstance.get<Employee[]>("/employees");

  return response.data;
};

export type CreateEmployeeInput = Omit<Employee, "id">;

export const createEmployee = async (
  employee: CreateEmployeeInput
): Promise<Employee> => {
  const response = await axiosInstance.post<Employee>(
    "/employees",
    employee
  );

  return response.data;
};

export const updateEmployee = async (
  id: string,
  employee: CreateEmployeeInput
): Promise<Employee> => {
  const response = await axiosInstance.put<Employee>(
    `/employees/${id}`,
    employee
  );

  return response.data;
};

export const deleteEmployee = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/employees/${id}`);
};