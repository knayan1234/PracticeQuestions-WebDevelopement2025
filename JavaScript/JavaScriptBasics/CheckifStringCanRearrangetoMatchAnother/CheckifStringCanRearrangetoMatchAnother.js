/* Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.  */

function rearrangeCheck(str1, str2) {
  if (str1.length !== str2.length) return false;

  let strArr1 = str1.split("");
  let strArr2 = str2.split("");
  strArr1.sort();
  strArr2.sort();
  for (let i = 0; i < strArr1.length; i++) {
    if (strArr1[i] !== strArr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(rearrangeCheck("AaBsssssssssssssb", "bBaAz"));
