/* Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numbers_ranges = (x, y) => {
  return console.log(
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
      (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  );
};

rl.question("Enter first number: ", (fnum) => {
  rl.question("Enter second number: ", (snum) => {
    let a = fnum;
    let b = snum;
    numbers_ranges(a, b);
    rl.close();
  });
});
