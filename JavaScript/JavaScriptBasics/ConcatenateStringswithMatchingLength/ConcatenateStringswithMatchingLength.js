/* Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.   */

// function con(str1, str2) {
//   let finalstr1 = str1;
//   let finalstr2 = str2;
//   let newString = "";
//   if (str1.length > str2.length) {
//     let diff = str1.length - str2.length;
//     finalstr1 = str1.slice(0, str1.length - diff);
//     newString = finalstr1 + finalstr2;
//     return newString;
//   } else if (str1.length < str2.length) {
//     let diff = str2.length - str1.length;
//     finalstr2 = str2.slice(0, str2.length - diff);
//     newString = finalstr1 + finalstr2;
//     return newString;
//   } else if (str1.length === str2.length) {
//     finalstr1 = str1;
//     finalstr2 = str2;
//     newString = finalstr1 + finalstr2;
//     return newString;
//   }
// }

function con(str1, str2) {
  let targetLength = Math.min(str1.length, str2.length);
  return str1.slice(0, targetLength) + str2.slice(0, targetLength);
}

console.log(con("Nayan", "Nishu123"));
