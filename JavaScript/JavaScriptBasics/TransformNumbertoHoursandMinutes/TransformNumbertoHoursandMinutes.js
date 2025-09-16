/* Write a JavaScript application that transforms a provided numerical value into hours and minutes. */

function transform(num) {
  if (num < 60) {
    return `${num} mins`;
  } else {
    return `${Math.floor(num / 60)} hr ${
      num % 60 !== 0 ? `${num % 60} mins` : ""
    }`;
  }
}

console.log(transform(60));
console.log(transform(30));
console.log(transform(450));
console.log(transform(150));
console.log(transform(240));
