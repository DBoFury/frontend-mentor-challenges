import { FormValues } from "@/types/aca/form";
import { CalcResult } from "@/types/aca/result";

export const calcDate = (date: FormValues): CalcResult => {
  const dateObj = new Date(`${date.year}-${date.month}-${date.day}`);

  let calc = new Date(new Date().getTime() - dateObj.getTime());

  const calcFormatTmp =
    calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();

  const calcFormat = calcFormatTmp.split("-") as string[];

  const days = Number(Math.abs(parseInt(calcFormat[0])) - 1);
  const months = Number(Math.abs(parseInt(calcFormat[1])) - 1);
  const years = Number(Math.abs(parseInt(calcFormat[2])) - 1970);

  return { years, months, days };
};

export const isValidDate = (date: FormValues): boolean => {
  const dateString = `${date.year}-${date.month}-${date.day}`;

  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(dateString)) {
    return false;
  }

  const parts = dateString.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  const dateObj = new Date(year, month - 1, day);

  if (new Date().getTime() < dateObj.getTime()) return false;

  const isValid =
    dateObj.getFullYear() === year &&
    dateObj.getMonth() === month - 1 &&
    dateObj.getDate() === day;

  return isValid;
};
