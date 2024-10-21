const arr = [
  [2, 1, 4, 3, 5],
  [3, 5, 2, 4, 1],
  [4, 3, 1, 5, 2],
];

console.log(arr.map((subArray) => subArray.sort((el1, el2) => el1 - el2)));
