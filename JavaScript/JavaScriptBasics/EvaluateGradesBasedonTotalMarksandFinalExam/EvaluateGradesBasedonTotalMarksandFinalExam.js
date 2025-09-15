/* Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:

If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'. */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function evaluateGrade(marks, isFinalExam) {
  let totalMarks = Number(marks);

  if (isNaN(totalMarks) || totalMarks < 0 || totalMarks > 100) {
    console.error("Invalid marks! Please enter a number between 0-100.");
    return false;
  }

  if (isFinalExam) {
    return totalMarks >= 90 && totalMarks <= 100;
  } else {
    return totalMarks >= 89 && totalMarks <= 100;
  }
}

rl.question("Enter total marks: ", (marks) => {
  rl.question("Is this final exam? (true/false): ", (finalAnswer) => {
    let isFinalExam = finalAnswer.toLowerCase() === "true";
    let result = evaluateGrade(marks, isFinalExam);
    console.log(`A+ Grade: ${result}`);
    rl.close();
  });
});
