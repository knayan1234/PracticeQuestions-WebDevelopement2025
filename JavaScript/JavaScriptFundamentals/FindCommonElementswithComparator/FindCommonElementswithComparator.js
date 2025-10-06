/* Write a JavaScript program to find every element in any of the two given arrays at once, using the provided comparator function. */

// const arr1 = [2, 3, 4];
// const arr2 = [3, 4, 5];

// const newSet = new Set(arr1, arr2);
// const newArr = [...newSet];
// console.log(newSet);
// console.log(newArr);

function common(arr1, arr2, compFn) {
  Array.from(
    new Set([
      ...arr1,
      ...arr2.filter((x) => arr1.findIndex((y) => compFn(x, y)) === -1),
    ])
  );
}
