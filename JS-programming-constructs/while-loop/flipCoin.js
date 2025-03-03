function flipCoin() {
  return Math.random() < 0.5 ? "Heads" : "Tails";
}

let headsCount = 0;
let tailsCount = 0;

console.log("Flipping the coin until one side wins 11 times...");

while (headsCount < 11 && tailsCount < 11) {
  let result = flipCoin();

  if (result === "Heads") {
    headsCount++;
  } else {
    tailsCount++;
  }

  console.log(`Flip: ${result} | Heads: ${headsCount} | Tails: ${tailsCount}`);
}

console.log(
  `\nGame Over! ${headsCount === 11 ? "Heads" : "Tails"} wins 11 times!`
);
