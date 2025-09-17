/* Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.*/

//Making generalized function

function sumOfArray(arr) {
  let result = arr.reduce((acc, current) => {
    return acc + current;
  }, 0);
  return result;
}

function sumOfArray2(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(sumOfArray([2, 4, 6, 2]));
console.log(sumOfArray2([2, 4, 6, 2]));
