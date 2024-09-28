const array = [1, 4, 16, 25, 36];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += Math.sqrt(array[i]);
}

console.log(sum);
