/*  Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group. */

// const bifurcate = (arr, filter) =>
//   arr.reduce(
//     (acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc),
//     [[], []]
//   ); // Split the array based on the filter array

// const bifurcate = (arr, filter) =>
//   arr.reduce(
//     (acc, val, i) => {
//       if (filter[i]) {
//         acc[0].push(val);
//       } else {
//         acc[1].push(val);
//       }
//       return acc;
//     },
//     [[], []]
//   );

const bifurcate = (arr, filter) => {
  let trueWalaArr = [];
  let falseWalaArr = [];
  for (let i = 0; i < filter.length; i++) {
    if (filter[i]) {
      trueWalaArr.push(arr[i]);
    } else falseWalaArr.push(arr[i]);
  }
  return [trueWalaArr, falseWalaArr];
};

// Example usage
console.log(bifurcate([1, 2, 3, 4], [true, true, false, true])); // [[1, 2, 4], [3]]
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true])); // [[1, 2, 3, 4], []]
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false])); // [[], [1, 2, 3, 4]]
