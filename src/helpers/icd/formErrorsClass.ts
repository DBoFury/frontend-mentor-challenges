import { cn } from "@/lib/utils";
import { get } from "lodash";
import { UseFormReturn } from "react-hook-form";

export const formErrorsClass = (
  field: string,
  form: UseFormReturn<
    {
      name: string;
      cardNumber: string;
      exp: {
        month: string;
        year: string;
      };
      cvc: string;
    },
    any,
    undefined
  >
) => {
  return cn({
    "ring-1 ring-icd-red": get(form.formState.errors, field),
  });
};
