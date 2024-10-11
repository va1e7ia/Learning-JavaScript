const number = 12345678;

const deleteOddNums = (num) => {
  let evenArr = [];

  let strNum = num.toString();

  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] % 2 === 0) {
      evenArr.push(strNum[i]);
    }
  }
  return evenArr.join("");
};

console.log(deleteOddNums(number));
