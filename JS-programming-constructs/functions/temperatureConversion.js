const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

readline.question(
  "Select conversion: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius: ",
  (choice) => {
    switch (choice) {
      case "1":
        readline.question("Enter temperature in Celsius (0-100): ", (temp) => {
          temp = parseFloat(temp);
          if (temp >= 0 && temp <= 100) {
            console.log(
              `Temperature in Fahrenheit: ${celsiusToFahrenheit(temp).toFixed(
                2
              )} °F`
            );
          } else {
            console.log(
              "Invalid input. Please enter a value between 0 and 100 °C."
            );
          }
          readline.close();
        });
        break;
      case "2":
        readline.question(
          "Enter temperature in Fahrenheit (32-212): ",
          (temp) => {
            temp = parseFloat(temp);
            if (temp >= 32 && temp <= 212) {
              console.log(
                `Temperature in Celsius: ${fahrenheitToCelsius(temp).toFixed(
                  2
                )} °C`
              );
            } else {
              console.log(
                "Invalid input. Please enter a value between 32 and 212 °F."
              );
            }
            readline.close();
          }
        );
        break;
      default:
        console.log("Invalid choice. Please enter 1 or 2.");
        readline.close();
    }
  }
);
