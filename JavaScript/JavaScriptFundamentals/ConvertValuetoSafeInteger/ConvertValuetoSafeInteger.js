/* Write a JavaScript program to convert a value to a safe integer. */

function close(n) {
  Math.round(
    Math.max(Math.min(n, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );
}
