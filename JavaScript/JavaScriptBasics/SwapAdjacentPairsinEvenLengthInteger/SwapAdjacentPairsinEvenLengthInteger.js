/* Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.*/

function swapAdjacentPairs(num) {
  let str = num.toString();

  if (str.length % 2 !== 0) {
    return "Number must have even length!";
  }

  let swapped = "";
  for (let i = 0; i < str.length; i += 2) {
    swapped += str[i + 1] + str[i];
  }

  return parseInt(swapped, 10);
}

// Example usage:
console.log(swapAdjacentPairs(1234)); // 2143
console.log(swapAdjacentPairs(567890)); // 658079
console.log(swapAdjacentPairs(12)); // 21
