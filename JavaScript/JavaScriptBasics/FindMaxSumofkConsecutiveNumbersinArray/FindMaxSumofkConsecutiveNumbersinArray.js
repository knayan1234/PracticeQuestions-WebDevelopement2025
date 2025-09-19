/* Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.  */

// THIS IS SLIDING WINDOW
// REDO

// function c(arr, k) {
//   let n = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < k; j++) {
//       n.push(arr[i]);
//     }
//     return n;
//   }
// }
function maxSumConsecutive(arr, k) {
  let maxSum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;

    for (let j = 0; j < k; j++) {
      currentSum += arr[i + j];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}
