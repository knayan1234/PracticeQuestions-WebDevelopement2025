/* Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (fn) => {
  rl.question("Enter second number: ", (sn) => {
    let A = Number(fn);
    let B = Number(sn);
    if (isNaN(A) || isNaN(B)) console.error("Enter valid number!");
    let diff = Math.abs(A - B);
    let sum = A + B;
    if (A === 8 || B === 8 || sum === 8 || diff === 8) {
      console.log("Either A or B or Sum or Diff is 8");
      rl.close();
    } else {
      console.log("Neither A or B or Sum or Diff is 8 ");
      rl.close();
    }
  });
});
