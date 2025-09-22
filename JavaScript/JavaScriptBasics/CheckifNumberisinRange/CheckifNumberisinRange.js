/* Write a JavaScript program to check whether a given number is in a given range.  */

function givenRange(x, y, z) {
  return y >= x && y <= z;
}

console.log(givenRange(1, 2, 3));
console.log(givenRange(1, 2, -3));
