/*  Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number. */

function trailingZeros(n) {
  let count = 0;
  for (let p = 5; p <= n; p *= 5) {
    count += Math.floor(n / p);
  }
  return count;
}

console.log(trailingZeros(10));
