const number = 12345;
const numberStr = number.toString();
const numberStrArr = Array.from(numberStr).map(Number);

function sumDigits(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;

  //return num.reduce((acc+curr)=> acc+cur,0)
}

console.log(sumDigits(numberStrArr));
