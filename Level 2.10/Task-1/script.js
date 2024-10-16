const string = "1 l0ve u";

const lessThanThreeLetters = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      count++;
    }
  }

  if (count === 3) {
    return "three letters";
  } else if (count <= 3) {
    return "less than three letters";
  } else return "more than three letters";
};

console.log(lessThanThreeLetters(string));
