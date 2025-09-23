/* Write a JavaScript program to swap two halves of a given array of integers of even length.  */

function swaparr(arr) {
  if (arr.length % 2 !== 0) return;
  let midIndex = arr.length / 2;
  let firstHalf = arr.slice(0, midIndex);
  let secondHalf = arr.slice(midIndex);

  return [...secondHalf, ...firstHalf];
}

console.log(swaparr([1, 2, 3, 4, 5, 6]));
