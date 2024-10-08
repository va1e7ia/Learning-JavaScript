const string = "hehfind1number7";

const findFirstNum = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      return i;
    }
  }
};

console.log(findFirstNum(string));
