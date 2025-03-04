function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function simulateDieRolls() {
  let dieRolls = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  let maxCount = 10;

  while (!Object.values(dieRolls).includes(maxCount)) {
    let roll = rollDie();
    dieRolls[roll]++;
  }

  console.log("Final Die Roll Counts:", dieRolls);

  let maxNum = Object.keys(dieRolls).reduce((a, b) =>
    dieRolls[a] > dieRolls[b] ? a : b
  );
  let minNum = Object.keys(dieRolls).reduce((a, b) =>
    dieRolls[a] < dieRolls[b] ? a : b
  );

  console.log(`Number that reached ${maxCount} times first: ${maxNum}`);
  console.log(`Number that appeared the least times: ${minNum}`);
}

simulateDieRolls();
