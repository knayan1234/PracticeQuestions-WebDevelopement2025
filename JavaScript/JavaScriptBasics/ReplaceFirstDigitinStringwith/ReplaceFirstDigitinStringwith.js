/* Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character. */

function replaceFirst(str) {
  let newStr = str.replace(str[0], "$");
  return newStr;
}

console.log(replaceFirst("abc"));
