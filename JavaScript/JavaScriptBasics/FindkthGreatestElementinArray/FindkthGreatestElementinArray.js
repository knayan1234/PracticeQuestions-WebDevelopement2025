/* Write a JavaScript program to find the kth greatest element in a given array of integers.*/

function greatest(arr, k = 1) {
  let newArr = [...new Set(arr.sort((a, b) => b - a))];
  return newArr[k - 1];
}

console.log(greatest([1, 3, 4, 3, 2, 6, 5], 1)); // 6
console.log(greatest([1, 3, 4, 3, 2, 6, 5], 2)); // 5
console.log(greatest([1, 3, 4, 3, 2, 6, 5], 3)); // 4
