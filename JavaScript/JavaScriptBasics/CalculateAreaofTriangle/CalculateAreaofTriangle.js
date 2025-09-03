// Function to calculate the area of a triangle given three sides 5,6,7

const areaOfScaleneTriangle = (arr) => {
  // Step 1: Basic input checks
  if (arr.length !== 3) return `Less than 3 values!`;
  const [a, b, c] = arr;
  if (a <= 0 || b <= 0 || c <= 0) return `Negative values entered!`;

  // Step 2: validation
  if (a + b <= c || a + c <= b || b + c <= a) return `Not a Triangle!`;

  // Step 3: Calculate semi-perimeter
  const semiPerimeter = (a + b + c) / 2;

  // Step 4: Compute and return area using Heron's formula
  return Math.sqrt(
    semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)
  );
};

console.log(areaOfScaleneTriangle([5, 6, 7]));
console.log(areaOfScaleneTriangle([3, 4, 5]));
console.log(areaOfScaleneTriangle([1, 2, 3]));
console.log(areaOfScaleneTriangle([2, 3, 5]));
console.log(areaOfScaleneTriangle([5, 5, 5]));
console.log(areaOfScaleneTriangle([0, 1, 2]));
console.log(areaOfScaleneTriangle([1, 2]));
