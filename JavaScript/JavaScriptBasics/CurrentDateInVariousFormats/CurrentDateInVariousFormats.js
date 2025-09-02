/* Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

const now = new Date();

const nowYear = now.getFullYear();
const nowMonthbad = now.getMonth() + 1;
const nowMonth = nowMonthbad.toString().padStart(2, "0");
const nowDate = now.getDate().toString().padStart(2, "0");

const firstFormat = `${nowMonth}-${nowDate}-${nowYear}`;
const secondFormat = `${nowMonth}/${nowDate}/${nowYear}`;
const thirdFormat = `${nowDate}-${nowMonth}-${nowYear}`;
const fourthFormat = `${nowDate}/${nowMonth}/${nowYear}`;

console.log(firstFormat, secondFormat, thirdFormat, fourthFormat);
