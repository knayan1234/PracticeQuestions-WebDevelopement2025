/* Write a JavaScript program to compute the sum of all the digits that occur in a given string.*/

function sumDigits(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (!isNaN(ch) && ch !== " ") {
      sum += Number(ch);
    }
  }

  return sum;
}
