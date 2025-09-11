/* Write a JavaScript program to find the closest value to 100 from two numerical values. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (fnum) => {
  rl.question("Enter second number: ", (snum) => {
    let first = Number(fnum);
    let second = Number(snum);
    let diff = 100 - first < 100 - second ? true : false;
    if (!isNaN(first) && !isNaN(second)) {
      if (first > 100 || second > 100) {
        console.log("Enter number less than 100!");
        rl.close();
      } else {
        if (diff) {
          console.log("First is near to 100!");
          rl.close();
        } else {
          console.log("Second is near to 100!");
          rl.close();
        }
      }
    }
  });
});
