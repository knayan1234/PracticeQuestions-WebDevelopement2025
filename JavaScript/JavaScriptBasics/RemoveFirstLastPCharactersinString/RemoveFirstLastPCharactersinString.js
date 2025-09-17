/* Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.  */

function anotherStr(str) {
  let newStr = str;
  if (str.startsWith("P") || str.endsWith("P")) {
    newStr = str.substring(1, str.length - 1);
    return newStr;
  } else {
    return newStr;
  }
}

console.log(anotherStr("Python"));
console.log(anotherStr("PythonP"));
console.log(anotherStr("Lython"));
console.log(anotherStr("PP"));
