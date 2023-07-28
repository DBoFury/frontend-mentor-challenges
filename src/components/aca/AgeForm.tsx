"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";
import { calcDate, isValidDate } from "@/lib/aca/calculate-date";
import {
  dayErrorMessages,
  monthErrorMessages,
  yearErrorMessages,
} from "@/helpers/aca/error-messages";
import Image from "next/image";
import { FormValues } from "@/types/aca/form";
import { Result } from "@/types/aca/result";

const AgeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    setError,
    reset,
  } = useForm<FormValues>({ shouldFocusError: false });

  const [result, setResult] = useState<Result | null>(null);

  const onSubmit = (data: FormValues) => {
    reset();
    (document.activeElement as HTMLElement)?.blur();
    if (!isValidDate(data)) {
      setError("day", { type: "invalid" });
      setError("month", { type: "invalid" });
      setError("year", { type: "invalid" });
      return;
    }
    setResult(calcDate(data));
  };

  const handleInputChange = (fieldName: keyof FormValues, value: string) => {
    if (value.length === 1 && value !== "0") setValue(fieldName, `0${value}`);
    else if (value.length > 2 && value.startsWith("0"))
      setValue(fieldName, value.substring(1));
    else setValue(fieldName, value);
    clearErrors(fieldName);
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-poppins bg-aca-light-grey">
      <div className="flex flex-col justify-between bg-white h-[13.5rem] w-[9.5rem] py-4 px-3 rounded-lg rounded-br-[20%] dt:rounded-br-[25%] dt:h-64 dt:w-80 dt:py-3 dt:px-5 dt:justify-around">
        <form
          id="form"
          className="flex justify-between mt-2 dt:justify-start dt:space-x-3"
          onSubmit={(e) => handleSubmit(onSubmit)(e)}>
          <div className="flex flex-col space-y-[0.2rem]">
            <label
              className={cn(
                "text-[12px] text-aca-smokey-grey font-bold uppercase tracking-[2px]",
                { "text-light-red": errors.day }
              )}
              htmlFor="day">
              Day
            </label>
            <input
              className={cn(
                "w-[2.4rem] border-[0.05rem] border-aca-light-grey rounded-[0.25rem] text-[18px] font-bold p-1 px-2 focus:border-aca-purple focus:outline-none cursor-pointer dt:w-16 dt:h-7 dt:text-[22px]",
                { "border-aca-light-red": errors.day }
              )}
              type="number"
              placeholder="DD"
              id="day"
              {...register("day", {
                onChange: (e) => handleInputChange("day", e.target.value),
                required: true,
                min: 1,
                max: 31,
              })}
            />
            <div>
              {errors.day && (
                <span className="absolute text-aca-light-red text-[0.225rem] italic dt:text-[0.375rem]">
                  {dayErrorMessages(errors.day.type as string)}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-[0.2rem]">
            <label
              className={cn(
                "text-[12px] text-aca-smokey-grey font-bold uppercase tracking-[2px]",
                { "text-aca-light-red": errors.month }
              )}
              htmlFor="month">
              Month
            </label>
            <input
              className={cn(
                "w-[2.4rem] border-[0.05rem] border-aca-light-grey rounded-[0.25rem] text-[18px] font-bold p-1 px-2 focus:border-aca-purple focus:outline-none cursor-pointer dt:w-16 dt:h-7 dt:text-[22px]",
                { "border-aca-light-red": errors.month }
              )}
              type="number"
              placeholder="MM"
              id="month"
              {...register("month", { required: true, min: 1, max: 12 })}
              onChange={(e) => handleInputChange("month", e.target.value)}
            />
            <div>
              {errors.month && (
                <span className="absolute text-aca-light-red text-[0.225rem] italic dt:text-[0.375rem]">
                  {monthErrorMessages(errors.month.type as string)}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-[0.2rem]">
            <label
              className={cn(
                "text-[12px] text-aca-smokey-grey font-bold uppercase tracking-[2px]",
                { "text-aca-light-red": errors.year }
              )}
              htmlFor="year">
              Year
            </label>
            <input
              className={cn(
                "w-[2.4rem] border-[0.05rem] border-aca-light-grey rounded-[0.25rem] text-[18px] font-bold p-1 px-[0.4rem] focus:border-aca-purple focus:outline-none cursor-pointer dt:w-16 dt:h-7 dt:text-[22px] dt:px-2",
                { "border-aca-light-red": errors.year }
              )}
              type="number"
              placeholder="YYYY"
              id="year"
              {...register("year", { required: true, min: 1900, max: 2023 })}
            />
            <div>
              {errors.year && (
                <span className="absolute text-aca-light-red text-[0.225rem] italic dt:text-[0.375rem]">
                  {yearErrorMessages(errors.year.type as string)}
                </span>
              )}
            </div>
          </div>
        </form>

        <div className="flex items-center justify-center dt:mt-0">
          <div className="flex-grow h-[2px] bg-aca-light-grey rounded-l-full dt:h-[1px]"></div>
          <button
            type="submit"
            form="form"
            className="flex items-center justify-center rounded-full w-7 h-7 bg-aca-purple hover:bg-aca-off-black focus:outline-none dt:w-9 dt:h-9">
            <Image
              src="/age-calculator-app/icon-arrow.svg"
              alt="arrow icon"
              width={30}
              height={30}
            />
          </button>
          <div className="flex-grow h-[2px] bg-aca-light-grey rounded-r-full dt:hidden"></div>
        </div>

        <div className="text-2xl font-extrabold italic leading-7 dt:text-[2.5rem] dt:leading-[2.4rem] dt:mb-2">
          <div className="flex flex-row items-end space-x-1 dt:space-x-[-0.3rem]">
            <p
              className={cn("text-aca-purple", {
                "text-[1.5rem] dt:text-4xl dt:tracking-[0.5rem]": !!!result,
              })}>
              {result?.years !== undefined ? (
                <CountUp end={result.years} />
              ) : (
                "--"
              )}
            </p>
            <p className="text-aca-off-black">
              {!!result?.years
                ? result.years > 1
                  ? "years"
                  : "year"
                : "years"}
            </p>
          </div>
          <div className="flex flex-row items-end space-x-1 dt:space-x-[-0.3rem]">
            <p
              className={cn("text-aca-purple", {
                "text-[1.43rem] dt:text-4xl dt:tracking-[0.5rem]": !!!result,
              })}>
              {result?.months !== undefined ? (
                <CountUp end={result.months} />
              ) : (
                "--"
              )}
            </p>
            <p className="text-off-black">
              {!!result?.months
                ? result.months > 1
                  ? "months"
                  : "month"
                : "months"}
            </p>
          </div>
          <div className="flex flex-row items-end italic space-x-1 dt:space-x-[-0.3rem]">
            <p
              className={cn("text-aca-purple", {
                "text-[1.5rem] dt:text-4xl dt:tracking-[0.5rem]": !!!result,
              })}>
              {!!result?.days ? <CountUp end={result.days} /> : "--"}
            </p>
            <p className="text-aca-off-black">
              {result?.days !== undefined
                ? result.days > 1
                  ? "days"
                  : "day"
                : "days"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeForm;
