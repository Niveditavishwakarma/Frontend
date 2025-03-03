const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function primeFactors(n) {
  if (n <= 1) {
    console.log("No prime factors for numbers less than or equal to 1.");
    return;
  }

  console.log(`Prime factors of ${n}:`);

  while (n % 2 === 0) {
    console.log(2);
    n /= 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      console.log(i);
      n /= i;
    }
  }

  if (n > 2) {
    console.log(n);
  }
}

rl.question("Enter a number: ", (userInput) => {
  const num = parseInt(userInput, 10);

  if (isNaN(num) || num < 1) {
    console.log("Please enter a valid positive integer.");
  } else {
    primeFactors(num);
  }

  rl.close();
});
