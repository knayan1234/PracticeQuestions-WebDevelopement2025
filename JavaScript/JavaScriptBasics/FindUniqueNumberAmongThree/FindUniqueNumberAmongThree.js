/* Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.  */

function findThird(a, b, c) {
  if (a === b) return c;
  if (a === c) return b;
  if (b === c) return a;
  return null;
}
