/* Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function computeSum(a, b) {
  let number1 = Number(a);
  let number2 = Number(b);
  if (isNaN(number1) || isNaN(number2)) {
    console.error("Invalid numbers entered!");
    return;
  }
  let sum = number1 + number2;
  if (sum >= 50 && sum <= 80) {
    console.log("Sum is between range 50..80, retuning ... 65");
    return;
  } else console.log("Sum is not in between range 50..80, retuning ... 80");
}

rl.question("Enter first number: ", (fn) => {
  rl.question("Enter second number: ", (sn) => {
    computeSum(fn, sn);
    rl.close();
  });
});
