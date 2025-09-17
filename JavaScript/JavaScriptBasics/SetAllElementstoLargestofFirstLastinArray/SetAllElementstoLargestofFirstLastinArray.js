/* Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.*/

function alter(arr) {
  let whichIsLarge =
    arr[0] > arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];

  let result = arr.map((el) => {
    return (el = whichIsLarge);
  });
  return result;
}

console.log(alter([5, 1, 2, 4]));
console.log(alter([5, 1, 2, 7]));
