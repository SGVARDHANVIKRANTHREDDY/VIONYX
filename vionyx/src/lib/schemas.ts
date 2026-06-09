import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters long." }).max(80, {
    message: "Name must be 80 characters or fewer.",
  }),
  email: z.string().trim().email({ message: "Please enter a valid email address." }).max(120, {
    message: "Email must be 120 characters or fewer.",
  }),
  phone: z
    .string()
    .trim()
    .max(30, { message: "Phone number must be 30 characters or fewer." })
    .refine((value) => value === "" || /^[+()0-9\s-]{7,30}$/.test(value), {
      message: "Please enter a valid phone number.",
    })
    .optional(),
  company: z.string().trim().max(120, { message: "Company name must be 120 characters or fewer." }).optional(),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters long." }).max(1600, {
    message: "Message must be 1600 characters or fewer.",
  }),
  honeypot: z.string().trim().optional(), // Anti-spam honeypot
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
