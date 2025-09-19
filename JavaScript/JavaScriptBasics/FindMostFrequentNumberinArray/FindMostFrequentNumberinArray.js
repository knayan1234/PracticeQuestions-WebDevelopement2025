/* Write a JavaScript program to find the number appearing most frequently in a given array of integers.*/

function repeatedNumbers(arr) {
  let maxCount = 0;
  let mostFrequent = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter += 1;
      }
    }
    const currentCount = counter + 1;
    if (currentCount > maxCount) {
      maxCount = currentCount;
      mostFrequent = arr[i];
    }
  }
  return mostFrequent;
}

console.log(repeatedNumbers([1, 2, 3, 4, 6, 6, 6, 6, 6, 2]));
