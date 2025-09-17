/* Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

The program takes an array of three integers and rotates its elements to the left, meaning the first element moves to the end, the second element moves to the first position, and the third element moves to the second position. The modified array is then returned or displayed */

// Define a function named rotate_elements_left with a parameter array using arrow function syntax
const rotate_elements_left = (array) => {
  // Use array destructuring to rearrange elements
  const [second, third, first] = array;
  // Return a new array with elements rearranged
  return [second, third, first];
};

// Call the function with sample arguments and log the results to the console
console.log(rotate_elements_left([3, 4, 5]));
console.log(rotate_elements_left([0, -1, 2]));
console.log(rotate_elements_left([7, 6, 5]));

//confused.. Need to check
