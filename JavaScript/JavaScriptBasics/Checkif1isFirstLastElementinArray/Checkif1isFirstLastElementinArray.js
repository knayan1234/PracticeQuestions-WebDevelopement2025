/* Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.*/

function checkAppear(arr) {
  if (arr.length === 0) {
    return false;
  } else {
    return arr[0] === 1 || arr[arr.length - 1] === 1 ? true : false;
  }
}

let check = checkAppear([1, 2, 3]);
let check2 = checkAppear([2, 3]);
let check3 = checkAppear([2, 3, 1]);

console.log(check, check2, check3);
