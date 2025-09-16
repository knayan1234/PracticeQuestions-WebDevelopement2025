/* Write a JavaScript program to capitalize the first letter of each word in a given string */

function capitalize(str) {
  console.log("Entered string: ", str);
  let arrOfWords = str.split(" ");
  //   let arrOfWordsLength = arrOfWords.length;
  //   let strNew = "";
  //   for (let i = 0; i <= arrOfWordsLength - 1; i++) {
  //     if (i == arrOfWordsLength - 1) {
  //       strNew += arrOfWords[i].at(0).toUpperCase() + arrOfWords[i].substring(1);
  //     } else {
  //       strNew +=
  //         arrOfWords[i].at(0).toUpperCase() + arrOfWords[i].substring(1) + " ";
  //     }
  //   }

  let result = arrOfWords
    .map((w) => {
      return w[0].toUpperCase() + w.substring(1);
    })
    .join(" ");

  console.log("Generated string: ", result);
}

capitalize("hi there");
