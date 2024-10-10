const array = [1, 2, 3, 4, 5, 6];

const createNums = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      let concat = arr[i].toString() + arr[i + 1].toString();
      newArr.push(parseInt(concat));
    }
  }
  return newArr;
};

console.log(createNums(array));
