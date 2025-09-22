/* Write a JavaScript program to remove all characters from a given string that appear more than once.*/

function removeDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // If first and last occurrence are the same, it appears exactly once
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      result += char; // Append to result
    }
  }
  return result;
}
