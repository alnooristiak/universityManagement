import { z } from 'zod'

// req validation
const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is require',
    }),
    password: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}

// await createUserZodSchema.parseAsync(req)
