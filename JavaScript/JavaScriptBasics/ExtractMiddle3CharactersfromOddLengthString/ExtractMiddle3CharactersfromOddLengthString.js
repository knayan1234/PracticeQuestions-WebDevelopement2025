/* Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.  */

function create(str) {
  let checkOddorEven = str.length % 2 !== 0 ? true : false;
  if (checkOddorEven) {
    let middleCharIndex = (str.length + 1) / 2 - 1;
    let strNew =
      str[middleCharIndex - 1] +
      str[middleCharIndex] +
      str[middleCharIndex + 1];
    return strNew;
  } else {
    console.error("Its even");
  }
}

console.log(create("ABCDEFG"));
