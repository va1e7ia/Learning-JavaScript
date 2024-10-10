const string = "aaa bbb ccc eee fff";

const splitAndUpperCase = (str) => {
  let words = str.split(" ");

  for (let i = 1; i < words.length; i += 2) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};

console.log(splitAndUpperCase(string));
