/* Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.*/

function alternate(arr) {
  let firstPart = [];
  let secondPart = [];
  let result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i % 2 == 0) {
      firstPart.push(arr[i]);
    } else {
      secondPart.push(arr[i]);
    }
  }
  let resultFirst = firstPart.reduce((acc, current) => {
    return acc + current;
  }, 0);
  let resultSecond = secondPart.reduce((acc, current) => {
    return acc + current;
  }, 0);

  result.push(resultFirst, resultSecond);
  return result;
}

function secondWay(arr) {
  let firstPart = 0;
  let secondPart = 0;
  let result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i % 2 == 0) {
      firstPart += arr[i];
    } else {
      secondPart += arr[i];
    }
  }
  result.push(firstPart, secondPart);
  return result;
}

function alternateReduce(arr) {
  return arr.reduce(
    (result, value, index) => {
      result[index % 2] += value;
      //2 se divide karo, remainer ya to 0 aayega ya 1, that is result ka 0 index ya 1 index, or value add ho rha hai
      return result;
    },
    [0, 0]
  );
}

console.log(alternate([1, 2, 3, 5]));
console.log(secondWay([1, 2, 3, 5]));
console.log(alternateReduce([1, 2, 3, 5]));
