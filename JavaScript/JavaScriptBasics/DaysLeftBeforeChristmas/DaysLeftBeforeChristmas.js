/* Write a JavaScript program to calculate the days left before Christmas.   */

function dayLeft() {
  const currentDate = new Date();
  console.log(currentDate);
  const cmas = new Date(currentDate.getFullYear(), 11, 25);
  //It is some fishy here, need to check why it is coming like that. UTC IST diff
  console.log(cmas);
  if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
  }
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((cmas - currentDate) / millisecondsPerDay);

  return console.log(`${daysLeft} days left!`);
}

dayLeft();
