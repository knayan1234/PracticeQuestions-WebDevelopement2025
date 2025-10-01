/* Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set a comparing rule. */

// Define a function called `reduce_Which` that returns the minimum element of an array based on a provided comparator function.
const reduce_Which = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a)); // Reduce the array and return the element that satisfies the comparator

// Example usage
console.log(reduce_Which([1, 3, 2])); // Returns the minimum element of the array
console.log(reduce_Which([10, 30, 20], (a, b) => b - a)); // Returns the maximum element of the array
console.log(
  reduce_Which(
    [
      { name: "Kevin", age: 16 },
      { name: "John", age: 20 },
      { name: "Ani", age: 19 },
    ],
    (a, b) => a.age - b.age
  )
); // Returns the object with the minimum age
