const number1 = 24;
const number2 = 5;

function divisionWithotReminder(num1, num2) {
  if (num1 % num2 === 0) {
    return "Division without reminder";
  } else return "Division with reminder";
}

console.log(divisionWithotReminder(number1, number2));
