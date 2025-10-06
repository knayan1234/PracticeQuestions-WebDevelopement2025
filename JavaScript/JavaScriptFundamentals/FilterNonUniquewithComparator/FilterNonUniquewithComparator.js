/* Write a JavaScript program to filter out non-unique values in an array, based on a provided comparator function. */

function nonUniqueByComparator(arr, comparator) {
  return arr.filter((a) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (comparator(a, arr[i])) count++;
    }
    return count === 1;
  });
}
console.log(
  nonUniqueByComparator(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
); // [{ id: 2, value: 'c' }]
