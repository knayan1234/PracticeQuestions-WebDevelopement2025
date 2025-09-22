/* Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.*/

function singleDigit(number, count = 1) {
  let numberToString = number.toString().split("").map(Number);
  let sum = numberToString.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  if (sum < 10) {
    let resArr = {
      sum: sum,
      count: count,
    };

    return resArr;
  } else {
    count++;
    return singleDigit(sum, count);
  }
}

let final = singleDigit(123);
console.log(final.sum, final.count);
let final1 = singleDigit(156);
console.log(final1.sum, final1.count);
