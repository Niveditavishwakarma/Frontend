const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getWeekday(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid input! Please enter a number between 1 and 7.";
  }
}

rl.question("Enter a number (1-7) to get the weekday: ", (userInput) => {
  const number = parseInt(userInput, 10);

  if (isNaN(number) || number < 1 || number > 7) {
    console.log("Invalid input! Please enter a number between 1 and 7.");
  } else {
    console.log(`The day is: ${getWeekday(number)}`);
  }

  rl.close();
});
