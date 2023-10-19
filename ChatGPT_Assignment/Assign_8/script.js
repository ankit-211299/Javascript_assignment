const inputElement = document.getElementById("cityName");
const buttonElement = document.getElementById("sbut");

const apiKey = "2ad0024cf043b1b16b599bf8884f0610";
var city = "";

buttonElement.addEventListener("click", function (event) {
  event.preventDefault();
  city = inputElement.value;

  getWeather(city);

  inputElement.value = "";
});

function getWeather(cityName) {
  const divElement = document.getElementById("results");
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const weatherDescription = data.weather[0].description;
        const temperatureKelvin = data.main.temp;
        const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2);
        const city = data.name;
        const country = data.sys.country;

        divElement.innerHTML = (`Weather in ${city}, ${country}: ${weatherDescription} Temperature: ${temperatureCelsius}°C`);
      } else {
        console.log(`City not found.`);
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}