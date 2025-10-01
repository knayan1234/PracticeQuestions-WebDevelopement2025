/* Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

eg: [1,2,3]= [[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1]]

*/

function iterativeApp(arr) {
  let res = [[]];

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    const newOnes = res.map((curr) => [x, ...curr]);
    res.push(...newOnes);
  }
  return res;
}

console.log(iterativeApp([1, 2, 3]));
