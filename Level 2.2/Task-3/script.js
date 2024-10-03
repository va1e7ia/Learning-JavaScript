const string = "java scvirt";

const delPenult = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length - 1; i++) {
    newStr += str[i];
  }
  return newStr;
};

console.log(delPenult(string));
