/* Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise. */

function check(arr, fn) {
  return arr.every(fn);
}

console.log(check([4, 2, 3], (x) => x > 2));
