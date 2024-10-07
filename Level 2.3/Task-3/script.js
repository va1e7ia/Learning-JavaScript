const string = "12,34,56";

const findSum = (str) => {
  const strNum = str.split(",").map(Number);
  const sum = strNum.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

console.log(findSum(string));
