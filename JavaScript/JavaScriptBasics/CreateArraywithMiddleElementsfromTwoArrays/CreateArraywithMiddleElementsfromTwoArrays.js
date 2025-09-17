/* Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.   */

function middleAlter(arr1, arr2) {
  let finalResult = [];
  //   let finalResult = [...arr1, ...arr2];

  if (arr1.length < 3 || arr2.length < 3) {
    return false;
  } else {
    finalResult = [arr1[1], arr2[1]];
    return finalResult;
  }
}

console.log(middleAlter([1, 2, 3], [4, 5, 6]));
