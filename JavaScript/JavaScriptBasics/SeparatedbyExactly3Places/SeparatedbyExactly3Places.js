/* Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.*/

function check(str) {
  str.split("").forEach((letter, index) => {
    if (letter === "a") {
      if (str[index + 3] === "b") {
        console.log("Yes");
        return;
      } else {
        console.log("No");
        return;
      }
    }
  });
}
// function check(str) {
//   // Convert to array and check each position
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a") {
//       // Check if there's a 'b' exactly 3 positions ahead
//       if (str[i + 3] === "b") {
//         console.log("Yes");
//         return; // Exit immediately when we find a match
//       }
//     }
//   }
//   // Only print "No" if we never found a match
//   console.log("No");
// }

// check("annnb");
// check("annb");
// check("annnnb");
check("annnbaaa");
