/* Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.*/

function absDiff(arr) {
  let differ = [];
  for (i = 0; i < arr.length - 1; i++) {
    differ.push(Math.abs(arr[i + 1] - arr[i]));
  }
  let ans = differ.reduce((sum, current) => {
    return sum + current;
  }, 0);
  return ans;
  //   return differ;
}

console.log(absDiff([2, 3, 4, 2]));
