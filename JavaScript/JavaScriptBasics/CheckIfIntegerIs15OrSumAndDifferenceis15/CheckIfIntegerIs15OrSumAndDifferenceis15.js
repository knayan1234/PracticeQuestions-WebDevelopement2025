/* Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15 */

function checkTwoInt(a, b) {
  if (x === 15 || y === 15 || Math.abs(a - b) === 15 || a + b === 15) {
    return true;
  }
}

console.log(checkTwoInt(15, 9));
console.log(checkTwoInt(1, 16));
console.log(checkTwoInt(13, 2));
