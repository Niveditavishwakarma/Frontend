const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getPlaceValue(num) {
  switch (num) {
    case 1:
      return "Unit";
    case 10:
      return "Ten";
    case 100:
      return "Hundred";
    case 1000:
      return "Thousand";
    case 10000:
      return "Ten Thousand";
    case 100000:
      return "Lakh";
    case 1000000:
      return "Ten Lakh";
    case 10000000:
      return "Crore";
    case 100000000:
      return "Ten Crore";
    default:
      return "Invalid input! Please enter 1, 10, 100, 1000, etc.";
  }
}

rl.question("Enter a number (1, 10, 100, 1000, etc.): ", (userInput) => {
  const number = parseInt(userInput, 10);

  if (isNaN(number)) {
    console.log("Invalid input! Please enter a numeric value.");
  } else {
    console.log(getPlaceValue(number));
  }

  rl.close();
});
