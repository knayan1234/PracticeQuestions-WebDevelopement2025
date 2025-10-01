/* Write a JavaScript program to generate a random hexadecimal color code. */

const randomColor = () =>
  "#" +
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
