const cleanString = (str) => {
  let newStr = str;
  newStr = newStr.replace(/\s/g, "");
  return newStr;
};

export { cleanString };
