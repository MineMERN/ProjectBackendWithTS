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

export const profileSchema = z.object({
    username: z.string().max(10),
    discription: z.string().max(30),
    imageUrl: z.string(),
})
// .startsWith("https://")
export type inputProfile = z.infer<typeof profileSchema>