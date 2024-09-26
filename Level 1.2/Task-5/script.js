const number1 = 1234;
const number2 = 3456;

function firstNumAreSame(num1, num2) {
  strNum1 = num1.toString();
  strNum2 = num2.toString();

  if (strNum1[0] === strNum2[0]) {
    return "Same!";
  } else return "Different!";
}

console.log(firstNumAreSame(number1, number2));
