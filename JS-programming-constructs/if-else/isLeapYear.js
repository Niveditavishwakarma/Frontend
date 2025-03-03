function isLeapYear(year) {
  if (year >= 1000 && year <= 9999) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  return false;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a year: ", (input) => {
  const year = parseInt(input, 10);
  if (isNaN(year)) {
    console.log("Invalid input. Please enter a 4-digit year.");
  } else {
    console.log(
      year + " is " + (isLeapYear(year) ? "a Leap Year" : "not a Leap Year")
    );
  }
  readline.close();
});
