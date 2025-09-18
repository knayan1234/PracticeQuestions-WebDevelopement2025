/* Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.   */

function checking_numbers(x, y, divisor) {
  if (
    (x % divisor === 0 && y % divisor === 0) ||
    (x % divisor !== 0 && y % divisor !== 0)
  ) {
    return true;
  }
  return false;
}

console.log(checking_numbers(10, 25, 5)); // true
console.log(checking_numbers(10, 20, 5)); // true
console.log(checking_numbers(10, 20, 4)); // false
