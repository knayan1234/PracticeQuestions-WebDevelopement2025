/* Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string: ", (str) => {
  console.log(`Your entered string is \n ${str}`);
  let orgStr = str;
  let chatAtFirst = orgStr.at(0);
  let newStr = chatAtFirst + orgStr.slice(0) + chatAtFirst;
  console.log(`Your new string is \n ${newStr}`);
  rl.close();
});
