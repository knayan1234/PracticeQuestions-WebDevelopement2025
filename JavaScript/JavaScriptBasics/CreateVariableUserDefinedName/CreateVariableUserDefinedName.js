/* Write a JavaScript exercise to create a variable using a user-defined name.   */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const valueToAssign = "abcdef";

rl.question("Enter the name of the variable: ", (varName) => {
  eval(`global.${varName} = "${valueToAssign}";`);
  console.log(
    `Variable created! Now you can access: ${varName} = ${global[varName]}`
  );
  rl.close();
});
