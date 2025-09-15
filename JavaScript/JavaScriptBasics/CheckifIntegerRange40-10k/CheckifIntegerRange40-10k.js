/* Write a JavaScript program to check whether a given number exists in the range 40..10000. */

function checkRange(num) {
  if (num >= 40 && num <= 10000) {
    return console.log("Given number is between the range");
  } else {
    return console.log("Not in Range");
  }
}

checkRange(41);
checkRange(20);
checkRange(123123123);
