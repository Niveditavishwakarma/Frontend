function numberToWord(num) {
  const words = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  return num >= 0 && num <= 9 ? words[num] : "Invalid input";
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a single digit number: ", (input) => {
  const num = parseInt(input, 10);
  console.log(numberToWord(num));
  readline.close();
});
