/* Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one. 
For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
The output of [2, 4, 6] -> 2 - (2,4), (2,6)
The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16) */

function sortedPair(arr) {
  const sortedArray = arr.slice().sort((a, b) => a - b);

  const resArr = {
    num: 0,
    pairs: [],
  };

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] % sortedArray[i] === 0) {
        resArr.num++;

        resArr.pairs.push({ A: sortedArray[i], B: sortedArray[j] });
      }
    }
  }

  return resArr;
}

let final = sortedPair([2, 4, 16]);
console.log(final.num);
console.log(final.pairs);
