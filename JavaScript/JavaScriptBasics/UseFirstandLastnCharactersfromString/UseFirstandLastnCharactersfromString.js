/* Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n. */

function use(str, n) {
  let newstr = str;
  if (str.length < n) {
    return false;
  } else {
    newstr = str.substring(0, n) + str.substring(str.length - n, str.length);
    return newstr;
  }
}

console.log(use("ABC", 1));
console.log(use("ABC", 2));
console.log(use("ABC", 4));
console.log(use("ABCDE", 3));
