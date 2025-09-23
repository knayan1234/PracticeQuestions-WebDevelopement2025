/* Write a JavaScript program to change the capitalization of all letters in a given string.   */

function swapCase(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

// Example usage:
console.log(swapCase("Hello World!")); // hELLO wORLD!
console.log(swapCase("JavaScript123")); // jAVAsCRIPT123
