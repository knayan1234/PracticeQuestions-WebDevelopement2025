/* Write a JavaScript program to find the number of even digits in a given integer.  */

function evenDigits(num) {
  let count = 0;
  let numArr = String(num).split("").map(Number);
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(evenDigits(123));
console.log(evenDigits(12468));
console.log(evenDigits(111111));
console.log(evenDigits(204));
