const string = "javaScript toPchik";

const chekCapitalize = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
      count++;
    }
  }
  if (count >= 2) {
    return "More than 2";
  } else return "Less than 2";
};

console.log(chekCapitalize(string));
