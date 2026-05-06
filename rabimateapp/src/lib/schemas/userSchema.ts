import { z } from 'zod';

const requiredString = (fieldName: string) => z
    .string({ message: `${fieldName} is required` })
    .min(1, { message: `${fieldName} is required` })

export const userSchema = z.object({
    password: requiredString('Password'),
    username: requiredString('Username'),
})

export type UserSchema = z.infer<typeof userSchema>;