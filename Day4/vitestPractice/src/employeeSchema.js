import { z } from "zod";

export const employeeSchema = z.object({
    name: z.string().min(3),
    email: z.string(),
    age: z.number().min(18)
})