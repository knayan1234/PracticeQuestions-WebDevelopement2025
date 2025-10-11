/* Write a JavaScript program to target a given value in a nested JSON object based on the given key.*/

const SAMPLE_OBJECT = {
  firstKey: {
    secondKey: {
      thirdKey: {
        fourthKey: {
          fifthKey: {
            sixthKey: {
              seventhKey: {
                eighthKey: {
                  ninthKey: {
                    tenthKey: "final",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

function findKey(key, obj) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }

  for (let value of Object.values(obj)) {
    console.log("Value: ", value);
    let result = findKey(key, value);
    if (result !== null) {
      return result;
    }
  }
}

const result = findKey("tenthKey", SAMPLE_OBJECT);
console.log(result); // "final"
