/* Write a JavaScript program to get the largest even number from an array of integers. */

function largest(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  for (i = sortedArr.length; i >= 0; i--) {
    if (arr[i] % 2 === 0) return arr[i];
  }
  return false;
}

console.log(largest([20, 40, 200]));
console.log(largest([20, 40, 200, 301]));
