const number = 234;

function sumFirstAndLastNum(num) {
  const firstNum = Number(String(num)[0]);
  const secondNum = Number(String(num)[String(num).length - 1]);
  const sum = firstNum + secondNum;
  return sum;
}

console.log(sumFirstAndLastNum(number));
