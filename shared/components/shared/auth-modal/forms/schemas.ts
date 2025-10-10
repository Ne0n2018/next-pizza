import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(4)
  .max(32, { message: "пороль должен быть не менее 8 символов" });

export const formLoginSchema = z.object({
  email: z.string().email({ message: "введите коррекектную почту" }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: "введите имя и фамилию " }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "пароли не совпадают",
    path: ["confirmPassword"],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
