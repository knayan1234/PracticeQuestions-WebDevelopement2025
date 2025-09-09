/* Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter string: ", (s) => {
  let orgStr = s;
  let boolVal = orgStr.startsWith("Java") ? true : false;
  if (boolVal) {
    console.log("Yes");
    rl.close();
  } else {
    console.log("No");
    rl.close();
  }
});
