/* Write a JavaScript program to reverse the elements of a given array of integers of length 3.   */

//1st option - use reverse method

//2nd
function reverseArray(arr) {
  let result = arr.map((el, i, array) => {
    return array[array.length - 1 - i];
  });
  return result;
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]

//3rd
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
