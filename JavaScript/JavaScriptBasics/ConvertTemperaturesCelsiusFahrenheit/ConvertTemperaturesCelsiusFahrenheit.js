/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function convertTemperature() {
  let typeOfTemp;
  let tempValue;
  let convertedValue;
  rl.question(
    "Which way you want to write temperature (C or F)? : ",
    (temp) => {
      typeOfTemp = temp.trim().toLowerCase();
      if (typeOfTemp !== "c" && typeOfTemp !== "f") {
        console.log("Enter either C or F!");
        rl.close();
        return;
      }
      rl.question(
        `Write the numeric value of the temparature in ${typeOfTemp} `,
        (inputValue) => {
          tempValue = Number(inputValue);
          if (isNaN(tempValue)) {
            console.log("Enter correct temperature value!");
            rl.close();
            return;
          }
          if (typeOfTemp === "c") {
            convertedValue = (9 * tempValue) / 5 + 32;
            console.log(
              `You Typed ${tempValue}°C and your converted value is ${convertedValue}°F `
            );
          } else if (typeOfTemp === "f") {
            convertedValue = (5 * (tempValue - 32)) / 9;
            console.log(
              `You Typed ${tempValue}°F and your converted value is ${convertedValue}°C`
            );
          }
          rl.close();
        }
      );
    }
  );
}
convertTemperature();
