/* Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row. */

function csv_to_json(data, delimiter = ",") {
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
  console.log("Title: ", titles);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((el) => {
      const values = el.split(delimiter);
      return titles.reduce(
        (acc, curr, index) => ((acc[curr] = values[index]), acc),
        {}
      );
    });
}

console.log(csv_to_json("col1,col2\na,b\nc,d")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
