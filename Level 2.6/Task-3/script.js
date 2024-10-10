const string = "1234567";

const splitThirdFromTheEnd = (str) => {
  let splitStr = "";
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    splitStr = str[i] + splitStr;
    count++;
    if (count % 3 === 0 && i != 0) {
      splitStr = " " + splitStr;
    }
  }

  return splitStr;
};

console.log(splitThirdFromTheEnd(string));
