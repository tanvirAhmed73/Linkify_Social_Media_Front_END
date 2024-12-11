import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(3, "First name is required"),
  lastName: z.string().min(3, "Last name is required"),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  day: z.string().min(1, "Day is required"),
  month: z.string().min(1, "Month is required"),
  year: z.string().min(1, "Year is required"),
  gender: z.string().min(1, "Gender is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
