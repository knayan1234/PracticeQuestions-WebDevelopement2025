/* Write a JavaScript program to count the number of vowels in a given string. */

function count(str) {
  let count = 0;
  let strArr = str.trim().toLowerCase().split("");
  console.log(strArr);
  for (let i = 0; i <= strArr.length - 1; i++) {
    if (["a", "e", "i", "o", "u"].includes(strArr[i])) {
      count += 1;
    }
  }
  return count;
}
console.log(count("abacde"));
