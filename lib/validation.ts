import { z } from "zod";

export const memberSchema = z.object({
  name: z
    .string()
    .min(3, "Member name must be at least 3 characters")
    .max(50, "Member name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

export const registrationSchema = z.object({
  teamName: z
    .string()
    .min(3, "Team name must be at least 3 characters")
    .max(50, "Team name must be less than 50 characters")
    .regex(/^[a-zA-Z0-9\s]+$/, "Team name can only contain letters, numbers, and spaces"),
  
  college: z
    .string()
    .min(3, "College name must be at least 3 characters")
    .max(100, "College name must be less than 100 characters"),
  
  leaderName: z
    .string()
    .min(3, "Leader name must be at least 3 characters")
    .max(50, "Leader name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  email: z
    .string()
    .email("Invalid email address"),
  
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  
  memberCount: z
    .number()
    .int("Member count must be a whole number")
    .min(1, "Team must have at least 1 member")
    .max(3, "Team can have maximum 3 members"),
  
  theme: z
    .string()
    .min(1, "Please select a theme"),
  
  projectTitle: z
    .string()
    .min(5, "Project title must be at least 5 characters")
    .max(100, "Project title must be less than 100 characters"),
  
  abstract: z
    .string()
    .min(50, "Abstract must be at least 50 characters")
    .max(1000, "Abstract must be less than 1000 characters"),
  
  pptLink: z
    .string()
    .url("Please enter a valid URL")
    .min(1, "Presentation link is required"),
  
  members: z.array(memberSchema).min(0).max(2, "Maximum 2 additional members"),
  
  honeypot: z
    .string()
    .max(0, "Spam detected")
    .optional(),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;

export const fileValidation = {
  maxSize: 20 * 1024 * 1024, // 20MB
  allowedTypes: [
    "application/pdf",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ],
  allowedExtensions: [".pdf", ".ppt", ".pptx"],
};

export function validateFile(file: File): { valid: boolean; error?: string } {
  if (file.size > fileValidation.maxSize) {
    return {
      valid: false,
      error: `File size exceeds 20MB limit. Current size: ${(file.size / 1024 / 1024).toFixed(2)}MB`,
    };
  }

  if (!fileValidation.allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: "Invalid file type. Only PDF, PPT, and PPTX files are allowed.",
    };
  }

  return { valid: true };
}
