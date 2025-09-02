/* 
Write a JavaScript program to display the current day and time in the following format.
 Sample Output : Today is : Tuesday.
 Current time is : 10 PM : 30 : 38
*/

const currentDateAndTime = new Date().toString();

const splitDate = currentDateAndTime.split(" ");

const arrayOfDateInWords = splitDate.map((word) => word);

let printDay;

switch (arrayOfDateInWords[0]) {
  case "Sun":
    printDay = "Sunday";
    break;
  case "Mon":
    printDay = "Monday";
    break;
  case "Tue":
    printDay = "Tuesday";
    break;
  case "Wed":
    printDay = "Wednesday";
    break;
  case "Thu":
    printDay = "Thrusday";
    break;
  case "Fri":
    printDay = "Friday";
    break;
  case "Sat":
    printDay = "Saturday";
    break;
  default:
    break;
}

const timeParts = arrayOfDateInWords[4].split(":");
let hours = parseInt(timeParts[0]);
const minutes = timeParts[1].padStart(2, "0"); // Add leading zero if needed (string method)
const seconds = timeParts[2].padStart(2, "0");

let ampm = "AM";
if (hours >= 12) {
  ampm = "PM";
}
if (hours > 12) {
  hours -= 12;
} else if (hours === 0) {
  hours = 12;
}

console.log(`Today is: ${printDay}.`);
console.log(`Current time is: ${hours} ${ampm} : ${minutes} : ${seconds}`);
