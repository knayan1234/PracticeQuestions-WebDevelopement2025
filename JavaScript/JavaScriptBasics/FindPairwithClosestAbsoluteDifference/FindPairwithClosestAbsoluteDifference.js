/* Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.*/

function difference(arr, n) {
  let bestDifference = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let currentDifference = Math.abs(arr[i] - arr[j]);
      if (currentDifference <= n && currentDifference > bestDifference) {
        bestDifference = currentDifference;
      }
    }
  }
  return bestDifference;
}

// console.log(difference([4, 6, 8, 13], 3));
console.log(difference([12, 10, 33, 34], 10));
// console.log(difference([1, 12, 4, 5], 2));
