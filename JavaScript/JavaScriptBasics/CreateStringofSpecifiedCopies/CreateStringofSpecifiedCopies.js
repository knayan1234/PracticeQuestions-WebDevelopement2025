/* Write a JavaScript program to create one string of specified copies (positive numbers) of a given string. */

function createCopies(str, n) {
  let finalStr = str.repeat(n);
  return finalStr;
}

console.log(createCopies("Abc"));
