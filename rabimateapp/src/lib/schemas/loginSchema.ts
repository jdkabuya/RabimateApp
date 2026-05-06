import z from "zod";

const requiredString = (fieldName: string) => z
    .string({ message: `${fieldName} is required` })
    .min(1, { message: `${fieldName} is required` })

export const loginSchema = z.object({
    email: requiredString('Email'),//z.email(),
    password: requiredString('Password')//z.string().min(6)
})
export type LoginSchema = z.infer<typeof loginSchema>;