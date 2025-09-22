/* Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. 
For a string "2*0", the output should be : ["210", "240", "270"] */

function replaceHash(str) {
  let result = [];
  for (num = 0; num <= 9; num++) {
    let numbers = str.slice().replace("*", num);
    if (parseInt(numbers) % 3 === 0) {
      result.push(parseInt(numbers));
    }
  }
  return result;
}

console.log(replaceHash("2*0"));
console.log(replaceHash("4*2"));
