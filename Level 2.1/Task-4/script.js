const array = [1, 2, 3, 4, 5, 6, 7, 10];

const halfSum = (array) => {
  let sum = 0;
  for (let i = 0; i < Math.round(array.length / 2); i++) {
    sum += array[i];
  }
  return sum;
};

console.log(halfSum(array));
