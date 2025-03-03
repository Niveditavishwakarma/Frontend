const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

rl.question("Enter the starting number: ", (startInput) => {
  rl.question("Enter the ending number: ", (endInput) => {
    const start = parseInt(startInput, 10);
    const end = parseInt(endInput, 10);

    if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || start > end) {
      console.log("Invalid input! Please enter a valid positive range.");
    } else {
      console.log(`Prime numbers between ${start} and ${end}:`);
      for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
          console.log(num);
        }
      }
    }

    rl.close();
  });
});
