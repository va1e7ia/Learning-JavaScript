for (let i = 1; i <= 1000; i++) {
  const digits = i.toString().split("");
  let firstDigit = parseInt(digits[0]);
  let secondDigit = parseInt(digits[1]) || 0;

  if (firstDigit + secondDigit === 5) {
    console.log(i);
  }
}
