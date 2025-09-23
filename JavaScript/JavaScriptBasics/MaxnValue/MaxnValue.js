/* Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.  */

function maxInt(num) {
  let sum = 0;
  for (let n = 1; n <= num; n++) {
    sum += n;
    if (sum > num) {
      return n - 1;
    }
  }
  return num;
}
