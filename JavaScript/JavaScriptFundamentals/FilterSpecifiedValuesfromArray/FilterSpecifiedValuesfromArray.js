/* Write a JavaScript program to filter out the specified values from a specified array. */

function filterOut(arr, ...args) {
  for (let v of args) {
    arr = arr.filter((el) => el !== v);
  }
  return console.log(arr);
}
filterOut([1, 2, 3], 2, 3);
