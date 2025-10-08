/* Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object. */

const obj = {
  key1: "sample1",
  key2: "sample2",
  key3: "sample3",
};
delete obj.key2;
console.log(obj);

// function removeKeys(obj, keysToRemove) {
//   return Object.keys(obj).reduce((result, key) => {
//     if (!keysToRemove.includes(key)) {
//       result[key] = obj[key];
//     }
//     return result;
//   }, {});
// }
