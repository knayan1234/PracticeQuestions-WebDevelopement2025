/* Write a JavaScript program to find the largest of three given integers. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter numbers sepearted by comma (a,b,c): ", (nums) => {
  if (!nums.includes(",")) {
    console.log("Use comma to separate!");
    rl.close();
  } else {
    let numbers = nums.split(",");
    let ar = numbers.map(Number);
    let sortedNumbers = ar.sort((a, b) => a - b);
    console.log(sortedNumbers);
    let maxNum = sortedNumbers[sortedNumbers.length - 1];
    console.log(`Maximum of your enetered numbers is ${maxNum}`);
    rl.close();
  }
});

//some extra failing case there in perplexity chat
