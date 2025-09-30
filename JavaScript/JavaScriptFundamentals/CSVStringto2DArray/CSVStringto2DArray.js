/* Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array. */

function convert(csv, delimiter = ",") {
  return console.log(csv.split("\n").map((v) => v.split(delimiter)));
}

convert("a,b\nc,d");
