/* Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.  
Note: Do not change the order if the lengths of two string are same. */

function sortLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(sortLength(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]));
