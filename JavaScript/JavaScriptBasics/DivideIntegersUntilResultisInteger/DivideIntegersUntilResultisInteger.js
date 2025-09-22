/* Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.*/

function divideRecursively(dividend, divisor) {
  let res = dividend / divisor;
  if (Number.isInteger(res)) {
    return divideRecursively(res, divisor); // recurse
  }
  return dividend;
}
console.log(divideRecursively(-12, 2));
