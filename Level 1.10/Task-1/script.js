const length = 10;
const min = 1;
const max = 100;
const numbers = [...Array(length)].map(() =>
  Math.round(Math.random() * (max - min + 1))
);

console.log(numbers);
