/* Write a JavaScript program to concatenate two strings except for their first character.   */

function concatenate(str1, str2) {
  let strNew = str1.substring(1) + " " + str2.substring(1);
  return strNew;
}

console.log(concatenate("HHello", "NNayan"));
