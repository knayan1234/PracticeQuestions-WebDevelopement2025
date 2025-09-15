/* Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkThreeNos(A, B, C) {
  let firstNumber = Number(A);
  let secondNumber = Number(B);
  let thirdNumber = Number(C);
  if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
    console.error("Enter vslid numbers!");
    return;
  }
  if (firstNumber === 40 && secondNumber === 40 && thirdNumber === 40) {
    console.log("All three numbers are 40...returning 30");
  } else if (
    firstNumber === 40 &&
    (secondNumber === 40 || thirdNumber === 40)
  ) {
    console.log("Two numbers are 40... returning 40");
    return;
  } else console.log("No number is 40....returning 20");
}

rl.question("Enter first number: ", (f) => {
  rl.question("Enter second number: ", (s) => {
    rl.question("Enter third number: ", (t) => {
      checkThreeNos(f, s, t);
      rl.close();
    });
  });
});
