/* Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (first) => {
  rl.question("Enter second number: ", (second) => {
    let f = Number(first);
    let s = Number(second);
    if (isNaN(f) || isNaN(s)) rl.close();
    else {
      if (f >= 40 && s <= 60 && s >= 40 && f <= 60) {
        console.log("Number is between 40 and 60");
        if (f > s) {
          console.log(`${f} is greater than ${s}`);
          rl.close();
        } else if (s > f) {
          console.log(`${s} is greater than ${f}`);
          rl.close();
        } else {
          console.log("Both are equal");
          rl.close();
        }
      } else {
        console.log("Not in range of 40 and 60");
        rl.close();
      }
    }
  });
});
