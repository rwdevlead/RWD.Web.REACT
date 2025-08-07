import { z } from "zod";

export const emailSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(50, "Name must be 50 characters or fewer")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name must only contain letters, spaces, apostrophes, or hyphens"
    ),
  email: z
    .email("Invalid email")
    .max(250, "Email must be 250 characters or fewer"),
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(80, "Name must be 80 characters or fewer")
    .regex(/^[\w\s.-]+$/, "Title contains invalid characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(500, "Name must be 500 characters or fewer")
    .regex(/^[\w\s.,!?-]+$/, "Title contains invalid characters"),
  captchaToken: z.string().optional(), // Optional if not enforced
});
