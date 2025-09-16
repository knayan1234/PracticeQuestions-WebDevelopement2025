/* Write a JavaScript program to convert letters of a given string alphabetically.   */

function convert(str) {
  //normal js wala way
  return str
    .split("")
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join("");

  // Bubble sort -other option
}

console.log(convert("dfbcqw"));
