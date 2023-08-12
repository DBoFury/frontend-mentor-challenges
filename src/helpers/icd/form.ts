import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(10, {
    message: "Cardholder's name should contain at least 10 characters",
  }),
  cardNumber: z.string().regex(/^(\d{4} )*\d{4}$/, {
    message: "Invalid card number",
  }),
  exp: z.object({
    month: z
      .string()
      .nonempty({ message: "Can't be blank" })
      .refine((value) => /^\d{1,2}$/.test(value), {
        message: "Invalid",
      })
      .refine((value) => parseInt(value, 10) >= 1, {
        message: "> 1",
      })
      .refine((value) => parseInt(value, 10) <= 12, {
        message: "< 12",
      }),
    year: z
      .string()
      .nonempty({ message: "Can't be blank" })
      .refine((value) => /^\d{4}$/.test(value), {
        message: "Invalid",
      })
      .refine((value) => parseInt(value, 10) >= 2023, {
        message: "> 2023",
      })
      .refine((value) => parseInt(value, 10) <= 2030, {
        message: "< 2030",
      }),
  }),
  cvc: z.string().refine((value) => /^[0-9]{3,4}$/.test(value), {
    message: "Invalid CVC format",
  }),
});
