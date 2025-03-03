function getWeekDay(num) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return num >= 1 && num <= 7 ? days[num - 1] : "Invalid input";
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number (1-7) for the weekday: ", (input) => {
  const num = parseInt(input, 10);
  console.log(getWeekDay(num));
  readline.close();
});
