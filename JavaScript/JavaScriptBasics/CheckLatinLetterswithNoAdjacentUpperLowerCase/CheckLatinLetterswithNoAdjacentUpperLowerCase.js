/* Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.  */

function contain(str) {
  for (let i = 0; i < str.length - 1; i++) {
    const cur = str.charCodeAt(i);
    const next = str.charCodeAt(i + 1);

    if (cur >= 65 && cur <= 90 && next >= 65 && next <= 90) {
      return true;
    }

    if (cur >= 97 && cur <= 122 && next >= 97 && next <= 122) {
      return true;
    }
  }
  return false;
}

console.log(contain("aB"));
console.log(contain("AB"));
console.log(contain("abCde"));
console.log(contain("A1B"));
console.log(contain("z"));
console.log(contain("xYr"));
