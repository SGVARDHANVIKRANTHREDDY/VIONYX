import { z } from "zod";

// ─── Multi-Step Discovery Form Schema ────────────────────────────────────────

export const discoveryFormSchema = z.object({
  // Step 1
  service: z.enum(["New Website", "Website Redesign", "Branding", "AI Integration", "Other"] as const),
  // Step 2
  budget: z.enum(["<$2,000", "$2k–5k", "$5k–10k", "$10k+"] as const),
  // Step 3
  timeline: z.enum(["ASAP", "Within 1 Month", "2–3 Months", "Flexible"] as const),
  // Step 4
  message: z.string().trim().min(10, "Please describe your project (at least 10 characters).").max(2000, "Description must be 2000 characters or fewer."),
  // Step 5
  name: z.string().trim().min(2, "Name must be at least 2 characters long.").max(80),
  email: z.string().trim().email("Please enter a valid email address.").max(120),
  company: z.string().trim().max(120).optional(),
  website: z.string().trim().max(200).optional(),
  // Anti-spam
  honeypot: z.string().trim().optional(),
});

export type DiscoveryFormData = z.infer<typeof discoveryFormSchema>;

// ─── Legacy contact form schema (keep for API compatibility) ─────────────────

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
  honeypot: z.string().trim().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
