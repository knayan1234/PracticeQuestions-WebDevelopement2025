/* Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.  */

// Function to check if input array is a permutation of [1, 2, 3, ..., n]
const is_permutation = (input_arr, n) => {
  // Loop through each element from 1 to n
  for (let i = 0; i < n; i++) {
    // Check if the current element is not found in the input array
    if (input_arr.indexOf(i + 1) < 0) {
      return false; // If not found, it's not a permutation
    }
  }
  return true; // If all elements are found, it's a permutation
};

// Test cases
console.log(is_permutation([1, 2, 3, 4, 5], 5)); // Output: true (permutation of [1, 2, 3, 4, 5])
console.log(is_permutation([1, 2, 3, 5], 5)); // Output: false (not a permutation of [1, 2, 3, 4, 5])

//REcheck
