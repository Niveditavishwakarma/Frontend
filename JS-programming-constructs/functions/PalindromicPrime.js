const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPalindrome(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

readline.question("Enter a number: ", (input) => {
  const num = parseInt(input, 10);
  if (isNaN(num)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    if (isPrime(num)) {
      console.log(`${num} is a prime number.`);
      const palindrome = getPalindrome(num);
      console.log(`Its palindrome is ${palindrome}.`);
      if (isPrime(palindrome)) {
        console.log(`The palindrome ${palindrome} is also a prime number.`);
      } else {
        console.log(`The palindrome ${palindrome} is not a prime number.`);
      }
    } else {
      console.log(`${num} is not a prime number.`);
    }
  }
  readline.close();
});
