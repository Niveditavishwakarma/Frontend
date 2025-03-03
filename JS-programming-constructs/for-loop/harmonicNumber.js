const n = parseInt(process.argv[2]);

if (isNaN(n) || n <= 0) {
  console.log("Please provide a valid positive integer.");
  process.exit(1);
}

let harmonicNumber = 0;
for (let i = 1; i <= n; i++) {
  harmonicNumber += 1 / i;
}

console.log(`H(${n}) = ${harmonicNumber.toFixed(6)}`);
