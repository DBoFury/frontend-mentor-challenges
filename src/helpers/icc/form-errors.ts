export const nameErr = (errType: string) => {
  if (errType === "required") return "Can't be blank";
  else if (errType === "pattern") return "Wrong format";
};

export const numberErr = (errType: string) => {
  if (errType === "required") return "Can't be blank";
  else if (errType === "pattern") return "Wrong format, numbers only";
  else if (errType === "maxLength") return "Too long";
  else if (errType === "minLength") return "Too short";
};

export const monthErr = (errType: string) => {
  if (errType === "required") return "Can't be blank";
  else if (errType === "max") return "Max is 12";
  else if (errType === "min") return "Min is 1";
};

export const yearErr = (errType: string) => {
  if (errType === "required") return "Can't be blank";
  else if (errType === "max") return "Max is 30";
  else if (errType === "min") return "Min is 23";
};

export const cvcErr = (errType: string) => {
  if (errType === "required") return "Can't be blank";
};
