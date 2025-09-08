/* Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question("Enter your value: ", (val) => {
    if (isNaN(Number(val))) {
      console.log("Write numbers !! ");
      ask();
      return;
    } else {
      if (Number(val) > 19) {
        console.log(3 * Math.abs(Number(val) - 19));
        rl.close();
      } else {
        console.log(Math.abs(Number(val) - 19));
        rl.close();
      }
    }
  });
}
ask();
