let string = "aaa bbb ccc";

const upperCaseFirstSymbol = (str) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(upperCaseFirstSymbol(string));
