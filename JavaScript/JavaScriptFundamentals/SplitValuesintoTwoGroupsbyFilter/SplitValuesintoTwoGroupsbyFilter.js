/* Write a JavaScript program to split values into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group. */

function sp(arr1, arr2) {
  let result = [];
  if (arr1.length !== arr2.length) return;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i]) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(sp(["beep", "boop", "foo", "bar"], [true, true, false, true]));
