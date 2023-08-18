// Conditional Statements
function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// Loops
function printNumbers(limit) {
  console.log("Numbers from 1 to " + limit + ":");
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
}

// Functions
function calculateFactorial(number) {
  if (number < 0) {
    return "===> Factorial is not defined for negative numbers.";
  } else if (number === 0 || number === 1) {
    return 1;
  }
  return number * calculateFactorial(number - 1);
}

// Testing the functions
const numToCheck = 5;
console.log(numToCheck + " is " + checkNumber(numToCheck));

const numbersToPrint = 10;
printNumbers(numbersToPrint);

const factorialNumber = -4;
console.log("Factorial of " + factorialNumber + " is " + calculateFactorial(factorialNumber));
