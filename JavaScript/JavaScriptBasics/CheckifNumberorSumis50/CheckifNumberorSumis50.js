/* Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question("Enter First number: ", (first) => {
    rl.question("Enter Second number: ", (second) => {
      if (isNaN(Number(first)) || isNaN(Number(second))) {
        console.log("Enter Numbers !");
        ask();
        return;
      } else {
        if (
          Number(first) + Number(second) === 50 ||
          Number(first) === 50 ||
          Number(second) === 50
        ) {
          console.log("true");
          rl.close();
        } else {
          console.log("false");
          rl.close();
        }
      }
    });
  });
}

ask();
