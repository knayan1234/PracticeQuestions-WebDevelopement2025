/* Write a JavaScript program to create the dot products of two given 3D vectors. 
Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers. */

function dotProducts(arr1, arr2) {
  let resArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let res = arr1[i] * arr2[i];
    resArr.push(res);
  }
  let final = resArr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return final;
}

console.log(dotProducts([1, 2, 3], [1, 2, 3]));
console.log(dotProducts([2, 4, 6], [2, 4, 6]));
