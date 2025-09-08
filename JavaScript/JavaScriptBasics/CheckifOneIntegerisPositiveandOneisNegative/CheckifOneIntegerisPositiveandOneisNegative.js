/* Write a JavaScript program to check two given integers whether one is positive and another one is negative.   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkSigns(a, b) {
  return (a > 0 && b < 0) || (a < 0 && b > 0);
}

rl.question("Enter the first integer: ", (firstInput) => {
  const num1 = parseInt(firstInput);

  rl.question("Enter the second integer: ", (secondInput) => {
    const num2 = parseInt(secondInput);

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Please enter valid integers.");
    } else {
      const result = checkSigns(num1, num2);
      console.log(`One positive and one negative? ${result}`);
    }

    rl.close();
  });
});
