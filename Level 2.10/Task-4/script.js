const array = [1, 2, 3, 3, 4, 5];

const twoIdentical = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    }
  }

  if (count >= 1) {
    return true;
  } else return false;
};

console.log(twoIdentical(array));
