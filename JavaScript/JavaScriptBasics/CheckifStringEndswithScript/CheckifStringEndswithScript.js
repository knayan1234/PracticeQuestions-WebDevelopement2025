/* Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6. */

function check(str) {
  if (str.length < 6) {
    console.error("Length is below 6");
  } else {
    if (str.substring(str.length - 6, str.length) === "Script") {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

check("JavaScript");
check("Java");
check("JavaABCDEFG");
