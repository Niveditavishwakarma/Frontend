function generateRandomNumbers(count, min, max) {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numbers;
}

function findSecondLargestAndSmallest(numbers) {
  let largest = -Infinity,
    secondLargest = -Infinity;
  let smallest = Infinity,
    secondSmallest = Infinity;

  for (let num of numbers) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }

    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }
  return { secondLargest, secondSmallest };
}

const randomNumbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", randomNumbers);

const { secondLargest, secondSmallest } =
  findSecondLargestAndSmallest(randomNumbers);
console.log(`Second Largest: ${secondLargest}`);
console.log(`Second Smallest: ${secondSmallest}`);
