/* Write a JavaScript program to convert a specified number into an array of digits */

function convertToNumArray(num) {
  return console.log(String(num).split("").map(Number));
}

convertToNumArray(1234);
