/* Write a JavaScript program to remove a character at the specified position in a given string and return the modified string */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.question("Enter the string: ", (str) => {
    rl.question("What is the character you want to remove: ", (char) => {
      rl.question("At what position: ", (pos) => {
        let orgStr = str;
        let indexToRemove = Number(pos);
        let newStr;
        if (orgStr[indexToRemove] !== char) {
          console.log("Enter correct char!");
          ask();
        } else {
          newStr = orgStr
            .slice(0, indexToRemove)
            .concat(orgStr.slice(indexToRemove + 1));
          console.log(`New string: - ${newStr}`);
          rl.close();
        }
      });
    });
  });
}

ask();
