/* Write a JavaScript program to create an array of key-value pair arrays from a given object. */

function toPairs(obj) {
  return Object.entries(obj);
}

console.log(toPairs({ a: 1, b: 2, c: 3 }));
// [["a", 1], ["b", 2], ["c", 3]]
