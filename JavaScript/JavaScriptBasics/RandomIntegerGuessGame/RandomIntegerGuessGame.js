/* Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const computerRandomNumber = Math.floor(Math.random() * 10) + 1;

function askForGuess() {
  rl.question("Enter a number between 1 and 10: ", (answer) => {
    const guess = parseInt(answer);
    if (isNaN(guess) || guess < 1 || guess > 10 || !Number.isInteger(guess)) {
      console.log("Invalid input! Please enter an integer between 1 and 10.");
      askForGuess();
      return;
    }

    if (guess === computerRandomNumber) {
      console.log("Good Work");
    } else {
      console.log("Not matched");
    }
    rl.close();
  });
}

askForGuess();
