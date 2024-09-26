const string = "Lera";

function getPenultimateSymbol(str) {
  if (str.length > 1) {
    return str[str.length - 2];
  } else return "String length must be greater than 1";
}

console.log(getPenultimateSymbol(string));
