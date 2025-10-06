/* Write a JavaScript program to get every nth element in a given array. */

function getNth(arr, n) {
  //i is index
  return arr.filter((_, i) => i % n === n - 1);
}

console.log(getNth([1, 2, 3, 4, 6], 3));
