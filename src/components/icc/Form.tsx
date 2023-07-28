import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  nameErr,
  numberErr,
  monthErr,
  yearErr,
  cvcErr,
} from "@/helpers/icc/form-errors";
import { CardDetails } from "@/types/icc/card";
import { FormValues } from "@/types/icc/form";
import Image from "next/image";

interface FormProps {
  setCardDetails: (data: CardDetails | null) => void;
}

const Form: FC<FormProps> = ({ setCardDetails }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    reset,
  } = useForm<FormValues>({ shouldFocusError: false });

  const [completed, setCompleted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    reset();
    (document.activeElement as HTMLElement)?.blur();
    setCardDetails({
      holderName: data.name,
      number: data.number,
      expDate: `${data.expMonth}/${data.expYear}`,
      cvc: parseInt(data.cvc),
    });
    setCompleted(true);
  };

  const handleInputChangeMonth = (
    fieldName: keyof FormValues,
    value: string
  ) => {
    if (value.length === 1 && value !== "0") setValue(fieldName, `0${value}`);
    else if (value.length > 2 && value.startsWith("0"))
      setValue(fieldName, value.substring(1));
    else setValue(fieldName, value);
    clearErrors(fieldName);
  };

  const handleInputCardNumber = (
    fieldName: keyof FormValues,
    value: string
  ) => {
    const formattedValue = value
      .replace(/\s/g, "")
      .match(/.{1,4}/g)
      ?.join(" ");
    setValue(fieldName, formattedValue as string);
  };

  return (
    <>
      {completed ? (
        <div className="flex-1 flex flex-col self-center items-center justify-around mt-24 mx-[6%] text-lg md:text-4xl md:h-1/3 dt:mx-72 dt:my-20 dt:max-w-[30rem] dt:text-sm dt:h-72">
          <div className="animate-fade-down animate-once animate-duration-500 animate-delay-100 animate-ease-in">
            <Image
              src="/interactive-card-details-form/icon-complete.svg"
              alt="complete icon"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col items-center space-y-3">
            <p className="uppercase tracking-[0.2rem] md:text-6xl dt:text-3xl">
              Thank you!
            </p>
            <p className="text-icc-dark-grayish-violet">
              We've added your card details
            </p>
          </div>
          <button
            onClick={() => setCompleted(false)}
            className="text-white bg-icc-very-dark-violet w-full py-3 rounded-lg tracking-[0.1rem] max-w-[30rem] md:max-w-[40rem] md:py-5 md:rounded-xl dt:max-w-[20rem]">
            Continue
          </button>
        </div>
      ) : (
        <form
          className="flex flex-col self-center mb-10 mx-[6%] max-w-[30rem] md:max-w-[45rem] dt:my-20 dt:max-w-[30rem] dt:ml-72 dt:mb-0"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full space-y-2">
            <label
              className="text-icc-very-dark-violet font-bold text-xs uppercase tracking-[0.15rem] md:text-2xl dt:text-lg"
              htmlFor="name">
              Cardholder Name
            </label>
            <input
              className={cn(
                "w-full text-lg border-2 border-icc-light-grayish-violet rounded-xl py-2 px-3 cursor-pointer dt:text-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-icc-active-input-border-end md:text-3xl md:px-5",
                {
                  "border-transparent ring-1 ring-icc-red": errors.name,
                }
              )}
              type="text"
              placeholder="e.g. Jane Appleseed"
              id="name"
              {...register("name", {
                required: true,
                pattern: /^[A-Z][a-z]+ [A-Z][a-z]+$/,
              })}
            />
            <div className="relative h-4 md:h-12 dt:h-6">
              {errors.name && (
                <span className="absolute -translate-y-2 text-icc-red md:text-2xl dt:text-lg">
                  {nameErr(errors.name.type)}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full space-y-2">
            <label
              className="text-icc-very-dark-violet font-bold text-xs uppercase tracking-[0.15rem] md:text-2xl dt:text-lg"
              htmlFor="number">
              Card Number
            </label>
            <input
              className={cn(
                "w-full text-lg border-2 border-icc-light-grayish-violet rounded-xl py-2 px-3 cursor-pointer dt:text-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-icc-active-input-border-end md:text-3xl md:px-5",
                {
                  "border-transparent ring-1 ring-icc-red": errors.number,
                }
              )}
              type="tel"
              id="number"
              placeholder="e.g. 1234 5678 9123 0000"
              {...register("number", {
                required: true,
                onChange: (e) =>
                  handleInputCardNumber("number", e.target.value),
                pattern: /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/,
                maxLength: 19,
                minLength: 19,
              })}
            />
            <div className="relative h-4 md:h-12 dt:h-6">
              {errors.number && (
                <span className="absolute -translate-y-2 text-icc-red md:text-2xl dt:text-lg">
                  {numberErr(errors.number.type)}
                </span>
              )}
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="flex flex-col flex-[6] space-y-2">
              <label
                className="text-icc-very-dark-violet font-bold text-[0.7rem] uppercase tracking-[0.15rem] md:text-2xl dt:text-lg"
                htmlFor="month">
                {"Exp. Date (MM/YY)"}
              </label>

              <div className="flex space-x-2">
                <input
                  type="number"
                  id="month"
                  placeholder="MM"
                  {...register("expMonth", {
                    required: true,
                    onChange: (e) =>
                      handleInputChangeMonth("expMonth", e.target.value),
                    min: 1,
                    max: 12,
                  })}
                  className={cn(
                    "w-full text-lg border-2 border-icc-light-grayish-violet rounded-xl py-2 px-3 cursor-pointer dt:text-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-icc-active-input-border-end md:text-3xl md:px-5",
                    {
                      "border-transparent ring-1 ring-icc-red": errors.expMonth,
                    }
                  )}
                />
                <input
                  className={cn(
                    "w-full text-lg border-2 border-icc-light-grayish-violet rounded-xl py-2 px-3 cursor-pointer dt:text-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-icc-active-input-border-end md:text-3xl md:px-5",
                    {
                      "border-transparent ring-1 ring-icc-red": errors.expYear,
                    }
                  )}
                  type="number"
                  id="year"
                  placeholder="YY"
                  {...register("expYear", {
                    required: true,
                    min: 23,
                    max: 30,
                  })}
                />
              </div>

              <div className="relative h-8 md:h-12 dt:h-6">
                {(errors.expMonth || errors.expYear) && (
                  <span className="absolute -translate-y-2 text-icc-red md:text-2xl dt:text-lg">
                    {monthErr(errors.expMonth?.type as string) ||
                      yearErr(errors.expYear?.type as string)}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col flex-[7] space-y-2">
              <label
                className="text-icc-very-dark-violet font-bold text-xs uppercase tracking-[0.15rem] md:text-2xl dt:text-lg"
                htmlFor="number">
                cvc
              </label>
              <input
                className={cn(
                  "w-full text-lg border-2 border-icc-light-grayish-violet rounded-xl py-2 px-3 cursor-pointer dt:text-lg focus:border-transparent focus:outline-none focus:ring-1 focus:ring-icc-active-input-border-end md:text-3xl md:px-5",
                  {
                    "border-transparent ring-1 ring-icc-red": errors.cvc,
                  }
                )}
                type="number"
                placeholder="e.g. 123"
                id="cvc"
                {...register("cvc", {
                  required: true,
                  maxLength: 3,
                  minLength: 3,
                })}
              />
              <div className="relative h-8 md:h-12 dt:h-6">
                {errors.cvc && (
                  <span className="absolute -translate-y-2 text-icc-red md:text-2xl dt:text-lg">
                    {cvcErr(errors.cvc.type)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg text-white rounded-lg bg-icc-very-dark-violet md:text-4xl md:py-7 md:rounded-xl dt:py-3 dt:text-xl">
            Confirm
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
