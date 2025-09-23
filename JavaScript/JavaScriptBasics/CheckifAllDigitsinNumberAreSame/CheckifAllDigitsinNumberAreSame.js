/* Write a JavaScript program to check whether all the digits in a given number are the same or not.   */

function check(num) {
  let numArr = String(num).split("").map(Number);
  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i] !== numArr[0]) {
      return false;
    }
  }
  return true;
}

console.log(check(123));
console.log(check(44444444));
console.log(check(1));
