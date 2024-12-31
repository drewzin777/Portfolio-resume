const getDataButton = document.getElementById("get-data-button"); 
const dataContainer = document.getElementById("data-container");
const cityInput = document.getElementById("city-input");

getDataButton.addEventListener("click", () => {
    const city = cityInput.value;
    const apiKey = '62afd666d09283cae68eafafeeb331c6'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
    .then(response => response.json()) 
    .then(data => {
        const weatherData = document.createElement("div");
        weatherData.innerHTML = `<h2>Weather in ${data.name}</h2>
                       <p>Temperature: ${data.main.temp}°F</p>
                       <p>Weather: ${data.weather[0].description}</p>
                       <p>Humidity: ${data.main.humidity}%</p>
                       <p>Wind Speed: ${data.wind.speed} m/s</p>`;

        dataContainer.innerHTML = ''; //clear previous data
         dataContainer.appendChild(weatherData);
    })
    .catch(error => {
        weatherContainer.innerHTML = `<p> Could not fetch weather data. Please try again.</p>`;
        console.error(`Error fetching weather data: `, error);
    });
});