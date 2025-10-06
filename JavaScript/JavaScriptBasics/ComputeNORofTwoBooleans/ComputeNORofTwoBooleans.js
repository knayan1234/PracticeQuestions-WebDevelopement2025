/* Write a JavaScript program to create the NOR value of two given booleans. 
Note: In boolean logic, logical nor or joint denial is a truth-functional operator which produces a result that is the negation of logical or. That is, a sentence of the form (p NOR q) is true precisely when neither p nor q is true - i.e. when both of p and q are false
Sample Example:
For x = true and y = false, the output should be logical_Nor(x, y) = false; For x = false and y = false, the output should be logical_Nor(x, y) = true. */

function NOR(a, b) {
  return !a && !b;
}

//only true when both are false - NOR
