// Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.

function pairs(arr1, arr2) {
  arr1.reduce((acc, curr) =>
    acc.concat(
      arr2.map((el) => [curr, el]),
      []
    )
  );
}

// REDO
