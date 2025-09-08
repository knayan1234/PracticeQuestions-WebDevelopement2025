/* Write a JavaScript program to get the difference between a given number and 13
 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question(
    "What is the number you want to get subtracted by 13: ",
    (val) => {
      if (isNaN(Number(val))) {
        console.log("Enter number!!");
        ask();
        return;
      }
      console.log(`The result is ${Number(val) - 13}`);
      rl.close();
    }
  );
}
ask();
