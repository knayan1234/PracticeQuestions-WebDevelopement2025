/* Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)  */

function correctSentence(str) {
  if (str.length === 0) return false;

  const firstChar = str[0];
  const isFirstUpper = firstChar >= "A" && firstChar <= "Z";

  const isLastDot = str.endsWith(".");

  return isFirstUpper && isLastDot;
}

// Test cases
console.log(
  correctSentence(
    "This tool will help you write better English and efficiently corrects texts."
  )
); // true

console.log(
  correctSentence(
    "This tool will help you write better English and efficiently corrects texts"
  )
); // false

console.log(
  correctSentence(
    "this tool will help you write better English and efficiently corrects texts."
  )
); // false
