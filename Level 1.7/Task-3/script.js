const number = 12345;
const numberStr = number.toString();
const numberStrReverseArr = Array.from(numberStr).reverse().map(Number);

console.log(numberStrReverseArr);
