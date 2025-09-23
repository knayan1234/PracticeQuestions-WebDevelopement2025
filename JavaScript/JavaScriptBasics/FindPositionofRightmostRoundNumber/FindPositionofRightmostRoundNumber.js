/* Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.  
Note: A round number is informally considered to be an integer that ends with one or more zeros. */

function roundNumber(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 10 === 0) {
      return i + 1;
    }
  }
  return 0;
}

// Tests
console.log(roundNumber([1, 22, 30, 54, 56])); // 3 (30 is at position 3)
console.log(roundNumber([5, 12, 47])); // 0 (no round number)
console.log(roundNumber([10, 20, 33, 40, 55])); // 4 (40 is last round number)
