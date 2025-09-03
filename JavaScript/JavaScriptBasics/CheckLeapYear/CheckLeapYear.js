/* Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.   */

/* A year is a leap year if it satisfies this rule:
Leap year if (year % 4 == 0) AND (year % 100 != 0 OR year % 400 == 0)
*/

const checkLeapYear = (year) => {
  if (year % 4 == 0) {
    if (year % 100 !== 0) {
      console.log(`Year ${year} is leap year`);
    } else if (year % 400 === 0) {
      console.log(`Year ${year} is leap year`);
    } else {
      console.log(`Not a leap year!!!!`);
    }
  } else {
    console.log(`Not a leap year!!!!`);
  }
};

checkLeapYear(2024);
checkLeapYear(2025);
checkLeapYear(2000);
checkLeapYear(1900);
