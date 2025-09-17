/* Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.   */

function alter(str) {
  let strNew = str.substring(str.length - 3) + str.substring(0, str.length - 3);
  console.log(strNew);
}

alter("helloo");
