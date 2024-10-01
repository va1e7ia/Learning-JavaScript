const array = [1, 2, 3, 4];
let newArr = [];

array.forEach((elem) => {
  newArr.push(elem - (elem * 10) / 100);
});

console.log(newArr);
