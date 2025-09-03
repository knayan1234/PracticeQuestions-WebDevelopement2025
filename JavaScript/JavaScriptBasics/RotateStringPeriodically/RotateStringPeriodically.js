/* Write a JavaScript program to rotate the string 'w3resource' in the left direction. This is done by periodically removing one letter from the string start and attaching it to the end.  */

// function Period(str) {
//   let orgStr = str;
//   console.log("Original string: ", orgStr);
//   let firstLetter = str.at(0);
//   let restWordApartFromFirstLetter = str.slice(1);
//   let concatIt = restWordApartFromFirstLetter.concat(firstLetter);
//   console.log("Rotated string: ", concatIt);
//   if (concatIt !== orgStr) {
//     setTimeout(() => {
//       Period(concatIt); // Call again with the updated string
//     }, 1000);
//   } // 1 second delay
// }

// Period("w3resource");

// function Period(str, orgStr = str) {
//   console.log("Original string: ", orgStr);
//   let firstLetter = str.at(0);
//   let restWordApartFromFirstLetter = str.slice(1);
//   let concatIt = restWordApartFromFirstLetter.concat(firstLetter);
//   console.log("Rotated string: ", concatIt);
//   if (concatIt != orgStr) {
//     setTimeout(() => {
//       Period(concatIt, orgStr);
//     }, 1000);
//   }
// }

// Period("abc");

function Period(original) {
  let current = original; // Start with original
  console.log("Original string: ", original);

  const intervalId = setInterval(() => {
    let firstLetter = current.at(0);
    let rest = current.slice(1);
    let concatIt = rest + firstLetter;
    console.log("Rotated string: ", concatIt);

    if (concatIt === original) {
      clearInterval(intervalId); // Stop when back to original
    } else {
      current = concatIt; // Update for next iteration
    }
  }, 1000);
}

Period("w3resource");
