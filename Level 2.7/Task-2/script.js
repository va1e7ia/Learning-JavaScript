const symbol = "a";

const whatCase = (symb) => {
  if (symb === symb.toUpperCase()) {
    return "Upper Case";
  } else return "Lower Case";
};

console.log(whatCase(symbol));
