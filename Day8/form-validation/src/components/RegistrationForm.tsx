import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  { toast } from "sonner";
import { useState } from "react";
import { formSchema, type FormData } from "../schemas/formSchema";
function RegistrationForm() {
    
    const existingEmployee = {
      name: "john",
      email: "john@ex.com",
      phone: "9876543210",
      department: "Engineering"
    };
    const [isEditMode, setIsEditMode] = useState(false);

    const {register, handleSubmit, reset ,formState: {errors, isDirty, isSubmitting}} = useForm<FormData>({
        resolver: zodResolver(formSchema)
    });
    const onSubmit = async (data: FormData) => {
      try {
        console.log("Submitting:", data);

        await new Promise((resolve) =>
            setTimeout(resolve, 2000)
        );

        if(isEditMode) {
          console.log("Employee Updated: " ,data)

          toast.success("Employee Updated successfully!");
          setIsEditMode(false);
        }else{
          console.log("New employee created: ", data);
          toast.success("New Employee created");
        }

        toast.success("Registration successfull");
    
        reset({
          name: "",
          email: "",
          phone: "",
          department: "",
        });
      } catch (error) {
        toast.error(
          error instanceof Error
          ? error.message
          : "Something went wrong!"
        );
      }
        
    };
  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

      <h2
        className="mb-6 text-2xl font-bold"
      >
        {isEditMode ? "Edit Employee" : "Register Employee"}
      </h2>

      <p className="mb-6 text-sm text-slate-500">
        Enter your details to register.
      </p>
      <button
        type="button"
        onClick={() => {
          reset(existingEmployee);
          setIsEditMode(true);
        }}
        className="mb-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Edit Existing employee
      </button>
      {isEditMode && (
        <button
          type="button"
          onClick={() => {
            setIsEditMode(false);
            reset({
              name: "",
              email: "",
              phone: "",
              department: "",
            });
          }}
          className="ml-3 rounded-lg border px-4 py-2"
        >
          Cancel
        </button>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="mb-1 block text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
          />
            {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
                </p>
            )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
          />
            {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
                </p>
            )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Phone Number
          </label>

          <input
            type="text"
            placeholder="Enter 10-digit phone number"
            {...register("phone")}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
          />
            {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
                </p>
            )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Department
          </label>

          <select
            {...register("department")}
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select department
            </option>

            <option value="Engineering">Engineering</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
          </select>
            {errors.department && (
                <p className="mt-1 text-sm text-red-500">
                {errors.department.message}
                </p>
            )}
        </div>
        {/* Display form state */}
            <p className="text-sm text-gray-500">
                Form modified: {isDirty ? "Yes" : "No"}
            </p>

            <button
                type="submit"
                disabled={!isDirty || isSubmitting}
                className="w-full rounded-lg bg-blue-600 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                {isSubmitting ? "Saving..." : isEditMode ? "Update Employee" : "Register"}
            </button>

      </form>
    </div>
  );
}

export default RegistrationForm;