/* Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an integer: ", (input) => {
  const num = parseInt(input);
  const isWithinRange = Math.abs(num - 100) <= 20 || Math.abs(num - 400) <= 20;

  console.log(isWithinRange);

  rl.close();
});
