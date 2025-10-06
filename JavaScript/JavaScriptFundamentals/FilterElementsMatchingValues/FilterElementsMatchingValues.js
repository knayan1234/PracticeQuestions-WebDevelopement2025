/* Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values. */

function value(arr, ...args) {
  return arr.filter((v) => !args.includes(v));
}

const n = value([1, 2, 3, 1], 1);
console.log(n);
