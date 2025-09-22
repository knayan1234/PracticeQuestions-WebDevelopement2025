/* Write a JavaScript program to check if a given integer has an increasing digit sequence.  */

function increasingSeq(num) {
  let numArr = String(num).split("").map(Number);
  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i + 1] <= numArr[i]) return false;
  }
  return true;
}

console.log(increasingSeq(123));
console.log(increasingSeq(1223));
console.log(increasingSeq(45677));
