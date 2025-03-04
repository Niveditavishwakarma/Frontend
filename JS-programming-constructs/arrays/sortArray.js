function generateRandomNumbers(count, min, max) {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numbers;
}

function findSecondLargestAndSmallestSorted(numbers) {
  numbers.sort((a, b) => a - b);
  return {
    secondSmallest: numbers[1],
    secondLargest: numbers[numbers.length - 2],
  };
}

const randomNumbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", randomNumbers);

const { secondLargest, secondSmallest } = findSecondLargestAndSmallestSorted([
  ...randomNumbers,
]);
console.log(
  "Sorted Numbers:",
  [...randomNumbers].sort((a, b) => a - b)
);
console.log(`Second Smallest: ${secondSmallest}`);
console.log(`Second Largest: ${secondLargest}`);
