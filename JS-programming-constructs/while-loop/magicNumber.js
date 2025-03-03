const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Think of a number between 1 and 100. I will guess it!");

function findMagicNumber(low, high) {
  if (low > high) {
    console.log("Something went wrong! Please restart the game.");
    rl.close();
    return;
  }

  let mid = Math.floor((low + high) / 2);

  rl.question(`Is your number ${mid}? (yes/no): `, (answer) => {
    if (answer.toLowerCase() === "yes") {
      console.log(`Great! Your magic number is ${mid}.`);
      rl.close();
    } else {
      rl.question(
        `Is your number greater than ${mid}? (yes/no): `,
        (greater) => {
          if (greater.toLowerCase() === "yes") {
            findMagicNumber(mid + 1, high);
          } else {
            findMagicNumber(low, mid - 1);
          }
        }
      );
    }
  });
}

findMagicNumber(1, 100);
