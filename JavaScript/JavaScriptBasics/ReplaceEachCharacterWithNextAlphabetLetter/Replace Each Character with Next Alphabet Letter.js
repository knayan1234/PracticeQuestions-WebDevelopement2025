/* Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  */

function checkString(str) {
  let newStr = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) < 90) {
      newStr += String.fromCharCode(str[i].charCodeAt(0) + 1);
    }
    if (str[i].charCodeAt(0) === 90) {
      newStr += String.fromCharCode(65);
    }
    if (str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) < 122) {
      newStr += String.fromCharCode(str[i].charCodeAt(0) + 1);
    }
    if (str[i].charCodeAt(0) === 122) {
      newStr += String.fromCharCode(97);
    } else {
      newStr += str[i]; //for nos and sp chars
    }
  }
  return newStr;
}

console.log(checkString("abc"));
console.log(checkString("XYZ"));
console.log(checkString("Hello123"));
console.log(checkString("test!@#"));
