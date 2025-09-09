/* Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter you string to verify : ", (ans) => {
  if (ans.startsWith("Py")) {
    console.log(
      `Original string consists "Py", returning same string..... [${ans}]`
    );
    rl.close();
  } else {
    let prefixHardcoded = "Py";
    let userString = ans;
    let newString = prefixHardcoded + userString;
    console.log(
      `No "Py" found!! Adding prefix and returning.... [${newString}]`
    );
    rl.close();
  }
});
