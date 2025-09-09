/* Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter string: ", (s) => {
  let orgStr = s;
  let lastThreeChars = orgStr.substring(orgStr.length - 3);
  let newString = lastThreeChars + orgStr + lastThreeChars;
  if (orgStr.length < 3) {
    console.log("Enter a string whose length is more than 3");
    rl.close();
  } else {
    console.log(`This is the new string:\n ${newString}`);
    rl.close();
  }
});
