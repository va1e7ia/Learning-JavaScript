const array = [2, 3, 4, -1, 2, -3, 4, 5, -6, 7, -1, 3, -2, -7];

const filterArr = (array) => {
  const filteredArr = array.filter((el) => el > 0);
  return filteredArr;
};

console.log(filterArr(array));
