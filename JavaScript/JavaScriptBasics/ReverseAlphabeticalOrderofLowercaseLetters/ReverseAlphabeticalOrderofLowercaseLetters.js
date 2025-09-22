/* Write a JavaScript program to change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.  */

function flipAlphabet(str) {
  let result = ""; // Build the new string here

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = char.charCodeAt(0); // Get ASCII code

    // Check if lowercase letter (ASCII 97-122)
    if (code >= 97 && code <= 122) {
      // Symmetric flip: 219 - code maps a(97) to z(122), etc.
      const newCode = 219 - code;
      result += String.fromCharCode(newCode); // Append transformed char
    } else {
      result += char; // Append unchanged
    }
  }

  return result;
}
