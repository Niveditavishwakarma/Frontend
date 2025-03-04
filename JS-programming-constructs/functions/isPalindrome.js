const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(num) {
  const str = num.toString();
  return str === str.split("").reverse().join("");
}

readline.question("Enter two numbers separated by space: ", (input) => {
  const numbers = input.split(" ").map(Number);
  if (numbers.length === 2) {
    console.log(
      `${numbers[0]} is ${
        isPalindrome(numbers[0]) ? "a Palindrome" : "not a Palindrome"
      }`
    );
    console.log(
      `${numbers[1]} is ${
        isPalindrome(numbers[1]) ? "a Palindrome" : "not a Palindrome"
      }`
    );
  } else {
    console.log("Invalid input. Please enter two numbers.");
  }
  readline.close();
});
