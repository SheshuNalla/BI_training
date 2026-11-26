import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { formSchema, type FormData } from "../schemas/formSchema";
import {
  useCreateEmployee,
  useUpdateEmployee,
} from "../hooks/useEmployees";
import type { Employee } from "../services/employeeService";

interface RegistrationFormProps {
  selectedEmployee: Employee | null;
  onSaved: () => void;
}

function RegistrationForm({
  selectedEmployee,
  onSaved,
}: RegistrationFormProps) {
  const createMutation = useCreateEmployee();
  const updateMutation = useUpdateEmployee();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      department: "",
    },
  });

  useEffect(() => {
    if (selectedEmployee) {
      reset({
        name: selectedEmployee.name,
        email: selectedEmployee.email,
        phone: selectedEmployee.phone,
        department: selectedEmployee.department,
      });
    } else {
      reset({
        name: "",
        email: "",
        phone: "",
        department: "",
      });
    }
  }, [selectedEmployee, reset]);

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  const onSubmit = async (data: FormData) => {
    try {
      if (selectedEmployee) {
        await updateMutation.mutateAsync({
          id: selectedEmployee.id,
          employee: data,
        });

        toast.success("Employee updated successfully!");
      } else {
        await createMutation.mutateAsync(data);
        toast.success("Employee registered successfully!");
      }

      reset({
        name: "",
        email: "",
        phone: "",
        department: "",
      });

      onSaved();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong!"
      );
    }
  };

  return (
    <section className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          {selectedEmployee ? "Edit Employee" : "Register Employee"}
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          {selectedEmployee
            ? "Update employee information."
            : "Add a new employee to your organization."}
        </p>
      </div>

      {selectedEmployee && (
        <button
          type="button"
          onClick={onSaved}
          className="mb-5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          Cancel Editing
        </button>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            placeholder="Enter your name"
            {...register("name")}
            className={inputClass}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className={inputClass}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            placeholder="Enter 10-digit phone number"
            {...register("phone")}
            className={inputClass}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-700">
            Department
          </label>
          <select {...register("department")} className={inputClass}>
            <option value="" disabled>Select department</option>
            <option value="Engineering">Engineering</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
          </select>
          {errors.department && (
            <p className="mt-1 text-xs text-red-500">
              {errors.department.message}
            </p>
          )}
        </div>

        <div className="border-t border-slate-100 pt-4">
          <p className="mb-3 text-xs text-slate-500">
            Form modified: {isDirty ? "Yes" : "No"}
          </p>

          <button
            type="submit"
            disabled={!isDirty || isSubmitting}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting
              ? "Saving..."
              : selectedEmployee
                ? "Update Employee"
                : "Register Employee"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default RegistrationForm;
