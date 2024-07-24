function celsiusToFahrenheit(celsius) {
   return (celsius * 9/5) + 32;  
}

function testConversion() {
    let userInput = prompt("Enter temperature in Celsius: ");
    let celsius = parseFloat(userInput);

    if(isNaN(celsius)) {
        console.log("Please enter a valid number");
    } else {
        let fahrenheit = celsiusToFahrenheit(celsius);
        console.log(`${celsius}°C is equal to ${fahrenheit}°F.`)
    }
}
testConversion();
