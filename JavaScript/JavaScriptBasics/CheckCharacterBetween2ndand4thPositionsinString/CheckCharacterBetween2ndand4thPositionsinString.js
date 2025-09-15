/* Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkCharInStr(str, char) {
  let trimmedChar = char.trim();
  if (str.length < 4 || trimmedChar.length == 0) {
    console.log(
      "Enter string of length 4 or greater than 4 OR enter a valid char"
    );
    return;
  }
  let smallStr = str.substring(1, 4);
  if (smallStr.includes(char)) {
    console.log(
      `${char} is present in between 2nd and 4th position of String: ${str}`
    );
  } else {
    console.log("Not present in the given string!");
  }
}

rl.question("Enter string: ", (str) => {
  rl.question("Enter character to check: ", (char) => {
    checkCharInStr(str, char);
    rl.close();
  });
});
