const string = "1 22 333 4444 22 5555 1";

const deleteMoreThanThree = (str) => {
  const strSplit = str.split(" ");
  let strArr = [];
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length < 4) {
      strArr.push(strSplit[i]);
    }
  }

  return strArr.join(" ");
};

console.log(deleteMoreThanThree(string));
