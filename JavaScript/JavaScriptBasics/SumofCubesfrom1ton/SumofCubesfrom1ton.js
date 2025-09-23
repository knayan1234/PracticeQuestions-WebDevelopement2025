/* Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.   */

function sumOfCubes(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i ** 3; // i^3
  }
  return sum;
}

// Tests
console.log(sumOfCubes(3)); // 36 (1^3+2^3+3^3 = 36)
console.log(sumOfCubes(5)); // 225 (1+8+27+64+125)
