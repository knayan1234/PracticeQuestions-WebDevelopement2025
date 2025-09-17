/* Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3. */

function test(nums) {
  return nums.includes(1) || nums.includes(3);
}

// Example usage
console.log(test([1, 5]));
console.log(test([2, 3]));
console.log(test([7, 5]));
