const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findMaxMin(a, b, c) {
  let op1 = a + b * c;
  let op2 = (a % b) + c;
  let op3 = c + a / b;
  let op4 = a * b + c;

  console.log(`1. a + b * c = ${op1}`);
  console.log(`2. a % b + c = ${op2}`);
  console.log(`3. c + a / b = ${op3}`);
  console.log(`4. a * b + c = ${op4}`);

  let max = Math.max(op1, op2, op3, op4);
  let min = Math.min(op1, op2, op3, op4);

  console.log(`Maximum result: ${max}`);
  console.log(`Minimum result: ${min}`);
}

rl.question("Enter three numbers (a, b, c) separated by spaces: ", (input) => {
  let numbers = input.split(" ").map(Number);

  if (numbers.length !== 3 || numbers.some(isNaN)) {
    console.log("Invalid input! Please enter three numeric values.");
  } else {
    findMaxMin(numbers[0], numbers[1], numbers[2]);
  }

  rl.close();
});
