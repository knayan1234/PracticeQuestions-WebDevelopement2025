/* Write a JavaScript program to find the number of elements in both arrays. */

function numberOfElements(arr1, arr2) {
  let lengths = {
    length1: 0,
    length2: 0,
  };
  lengths.length1 = arr1.length;
  lengths.length2 = arr2.length;
  return lengths;
}

console.log(numberOfElements([1, 2], [4, 5, 6, 7]));
