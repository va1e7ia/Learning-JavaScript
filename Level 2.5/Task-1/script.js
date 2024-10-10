const string = "023m0df0dfg0";

const findNullPos = (str) => {
  let nullArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      nullArr.push(i);
    }
  }
  return nullArr;
};

console.log(findNullPos(string));
