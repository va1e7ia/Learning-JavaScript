const firstString = "Hello";
const secondString = "world!";
function sameFirstLetter(str1, str2) {
  if (str1[0] === str2[0]) {
    return "First letter is same!";
  } else return "First letter is different!";
}
console.log(sameFirstLetter(firstString, secondString));
