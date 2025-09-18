/* Write a JavaScript program to find the longest string from a given array of strings.  */

//function to find the longest array index's length
function longestStr(arr) {
  let long = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].length < arr[i + 1].length) {
      long = arr[i + 1].length;
    }
  }
  return long;
}

//correct way 1
function findLongestStrAndReturnTheString(arr) {
  let longestStr = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].length < arr[i + 1].length) {
      longestStr = arr[i + 1];
    }
  }
  return longestStr;
}

// corret way 2

function dusraWay(arr) {
  let max = arr[0].length;
  arr.map((el) => (max = Math.max(max, el.length)));
  let result = arr.filter((v) => v.length === max);
  return result;
}

console.log(longestStr(["abc", "defg", "pqrstuv"]));
console.log(findLongestStrAndReturnTheString(["abc", "defg", "pqrstuv"]));
console.log(dusraWay(["abc", "defg", "pqrstuv"]));
