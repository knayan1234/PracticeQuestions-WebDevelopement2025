/* Write a JavaScript program to replace all numbers with a specified number in an array of integers.  */

function replace(arr, num) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = num;
  }
  return arr;
}

console.log(replace([2, 3, 4, 5], 1));
