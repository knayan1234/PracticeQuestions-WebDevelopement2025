/* Write a JavaScript program to extract values at specified indexes from a specified array. */

function extractOut(arr, ...indexes) {
  let valueArray = [];
  for (let v of indexes) {
    valueArray.push(arr[v]);
  }
  return valueArray;
}

console.log(extractOut([4, 5, 6], 1, 2));
