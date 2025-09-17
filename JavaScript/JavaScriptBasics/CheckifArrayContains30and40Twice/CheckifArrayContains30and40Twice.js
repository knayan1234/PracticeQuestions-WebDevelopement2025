/* Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.*/

function check(arr) {
  let counter30 = 0;
  let counter40 = 0;
  arr.forEach((element) => {
    if (element === 30) {
      counter30 += 1;
    } else if (element === 40) {
      counter40 += 1;
    }
  });
  if (counter30 >= 2 && counter40 >= 2) {
    console.log("yes");
  } else {
    console.log("No");
  }
}

check([10, 30, 30, 30, 40, 40, 70]);
check([10, 30, 40, 40, 70]);
check([10, 70]);
