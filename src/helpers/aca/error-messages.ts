export const dayErrorMessages = (type: string) => {
  if (type === "required") return "This field is required";
  else if (type === "min") return "Min number is 1";
  else if (type === "max") return "Max number is 31";
  else if (type) return "";
};

export const monthErrorMessages = (type: string) => {
  if (type === "required") return "This field is required";
  else if (type === "min") return "Min number is 1";
  else if (type === "max") return "Max number is 12";
  else if (type) return "";
};

export const yearErrorMessages = (type: string) => {
  if (type === "required") return "This field is required";
  else if (type === "min") return "Min number is 1900";
  else if (type === "max") return "Max number is 2023";
  else if (type) return "Invalid date";
};
