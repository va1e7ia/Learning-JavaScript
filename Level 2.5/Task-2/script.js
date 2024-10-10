const string = "abcdefg";

const removeThird = (str) => {
  let withoutThirdArr = [];
  for (let i = 0; i < str.length; i++) {
    if ((i + 1) % 3 !== 0) {
      withoutThirdArr.push(str[i]);
    }
  }
  return withoutThirdArr.join("");
};

console.log(removeThird(string));
