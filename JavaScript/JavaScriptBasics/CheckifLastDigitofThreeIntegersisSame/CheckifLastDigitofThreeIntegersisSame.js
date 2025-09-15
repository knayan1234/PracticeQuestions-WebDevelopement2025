/* Write a JavaScript program that checks whether the last digit of three positive integers is the same. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkLastIsSame(a, b, c) {
  let first = Number(a);
  let second = Number(b);
  let third = Number(c);

  if (isNaN(first) || isNaN(second) || isNaN(third)) {
    console.log("Enter valid numbers!");
    return;
  } else {
    let lNum1 = first % 10;
    let lNum2 = second % 10;
    let lNum3 = third % 10;
    if (lNum2 === lNum1 && lNum3 === lNum1) {
      console.log(`${lNum1}, ${lNum2}, ${lNum3} are equal !`);
    } else {
      console.log(`${lNum1}, ${lNum2}, ${lNum3} are not equal !`);
    }
  }
}

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    rl.question("Enter third number: ", (c) => {
      checkLastIsSame(a, b, c);
      rl.close();
    });
  });
});
