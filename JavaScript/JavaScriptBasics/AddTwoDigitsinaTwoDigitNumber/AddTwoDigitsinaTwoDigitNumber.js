/* Write a JavaScript program to add two digits to a given positive integer of length two. */

function calculation(n) {
  let num = Number(n);
  let result = Math.floor(num / 10) + (num % 10);
  return result;
}

console.log(calculation(23));
console.log(calculation(21));
console.log(calculation(22));
