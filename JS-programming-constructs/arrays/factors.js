const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getPrimeFactors(n) {
  let factors = [];
  while (n % 2 === 0) {
    factors.push(2);
    n = Math.floor(n / 2);
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = Math.floor(n / i);
    }
  }
  if (n > 2) {
    factors.push(n);
  }
  return factors;
}

rl.question("Enter a number to find its prime factors: ", (input) => {
  let number = parseInt(input);
  if (isNaN(number) || number <= 1) {
    console.log("Please enter a valid number greater than 1.");
  } else {
    console.log(`Prime Factors of ${number}:`, getPrimeFactors(number));
  }
  rl.close();
});
