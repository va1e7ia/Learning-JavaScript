const string = "2024-10-07";

const toObject = (str) => {
  const [year, month, date] = str.split("-");
  return {
    year: year,
    month: month,
    day: date,
  };
};

console.log(toObject(string));
