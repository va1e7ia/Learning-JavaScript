const string = "abcde abcde abcde";

const replaceFirstChar = (str) => {
  return str
    .split(" ")
    .map((word) => "!" + word.slice(1))
    .join(" ");
};

console.log(replaceFirstChar(string));
