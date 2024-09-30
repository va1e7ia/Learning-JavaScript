const arr = [1.456, 2.125, 3.32, 4.1, 5.34];
let arrFix = [];

for (let i = 0; i < arr.length; i++) {
  arrFix.push(Number(arr[i].toFixed(1)));
}

console.log(arrFix);
