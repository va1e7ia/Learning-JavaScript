const string = "heh22 2lol 2kek4h1";

const findNums = (str) => {
  let numArr = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      numArr.push(i);
    }
  }
  return numArr;
};

console.log(findNums(string));
