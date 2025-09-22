/* Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.  */

function strictlyIncr(arr) {
  let isStrict = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      isStrict = true;
    } else isStrict = false;
  }
  return isStrict;
}

console.log(strictlyIncr([1, 2, 3]));
console.log(strictlyIncr([1, 2, 2]));
console.log(strictlyIncr([-3, -2, -1]));
