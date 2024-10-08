const number = 123456;

const findEvenNum = (num) => {
  let numberStr = num.toString();
  let count = 0;
  for (let i = 0; i < numberStr.length; i++) {
    if (numberStr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
};

console.log(findEvenNum(number));
