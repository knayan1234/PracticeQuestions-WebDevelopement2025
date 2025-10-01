/* Write a JavaScript program to replace multiple object keys' names with the values provided. */

function replace(obj, keyMap) {
  for (let oldKey in obj) {
    const newKey = keyMap[oldKey];
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }
  return obj;
}

const myObj = { first: 1, second: 2, third: 3 };
const mapping = { first: "one", second: "two" };

const newObj = replace(myObj, mapping);
console.log(newObj); // { one: 1, two: 2, third: 3 }
