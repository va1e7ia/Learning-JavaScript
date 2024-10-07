const string = "hm0mm thi0s is my nu00ll str";
let count = 0;
const findThirdZero = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      count++;
    }
    if (count === 3) {
      return i;
    }
  }
};

console.log(findThirdZero(string));
