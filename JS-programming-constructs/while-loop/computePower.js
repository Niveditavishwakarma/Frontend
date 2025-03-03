const n = parseInt(process.argv[2], 10);

if (isNaN(n) || n < 0) {
  console.log("Please enter a valid non-negative integer.");
  process.exit(1);
}

console.log(`Powers of 2 up to 2^${n} (stopping at 256):`);

for (let i = 0; i <= n; i++) {
  let power = Math.pow(2, i);
  if (power > 256) break;
  console.log(`2^${i} = ${power}`);
}
