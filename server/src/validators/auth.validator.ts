import { z } from "zod";

export const signupSchema = z.object({
    email: z.email().lowercase(),
    password: z.string().min(4)
})

export type SignupInput = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
    email: z.email().lowercase(),
    password: z.string().min(4)
})

export type inputLogin = z.infer<typeof loginSchema>
