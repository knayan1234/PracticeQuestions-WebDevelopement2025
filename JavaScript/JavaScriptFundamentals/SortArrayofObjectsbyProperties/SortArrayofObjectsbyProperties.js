/* Write a JavaScript program to get a sorted array of objects ordered by properties and orders */

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

// Sort by age (ascending), then by name (ascending)
people.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name));

console.log(people);
// Output:
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'John', age: 30 }
// ]
