/* Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value. */

function convert(timeIn24HR) {
  if (timeIn24HR > 12) {
    let newTime = timeIn24HR - 12;
    console.log(`${newTime}PM`);
  } else {
    let newTime = timeIn24HR;
    console.log(`${newTime}AM`);
  }
}

convert(17);
