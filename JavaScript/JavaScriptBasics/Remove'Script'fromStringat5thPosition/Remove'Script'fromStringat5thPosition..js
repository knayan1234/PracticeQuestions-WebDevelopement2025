/* Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the sentence: ", (s) => {
  let orgStr = s;
  let boolCheck = orgStr.substring(4, 10) === "Script" ? true : false;
  let extract = boolCheck ? orgStr.substring(4, 10) : "";
  let newStr;
  if (!boolCheck) {
    console.log("'Script' is NOT present in the given string!");
    console.log(s);
    rl.close();
  } else {
    newStr = orgStr.replace(extract, "");
    console.log("'Script' is  present in the given string!");
    console.log(newStr);
    rl.close();
  }
});
