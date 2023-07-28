export const getTodayWeekDay = () => {
  const today: Date = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  return today.toLocaleString("en-US", options).toLowerCase().slice(0, 3);
};
