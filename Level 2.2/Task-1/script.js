const array = [2, 3, 4, -1, 2, -3, 4, 5, -6, 7, -1, 3, -2, -7];

const findNeg = (arr) => {
  let amountOfNeg = 0;
  arr.forEach((el) => {
    if (el < 0) {
      amountOfNeg += 1;
    }
  });

  return amountOfNeg;
};

console.log(findNeg(array));
