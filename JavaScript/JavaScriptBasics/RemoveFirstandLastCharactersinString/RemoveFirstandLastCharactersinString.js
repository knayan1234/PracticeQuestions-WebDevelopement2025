/* Write a JavaScript program to create a new string without the first and last characters of a given string.   */

function removeFirstAndLast(str) {
  let newStr = str.slice(1, str.length - 1);
  return newStr;
}

console.log(removeFirstAndLast("ABCDEF"));
