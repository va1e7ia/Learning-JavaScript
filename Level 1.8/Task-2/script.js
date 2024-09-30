let arr = [];

function arrFrom1To100Even(arr) {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(arrFrom1To100Even(arr));
