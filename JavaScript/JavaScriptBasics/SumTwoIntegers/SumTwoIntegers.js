/* Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    if (isNaN(a) || isNaN(b)) {
      console.log("Enter Numbers !");
      rl.close();
      return;
    } else {
      if (Number(a) === Number(b)) {
        console.log(
          `Same value entered, returning triple of their sum... Result is ${
            3 * (Number(a) + Number(b))
          }`
        );
        rl.close();
      } else {
        console.log(
          `Different values entered... Result is ${Number(a) + Number(b)}`
        );
        rl.close();
      }
    }
  });
});
