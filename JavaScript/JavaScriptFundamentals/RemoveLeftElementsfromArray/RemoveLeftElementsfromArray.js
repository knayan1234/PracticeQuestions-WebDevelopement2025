/* Write a JavaScript program to remove specified elements from the left of a given array of elements. */

function removeLeft(arr, n) {
  let arrNew = [];
  arrNew = arr.slice(n);
  return arrNew;
}

console.log(removeLeft([1, 2, 3, 4], 2));
