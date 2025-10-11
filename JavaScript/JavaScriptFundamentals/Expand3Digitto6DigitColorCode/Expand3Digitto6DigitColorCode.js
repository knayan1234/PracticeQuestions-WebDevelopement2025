/* Write a JavaScript program to extend a 3-digit color code to a 6-digit color code. */

function change(code) {
  let codeArr = code.slice(1).split("");
  let newCodeArr = [];
  for (let i = 0; i < codeArr.length; i++) {
    newCodeArr.push(codeArr[i], codeArr[i]);
  }
  return newCodeArr.join("");
}

function change(code) {
  return (
    "#" +
    code
      .slice(1)
      .split("")
      .map((ch) => ch + ch)
      .join("")
  );
}

function change(num) {
  let n = num
    .slice(1)
    .split("")
    .reduce((acc, curr, i) => {
      return acc + curr + curr;
    }, "#");

  return n;
}
