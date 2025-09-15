/* Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.  */

function checkRightMost(p, q, r) {
  return p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;
}

console.log(checkRightMost(10, 20, 30));
console.log(checkRightMost(12, 14, 22));
