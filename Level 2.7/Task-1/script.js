const string = "a bc def ghij";

const lessThanFourCapitalize = (str) => {
  const splitStr = str.split(" ");

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length <= 3) {
      splitStr[i] = splitStr[i].toUpperCase();
    }
  }

  return splitStr.join(" ");
};

console.log(lessThanFourCapitalize(string));
