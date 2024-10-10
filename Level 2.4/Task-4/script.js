let string = "abcde";

const upperCaseOdd = (str) => {
  let resString = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      resString += str[i].toUpperCase();
    } else {
      resString += str[i];
    }
  }
  return resString;
};

console.log(upperCaseOdd(string));
