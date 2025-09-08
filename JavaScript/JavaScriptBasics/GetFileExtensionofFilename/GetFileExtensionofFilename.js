/* Write a JavaScript exercise to get the filename extension.   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter fileName with extension: ", (fileName) => {
  let arr = fileName.split(".");
  let howMuchLength = arr.length;
  let extension = arr[howMuchLength - 1];
  console.log(extension);
});

//not included edge cases
