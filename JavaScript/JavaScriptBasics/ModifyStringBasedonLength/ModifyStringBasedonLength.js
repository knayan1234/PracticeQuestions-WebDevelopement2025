/* Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function converStr(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    let firstThreeChar = str.slice(0, 3);
    let restOfString = str.slice(3);

    let newStr = firstThreeChar.toLowerCase() + restOfString;

    return newStr;
  }
}

rl.question("Enter your string: ", (str) => {
  console.log(converStr(str));
  rl.close();
});
