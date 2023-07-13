//Is Truthy Prompt:
//If the value is truthy, print true; If the value is falsy, print the corresponding result to the value given.

//Is Truthy Pseudocode Solution:
//If the value is truthy, print true;
//If the value is false, print "The boolean value false is falsy"
//If the value is null, print "The null value is falsy"
//If the value is undefined, print "undefined is falsy"
//If the value is 0, print "The number 0 is falsy (the only falsy number)"
//If the value is "", print "The empty string is falsy (the only falsy string)"


const value = "I am a string";

if (value) {
    console.log("true");
} else if (value === false) {
    console.log("The boolean value false is falsy");
} else if (value === null) {
    console.log("The null value is falsy");
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
} else if (value === "") {
    console.log("The empty string is falsy (the only falsy string)");
} else {
    console.log("Unknown value");
}


//Number Line Prompt:
//Using if/else statements, take the sum of two numbers and print the corresponding result to the values given.


//Number Line Pseudocode Solution:
//If the sum of two numbers is a negative number, print: sum + " is a negative number";
//If the sum of two numbers is over 100, print: sum + " is greater than 100";
//If the sum of two numbers is 0, print: sum + " is equal to 0";
//If the sum of two numbers is less than 1000, print: sum + " is less than -1000";

const num1 = 50;
const num2 = 51;
const sum = num1 + num2;

if (sum < 0) {
    console.log(sum + " is a negative number");
} else if (sum > 100) {
    console.log(sum + " is greater than 100");
} else if (sum === 0) {
    console.log(sum + " is equal to 0");
} else if (sum < 1000) {
    console.log(sum + " is less than 1000");
}


// Greater than 5 prompt:
// Using if/else statements, JavaScript code in a script tag that prints true if both parameters are greater or equal to 5.

//Greater than 5 Pseudocode Solution:
// if both numbers are greater than or equal to 5, print true;
// if one number is less than 5, print false;
// if both numbers are less than 5, print false;


const value1 = 10;
const value2 = 10;

if (value1 >= 5 && value2 >= 5) {
    console.log(true);
} else {
    console.log(false)
};




// Pair and Compare prompt:
// Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

//Pair and Compare Pseudocode Solution:
//Pair and Compare Psuedocode Solution:
//if pair 1 is truthy && pair 2 is truthy, print true 
//if pair 1 is truthy && pair 2 is falsy, print true
//if pair 1 is falsy && pair 2 is truthy, print true
//if pair 1 is falsy && pair 2 is falsy, print false


const pair1Value1 = 5;
const pair1Value2 = 5;

//Param2
const pair2Value1 = "Hi";
const pair2Value2 = "Hello";

let isTruthy = false;

if (pair1Value1 === pair1Value2 && pair2Value1 === pair2Value2) {
  isTruthy = true;
} else if (pair1Value1 !== pair1Value2 && pair2Value1 === pair2Value2) {
  isTruthy = true;
} else if (pair1Value1 === pair1Value2 && pair2Value1 !== pair2Value2) {
  isTruthy = true;
} else if (pair1Value1 !== pair1Value2 && pair2Value1 !== pair2Value2) {
  isTruthy = false;
}

console.log(isTruthy);