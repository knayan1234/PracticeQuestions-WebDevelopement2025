/* Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

Sample sequence = [1,2,3,4,5,6,7,8]
Given number: 5
Output: 2 */

function firstOcc(arr, num) {
  let length = arr.findIndex((el) => el === num);
  let countOfEvenValues = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] % 2 === 0) {
      countOfEvenValues += 1;
    }
  }
  return countOfEvenValues;
}

console.log(firstOcc([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(firstOcc([1, 3, 5, 6, 7, 8], 6));
