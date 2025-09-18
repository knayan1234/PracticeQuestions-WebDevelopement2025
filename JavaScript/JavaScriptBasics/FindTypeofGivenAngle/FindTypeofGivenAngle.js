/* Write a JavaScript program to find the types of a given angle.  

Types of angles:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle. */

function checkAngle(n) {
  let num = Number(n);
  if (0 < n < 90) {
    return "acute";
  } else if (n === 90) {
    return "right";
  } else if (180 > n > 90) {
    return "obtuse";
  } else {
    return "180 degree";
  }
}

console.log(checkAngle(90));
console.log(checkAngle(30));
console.log(checkAngle(110));
console.log(checkAngle(180));
