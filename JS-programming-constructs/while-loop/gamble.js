function gamble() {
  let money = 100;
  const goal = 200;
  let bets = 0;
  let wins = 0;

  console.log("Starting gambling simulation...");

  while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.random() < 0.5;

    if (betResult) {
      money++;
      wins++;
    } else {
      money--;
    }
  }

  console.log("\nGambling simulation finished!");
  console.log(`Total Bets Made: ${bets}`);
  console.log(`Total Wins: ${wins}`);
  console.log(`Final Money: Rs. ${money}`);
  console.log(
    money === 200
      ? "Congratulations! You reached your goal."
      : "Game Over! You went broke."
  );
}

gamble();
