function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function testConversion() {
    let userInput = prompt("Enter temperature in Farenheit: ");
    let fahrenheit = parseFloat(userInput);


    if (isNaN(fahrenheit)) {
    console.log("Please enter a valid number.");
    } else {
        let celsius = Math.floor((fahrenheitToCelsius(fahrenheit)));
        console.log(`${fahrenheit}°F is equal to ${celsius}°C.`)
    }
}
testConversion();