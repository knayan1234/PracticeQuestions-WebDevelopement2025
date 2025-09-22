/* Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it. */

function isPallindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function shortestPalindrome(str) {
  if (isPalindrome(str)) return str;

  for (let i = 0; i < str.length; i++) {
    let substring = str.slice(i);
    if (isPalindrome(substring)) {
      let toAdd = str.slice(0, i).split("").reverse().join("");
      return str + toAdd;
    }
  }
}

console.log(shortestPalindrome("abc")); // "abcba"
console.log(shortestPalindrome("race")); // "racecar"
console.log(shortestPalindrome("aab")); // "aabaa"
