const string = "AbCdE";

const changeCase = (str) => {
  return str
    .split("")
    .map((char) => {
      return char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase();
    })
    .join("");
};

console.log(changeCase(string));
