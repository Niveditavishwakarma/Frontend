function generateBirthMonths() {
  let birthMonths = {};

  for (let i = 1; i <= 12; i++) {
    birthMonths[i] = [];
  }

  for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    let year = Math.random() < 0.5 ? 1992 : 1993;
    birthMonths[month].push(`Person ${i} (Year: ${year})`);
  }

  return birthMonths;
}

let groupedBirthdays = generateBirthMonths();

console.log("Individuals grouped by birth month:");
for (let month in groupedBirthdays) {
  if (groupedBirthdays[month].length > 0) {
    console.log(`Month ${month}:`, groupedBirthdays[month]);
  }
}
