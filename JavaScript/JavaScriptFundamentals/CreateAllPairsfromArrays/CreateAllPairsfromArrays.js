// Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.

function pairs(arr1, arr2) {
  arr1.reduce((acc, curr) =>
    acc.concat(
      arr2.map((el) => [curr, el]),
      []
    )
  );
}

function cartesianProduct(arr1, arr2) {
  const result = [];

  // Loop through first array
  for (let i = 0; i < arr1.length; i++) {
    // Loop through second array
    for (let j = 0; j < arr2.length; j++) {
      // Push the pair [arr1[i], arr2[j]]
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}
