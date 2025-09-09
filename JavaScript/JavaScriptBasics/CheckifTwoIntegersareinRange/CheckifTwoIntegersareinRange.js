/* Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number: ", (n) => {
  const nConverted = Number(n);
  if (isNaN(nConverted)) {
    console.log("Enter valid number!!");
    rl.close();
    return;
  } else {
    if (n <= 99 && n >= 50) {
      console.log("true");
      rl.close();
    } else {
      console.log("false");
      rl.close();
    }
  }
});
