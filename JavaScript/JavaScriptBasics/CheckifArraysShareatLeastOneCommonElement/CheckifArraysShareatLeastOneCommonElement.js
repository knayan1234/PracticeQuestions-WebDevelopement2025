/* Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.*/

function checkArrays(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
      console.log("[Inside i block arr2.length]: ", i);
      for (let j = 0; j < arr1.length; j++) {
        console.log("[Inside j block arr2.length]: ", i, j);
        if (arr2[i] === arr1[j]) {
          console.log("[Inside if block arr2.length]: ", i, j);
          return true;
        }
      }
    }
    return false;
  } else if (arr1.length <= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      console.log("[Inside i block arr1.length]: ", i);
      for (let j = 0; j < arr2.length; j++) {
        console.log("[Inside j block arr1.length]: ", i, j);
        if (arr2[i] === arr1[j]) {
          console.log("[Inside if block arr1.length]: ", i, j);
          return true;
        }
      }
    }
    return false;
  }
}

console.log(checkArrays([1, 2, 3, 4], [4, 5, 6]));
console.log(checkArrays([4, 5, 6], [1, 2, 3]));

//best approach

function twoPointer(a, b) {
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] == b[j]) return true;
    if (a[i] < b[j]) i++;
    else j++;
  }
  return false;
}
