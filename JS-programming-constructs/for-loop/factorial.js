const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function factorial(n) {
  if (n < 0) return -1;
  if (n === 0 || n === 1) return 1;

  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

rl.question("Enter a number: ", (userInput) => {
  const num = parseInt(userInput, 10);

  if (isNaN(num) || num < 0) {
    console.log("Please enter a valid non-negative integer.");
  } else {
    console.log(`${num}! = ${factorial(num)}`);
  }

  rl.close();
});
