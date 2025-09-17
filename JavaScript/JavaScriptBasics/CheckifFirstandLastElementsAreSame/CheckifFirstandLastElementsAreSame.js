/* Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.  */

function check(arr) {
  if (arr[0] === arr[arr.length - 1]) return true;
  else return false;
}

console.log(check([1, 2, 1]));
console.log(check([1, 2, 3]));
console.log(check([1]));
console.log(check([1, 2]));
