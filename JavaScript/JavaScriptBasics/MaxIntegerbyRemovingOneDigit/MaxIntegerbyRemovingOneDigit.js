/* Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number */

function remove(num) {
  let numToStr = num.toString();
  let max = 0;

  for (let i = 0; i < numToStr.length; i++) {
    let candidate = numToStr.slice(0, i) + numToStr.slice(i + 1);
    let val = parseInt(candidate, 10);
    if (val > max) {
      max = val;
    }
  }
  return max;
}

console.log(maxByDeletingOneDigit(152)); // 52
console.log(maxByDeletingOneDigit(1001)); // 101
console.log(maxByDeletingOneDigit(10)); // 1
console.log(maxByDeletingOneDigit(9));
