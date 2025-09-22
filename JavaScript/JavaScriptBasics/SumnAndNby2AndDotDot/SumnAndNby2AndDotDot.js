/* Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.
 */
/* 
number =8
8+ 8/2 + 8/4 +8/8 = 8+4+2+1 =15
 */
function recursiveDivision(num) {
  let result = 0;

  for (let n = 1; n <= num; n *= 2) {
    result += Math.floor(num / n);
  }

  return result;
}

console.log(recursiveDivision(8)); // 15
console.log(recursiveDivision(26)); // 49
