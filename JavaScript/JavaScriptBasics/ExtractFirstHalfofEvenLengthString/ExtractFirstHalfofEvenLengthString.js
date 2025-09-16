/* Write a JavaScript program to extract the first half of a even string.  */

function divideString(str) {
  if (str.length % 2 !== 0) {
    return false;
  } else {
    let strNewIndex = str.length / 2;
    let strNew = str.slice(0, strNewIndex);
    return strNew;
  }
}

console.log(divideString("ABCDEF"));
console.log(divideString("ABCDE"));
