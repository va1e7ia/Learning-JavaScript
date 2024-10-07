const string1 = "Hello";
const string2 = "world";

const lastIsEqual = (str1, str2) => {
  if (str1.slice(-1) === str2.slice(-1)) {
    return "Equal!";
  } else return "Not Equal";
};

console.log(lastIsEqual(string1, string2));
