const number = 14345;

const numbersInAscendingOrder = (num) => {
  const numStr = num.toString();

  for (let i = 0; i < numStr.length - 1; i++) {
    if (numStr[i] >= numStr[i + 1]) {
      return "Not in the ascending order";
    }
  }
  return "In the ascending order";
};

console.log(numbersInAscendingOrder(number));
