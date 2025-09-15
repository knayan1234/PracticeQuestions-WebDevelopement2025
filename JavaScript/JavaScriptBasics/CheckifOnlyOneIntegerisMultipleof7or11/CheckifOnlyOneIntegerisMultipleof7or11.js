/* Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  */

// function checkTwoNum(a, b) {
//   if ((a % 7 === 0 || b % 7 === 0) && (a % 11 === 0 || b % 11 === 0)) {
//     return console.log("Both are divisible");
//   }
//   if (a % 7 === 0 || a % 11 === 0 || !b % 7 === 0 || !b % 11 === 0) {
//     return console.log("divisible by 7");
//   }
//   if (!a % 7 === 0 || a % 11 === 0 || !b % 7 === 0 || b % 11 === 0) {
//     return console.log("divisible by 11");
//   }
// }

function checkTwoNum(a, b) {
  // Check if each number is divisible by 7 OR 11
  const aIsDivisible = a % 7 === 0 || a % 11 === 0;
  const bIsDivisible = b % 7 === 0 || b % 11 === 0;

  // Return true only if EXACTLY ONE is divisible (XOR logic)
  return aIsDivisible !== bIsDivisible;
}
