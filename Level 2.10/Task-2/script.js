const number = 123456;

const findFirsEvenFromTheEnd = (num) => {
  const numStr = num.toString();

  for (let i = numStr.length - 1; i >= 0; i--) {
    if (Number(numStr[i]) % 2 === 0) {
      return numStr[i];
    }
  }
};

console.log(findFirsEvenFromTheEnd(number));
