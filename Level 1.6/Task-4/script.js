const array = [1, -3, 456, 2, 76, 10, -10, 23, 3, 54, 6];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0 && array[i] < 10) {
    sum += array[i];
  }
}

console.log(sum);
