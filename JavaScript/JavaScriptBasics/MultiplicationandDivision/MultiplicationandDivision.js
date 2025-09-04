/* Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function doMath() {
  let firstNum;
  let secondNum;
  let operator;
  let output;

  rl.question("Enter First number: ", (a) => {
    firstNum = Number(a);
    if (isNaN(firstNum)) {
      console.log("First Input is Not a number!");
      rl.close();
      return;
    }
    rl.question("Enter Second number: ", (b) => {
      secondNum = Number(b);
      if (isNaN(secondNum)) {
        console.log("Second Input is Not a number!");
        rl.close();
        return;
      }
      rl.question(`Enter Operator (type "mul" or type "div"):  `, (o) => {
        if (firstNum < 0 || secondNum < 0) {
          console.log("Enter positive numbers !!");
          rl.close();
          return;
        }
        operator = o.trim().toLowerCase();
        if (operator === "mul" || operator === "div") {
          console.log(
            `First Number is ${firstNum}, Second number is ${secondNum}, and Operator is ${operator}`
          );
          if (operator === "mul") {
            output = firstNum * secondNum;
          } else {
            // operator === "div"
            if (secondNum === 0 || firstNum === 0) {
              console.log("Can't divide by zero!");
              rl.close();
              return;
            }
            const numerator = Math.max(firstNum, secondNum);
            const denominator = Math.min(firstNum, secondNum);
            output = numerator / denominator;
          }
          console.log(`Output is: ${output}`);
        } else {
          console.log(`Incorrect attempt - Type either "mul" or "div" !!`);
        }
        rl.close();
      });
    });
  });
}

doMath();
