let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

const delLastEl = (arr1, arr2) => {
  const arr1Length = arr1.length;

  return arr2.slice(0, arr1Length);
};

console.log(delLastEl(arr1, arr2));
