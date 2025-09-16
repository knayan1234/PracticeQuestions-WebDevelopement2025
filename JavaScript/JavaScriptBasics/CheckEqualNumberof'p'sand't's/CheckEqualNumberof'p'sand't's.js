/* Write a JavaScript program to check whether a given string contains an equal number of p's and t's. */

function check(str) {
  let pCount = 0;
  let qCount = 0;
  let strArr = str.trim().toLowerCase().split("");

  for (let i = 0; i <= strArr.length - 1; i++) {
    if (strArr[i] === "p") {
      pCount += 1;
    }
    if (strArr[i] === "t") {
      qCount += 1;
    }
  }
  console.log(pCount, qCount);
  if (pCount == qCount) {
    return true;
  } else return false;
}

console.log(check("ppqqttt"));
