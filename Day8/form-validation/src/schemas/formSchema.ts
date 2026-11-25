import {z} from "zod";

export const formSchema = z.object({
    name: z.string().min(3, "Name must contain at least 3 characters"),
    
    email: z.email("Please enter a valid email address"),

    phone: z.string().regex(/^[0-9]{10}$/, "Phone number must contain 10 digits"),

    department: z.string().min(1, "Please select a department"),
});

export type FormData = z.infer<typeof formSchema>;