/* Write a JavaScript program to measure the time a function to execute.*/

function logging(a, b) {
  console.time();
  const res = a + b;
  console.timeEnd();
  return res;
}

logging(123, 456);
