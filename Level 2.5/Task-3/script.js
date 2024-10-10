const array = [1, 2, 3, 4, 5, 6];

const divisionEvenPlusOdd = (arr) => {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sumEven += arr[i];
    } else sumOdd += arr[i];
  }
  return sumEven / sumOdd;
};

console.log(divisionEvenPlusOdd(array));
