/* Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.*/

function city(str) {
  let isVisible =
    str.slice(0, 3) === "Los" || str.slice(0, 3) === "New" ? str : "";
  return isVisible;
}

console.log(city("NewYork"));
console.log(city("Delhi"));
