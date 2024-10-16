let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];

const mergeArrays = (arr1, arr2) => {
  return [arr1[0], arr1[1], ...arr2, arr1[2]];
};

console.log(mergeArrays(arr1, arr2));
