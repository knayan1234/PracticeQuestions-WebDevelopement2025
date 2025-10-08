/* Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length. */

function pad(str, n = 3) {
  if (str.length <= n) {
    return console.log(str.padStart(3, "X"));
  }
}

pad("av");
