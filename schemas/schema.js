import z from "zod";

export const userCreateSchema = z.object({
  name: z.string().min(1, "name is required."),
  email: z.string().email("email must be valid."),
  age: z.number().int().min(1).optional(),
});

export const userUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().optional(),
  age: z.number().int().min(1).optional(),
});
