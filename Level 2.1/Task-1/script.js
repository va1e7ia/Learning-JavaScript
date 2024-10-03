const string = "heh find 0 in da str0ing";

const find0InString = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "0") {
      console.log("Position: " + (i + 1));
      break;
    }
  }
};

find0InString(string);
