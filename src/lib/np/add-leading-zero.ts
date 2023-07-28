export const addLeadingZero = (num: number): string => {
  const numStr: string = num.toString();
  return numStr.length < 2 ? `0${numStr}` : numStr;
};
