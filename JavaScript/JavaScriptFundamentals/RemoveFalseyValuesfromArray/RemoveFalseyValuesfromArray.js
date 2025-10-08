/* Write a JavaScript program to remove false values from a given array. */

function filteredArray(arr) {
  return arr.filter((element) => element);
}

/* filter takes the boolean value as return value from function.. if we give it the element itself as a return value, it will check boolean value only lie true of "abc" */

console.log(filteredArray([false, NaN, "e" * 23]));
