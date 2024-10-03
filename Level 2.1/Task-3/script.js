const array = [1, 2, 3, 4, 2, 5, 6, 2, 1, 3, 2, 5, 7, 5, 2, 3, 4];
const dele = 2;

const deleEl = (arr, dele) => {
  const newArr = arr.filter((el) => el !== dele);
  return newArr;
};

console.log(deleEl(array, dele));
