const array = [1, 2, 3, 4, 5, 6, 7];

const divSum = (arr) => {
  const firstHalf = arr.slice(0, arr.length / 2);
  const secondHalf = arr.slice(arr.length / 2);

  const sumFirstHalf = (firstHalf) => {
    let firstSum = 0;
    firstHalf.forEach((el) => {
      firstSum += el;
    });
    return firstSum;
  };

  const sumSecondHalf = (secondHalf) => {
    let secondSum = 0;
    secondHalf.forEach((el) => {
      secondSum += el;
    });
    return secondSum;
  };
  const div = sumFirstHalf(firstHalf) / sumSecondHalf(secondHalf);
  return div;
};

console.log(divSum(array));
