/* Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3. */

function is13(nums) {
  // Check if index of 1 is -1 (not found) and index of 3 is -1 (not found)
  if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1) {
    // If both values are not found, return true
    return true;
  } else {
    // If at least one of the values is found, return false
    return false;
  }
}

// Example usage
console.log(is13([7, 8])); // true, as neither 1 nor 3 is present
console.log(is13([3, 2])); // false, as 3 is present
console.log(is13([0, 1])); // false, as 1 is present
