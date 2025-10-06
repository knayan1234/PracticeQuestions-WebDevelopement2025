/* Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.   - Same sliding window */

//need to check

function maxie(arr) {
  let maxDiff = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) > maxDiff) {
      maxDiff = Math.abs(arr[i] - arr[i + 1]);
    }
  }
  return maxDiff;
}
