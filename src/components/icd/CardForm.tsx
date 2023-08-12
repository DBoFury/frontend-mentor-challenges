"use client";

import { AnimationEvent, ChangeEvent, FC, RefObject, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/helpers/icd/form";
import { cn } from "@/lib/utils";
import { formErrorsClass } from "@/helpers/icd/formErrorsClass";

interface CardFormProps {
  isCompleted: boolean;
  setIsCompleted: (value: boolean) => void;
  formRef: RefObject<HTMLDivElement>;
  handleAnimationEndForm: (event: AnimationEvent<HTMLDivElement>) => void;
  setCardDetails: (value: z.infer<typeof formSchema>) => void;
}

const CardForm: FC<CardFormProps> = ({
  isCompleted,
  setIsCompleted,
  formRef,
  handleAnimationEndForm,
  setCardDetails,
}) => {
  const [isInitial, setIsInitial] = useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cardNumber: "",
      exp: { month: "", year: "" },
      cvc: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsCompleted(true);
    setIsInitial(false);
    setCardDetails(values);
    form.reset();
  };

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length === 1 && value !== "0")
      form.setValue("exp.month", `0${value}`);
    else if (value.length > 2 && value.startsWith("0"))
      form.setValue("exp.month", value.substring(1));
    else form.setValue("exp.month", value);
    form.clearErrors("exp.month");
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > 19) {
      return;
    }

    if (form.formState.errors && form.formState.isSubmitted) {
      form.trigger("cardNumber");
    }

    form.setValue(
      "cardNumber",
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ") as string
    );
  };

  return (
    <div
      ref={formRef}
      className={cn(
        "w-full flex flex-col items-center justify-center space-y-8 px-8 max-w-[26rem]",
        {
          "animate-in zoom-in duration-700": !isCompleted && !isInitial,
          "animate-out zoom-out duration-700 fill-mode-forwards": isCompleted,
        }
      )}
      onAnimationEnd={(e) => {
        handleAnimationEndForm(e);
      }}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase tracking-widest text-icd-very-dark-violet">
                  Cardholder Name
                </FormLabel>
                <FormControl>
                  <Input
                    className={formErrorsClass("name", form)}
                    placeholder="e.g. Jane Appleseed"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase tracking-widest text-icd-very-dark-violet">
                  Card Number
                </FormLabel>
                <FormControl>
                  <Input
                    className={formErrorsClass("cardNumber", form)}
                    placeholder="e.g. 1234 5678 9123 0000"
                    {...field}
                    onChange={(e) => handleCardNumberChange(e)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="relative flex items-start space-x-4 pt-3">
            <FormField
              control={form.control}
              name="exp.month"
              render={({ field }) => (
                <FormItem className="w-1/4">
                  <FormLabel className="absolute -inset-y-1 inset-x-0 uppercase tracking-widest text-icd-very-dark-violet h-8 w-40">
                    {"Exp. Date (MM/YY)"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={formErrorsClass("exp.month", form)}
                      placeholder="MM"
                      {...field}
                      onChange={(e) => handleMonthChange(e)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="exp.year"
              render={({ field }) => (
                <FormItem className="w-1/4">
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      className={formErrorsClass("exp.year", form)}
                      placeholder="YY"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="absolute -inset-y-1 uppercase tracking-widest text-icd-very-dark-violet">
                    CVC
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={formErrorsClass("cvc", form)}
                      placeholder="e.g. 123"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="w-full bg-icd-very-dark-violet text-lg py-7"
            type="submit">
            Confirm
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CardForm;
