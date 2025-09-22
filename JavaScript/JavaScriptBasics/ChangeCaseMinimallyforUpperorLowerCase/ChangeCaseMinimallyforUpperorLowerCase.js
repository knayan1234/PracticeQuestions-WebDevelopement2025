/* Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case. 
Fox example "Write" will be write and "PHp" will be "PHP" */

function changeCase(str) {
  let upCase = 0;
  let loCase = 0;
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      upCase++;
    } else {
      loCase++;
    }
  }
  if (upCase > loCase) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

console.log(changeCase("aBC"));
console.log(changeCase("Abcxxx"));
