/* Write a JavaScript program to curry (curries) a function. */

function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// const curry = (a) => (b) => (c) => a + b + c;

console.log(curry(1, 2, 3));
