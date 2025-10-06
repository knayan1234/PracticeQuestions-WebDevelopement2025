/*  Write a JavaScript program to filter out non-unique values in an array. */

function nonUniqueValues(arr) {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) count++;
    }
    if (count === 1) arrNew.push(arr[i]);
  }
  return arrNew;
}

console.log(nonUniqueValues([1, 2, 2, 3, 4, 4, 5]));
