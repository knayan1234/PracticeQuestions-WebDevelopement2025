/* Write a JavaScript program to group the elements of a given array based on the given function. */

function grp(arr, fn) {
  return arr.reduce((acc, element) => {
    // Step 1: Get the grouping key
    // If fn is a function, call it; otherwise treat it as a property name
    const key = typeof fn === "function" ? fn(element) : element[fn];

    // Step 2: Initialize the group array if it doesn't exist
    if (!acc[key]) {
      acc[key] = [];
    }

    // Step 3: Add the current element to its group
    acc[key].push(element);

    // Step 4: Return the accumulator for the next iteration
    return acc;
  }, {}); // Start with an empty object
}

console.log(grp(["one", "two", "three"], "length"));
// Output: { '3': [ 'one', 'two' ], '5': [ 'three' ] }

console.log(grp(["one", "two", "three"], "length")); // Output: { '3': [ 'one', 'two' ], '5': [ 'three' ] }
