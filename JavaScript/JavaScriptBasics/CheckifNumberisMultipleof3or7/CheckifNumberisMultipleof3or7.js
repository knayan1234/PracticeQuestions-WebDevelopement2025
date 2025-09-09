/* Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question("What is the number you want to test: ", (num) => {
    let numConvert = Number(num);
    if (isNaN(numConvert)) {
      console.log("Enter a valid number!");
      ask();
    } else {
      if (numConvert % 3 === 0 || numConvert % 7 === 0) {
        console.log(`You number ${numConvert} is divisible by 3 or 7`);
        rl.close();
      } else {
        console.log(`You number ${numConvert} is not divisble by 3 or 7`);
        rl.close();
      }
    }
  });
}
ask();
