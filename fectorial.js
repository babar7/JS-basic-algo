// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt("Enter a positive integer: "));

// checking if number is negative
if (number < 0) {
  console.log("Error! Factorial for negative number does not exist.");
}

// if number is 0
else if (number === 0) {
  console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}.`);
}

// if (n < 0) "not exists";
// else if (n === 0) "1";
// else {
//   let fact = 1;
//   for (i = 1; i <= n; i++) {
//     fact *= i;
//   }
// }
