/* Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.   */

function createUpdatedString(str) {
  if (str.length <= 3) {
    return false;
  }
  let newStr = str.slice(-3).repeat(4);
  return newStr;
}

console.log(createUpdatedString("ABCDEF"));
console.log(createUpdatedString("AB"));
