function reverseNumbersInArray(arr) {
  return arr.map((num) => {
    return parseInt(num.toString().split("").reverse().join(""));
  });
}

let numbersArray = [123, 456, 789];
console.log(reverseNumbersInArray(numbersArray));
