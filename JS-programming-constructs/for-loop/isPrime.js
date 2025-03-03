const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

rl.question("Enter a number: ", (userInput) => {
    const number = parseInt(userInput, 10);

    if (isNaN(number) || number < 0) {
        console.log("Invalid input! Please enter a positive integer.");
    } else {
        if (isPrime(number)) {
            console.log(`${number} is a Prime number.`);
        } else {
            console.log(`${number} is NOT a Prime number.`);
        }
    }

    rl.close();
});
