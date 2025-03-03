const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function numberToWord(num) {
  switch (num) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Invalid input! Please enter a single-digit number (0-9).";
  }
}

// Get user input in Node.js
rl.question("Enter a single-digit number (0-9): ", (userInput) => {
  const number = parseInt(userInput, 10);

  if (isNaN(number) || number < 0 || number > 9) {
    console.log("Invalid input! Please enter a number between 0 and 9.");
  } else {
    console.log(`The number in words is: ${numberToWord(number)}`);
  }

  rl.close();
});
