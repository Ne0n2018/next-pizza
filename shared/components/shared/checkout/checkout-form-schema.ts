import { z } from "zod";

export const checkoutFormSchem = z.object({
  firstName: z
    .string()
    .min(2, { message: "Поле должно содержать минимум 2 символа" }),
  lastName: z
    .string()
    .min(2, { message: "Поле должно содержать минимум 2 символа" }),
  email: z.string().email({ message: "Введите корректный email" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  address: z.string().min(5, { message: "Введите корректный адрес" }), // Исправлено на address
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchem>;
