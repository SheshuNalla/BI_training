import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
} from "../services/employeeService";

import type {
    CreateEmployeeInput
} from "../services/employeeService";

//GET fetch employees:
export const useEmployees = () =>{
    return useQuery({
        queryKey : ["employees"],
        queryFn : getEmployees,
        staleTime : 1000 * 6 * 5,
    })
};

// POST create employee:
export const useCreateEmployee = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : createEmployee,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["employees"],
            });
        },
    });
};

// UPDATE update employee
export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      employee,
    }: {
      id: string;
      employee: CreateEmployeeInput;
    }) => updateEmployee(id, employee),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
    },
  });
};

//DELETE employee:
export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEmployee,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["employees"],
      });
    },
  });
};