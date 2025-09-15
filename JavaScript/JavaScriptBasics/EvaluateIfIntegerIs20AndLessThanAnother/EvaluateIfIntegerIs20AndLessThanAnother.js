/* Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 AND less than at least one of the other two. */

function evaluate(a, b, c) {
  // if (
  //     (a >= 20 || b >= 20 || c >= 20) &&
  //     (a < b || a < c || b < a || b < c || c < a || c < b)
  // ) {
  //     return true;
  // }/
  return (
    (a >= 20 && (a < b || a < c)) ||
    (b >= 20 && (b < a || b < c)) ||
    (c >= 20 && (c < a || c < b))
  );
}

console.log(evaluate(10, 5, 30));
