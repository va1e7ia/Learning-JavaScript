const number = 123456;

const findPairsSum = (num) => {
  const numberStr = num.toString();
  let arr = [];
  for (let i = 0; i < numberStr.length - 1; i += 2) {
    arr.push(numberStr[i] + numberStr[i + 1]);
  }
  const sum = arr.reduce((acc, curr) => {
    return acc + +curr;
  }, 0);

  return sum;
};

console.log(findPairsSum(number));
