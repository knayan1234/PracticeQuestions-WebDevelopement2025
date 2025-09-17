/*  Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.  */

function arrModification(arr) {
  let arrNew = [];
  arrNew = [arr[0], arr[arr.length - 1]];
  return arrNew;
}

console.log(arrModification([1, 2, 3, 4]));
