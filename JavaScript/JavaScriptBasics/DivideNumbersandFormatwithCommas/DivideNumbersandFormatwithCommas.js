/* Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas. */

function divideNumbers(dividend, divisor) {
  if (divisor === 0) {
    console.error("Cannot divide by 0");
  } else {
    let result = dividend / divisor;
    let finalResult = result.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    });
    console.log(finalResult);
  }
}

divideNumbers(19090, 3);
divideNumbers(2, 0);
divideNumbers(12, 2);
