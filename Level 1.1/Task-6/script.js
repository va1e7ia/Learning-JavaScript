const string = "Память";
function getLastLetter(str) {
  if (str[str.length - 1] === "ь") {
    return str[str.length - 2];
  } else return str[str.length - 1];
}
console.log(getLastLetter(string));
