// time container
// put it up

function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let weekDay = days[date.getDay()];

  let day = date.getDate();

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[date.getMonth()];

  let formattedDate = `${weekDay}, ${day} ${month}`;

  return formattedDate;
}

let currentTimeSettings = document.querySelector("#current-time-date-year");
currentTimeSettings.innerHTML = formatDate(new Date());

// end of date

// Showing details
//

function defaultCity(response) {
  let defaultCity = document.querySelector("#city");
  let defaultCountry = document.querySelector("#country");
  let temperature = document.querySelector("#temperature");
  let description = document.querySelector("#description");
  let realFeel = document.querySelector("#real-feel");
  let humidity = document.querySelector("#humidity");
  let uvIndex = document.querySelector("#uv-index");
  let visibility = document.querySelector("#visibility");
  let cloudCover = document.querySelector("#cloud-cover");
  let wind = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  console.log(response.data);

  celsiusTemperature = Math.round(response.data.main.temp);

  defaultCity.innerHTML = response.data.name;
  defaultCountry.innerHTML = response.data.sys.country;
  temperature.innerHTML = Math.round(celsiusTemperature);
  description.innerHTML = response.data.weather[0].main;
  realFeel.innerHTML = Math.round(response.data.main.feels_like);
  humidity.innerHTML = response.data.main.humidity;

  visibility.innerHTML = Math.round(response.data.visibility) / 1000;
  cloudCover.innerHTML = response.data.clouds.all;
  wind.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `media/weather-icons/${response.data.weather[0].icon}.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].main);

  let weatherSituation = response.data.weather[0].main;
  if (weatherSituation === "Clear") {
    document.querySelector(
      "#quote"
    ).innerHTML = `I've never been one to bet on the weather.`;
    document.querySelector("#background-image").classList.add("containerClear");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerCloudy",
        "containerMist",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Clouds") {
    document.querySelector(
      "#quote"
    ).innerHTML = `I love being in a city with great weather.`;
    document
      .querySelector("#background-image")
      .classList.add("containerCloudy");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerMist",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Mist") {
    document.querySelector(
      "#quote"
    ).innerHTML = `I tried to catch the fog, but I mist.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Smoke") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Concrete is the color of bad weather.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Haze") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Bad weather always looks worse through a window.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Dust") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Bad weather always looks worse through a window.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Fog") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Bad weather always looks worse through a window.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Sand") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Weather forecast for tonight: dark.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Ash") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Weather forecast for tonight: dark.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Squal") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Bad weather always looks worse through a window.`;
    document.querySelector("#background-image").classList.add("containerMist");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerRaining",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Tornado") {
    document.querySelector(
      "#quote"
    ).innerHTML = `Be careful, thunderstorm outside.`;
    document
      .querySelector("#background-image")
      .classList.add("#containerThundestorm");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerMist",
        "containerRaining",
        "containerSnow"
      );
  }
  if (weatherSituation === "Snow") {
    document.querySelector(
      "#quote"
    ).innerHTML = `There's no such thing as bad weather, just soft people.`;
    document.querySelector("#background-image").classList.add("containerSnow");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerMist",
        "containerRaining",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Rain") {
    document.querySelector(
      "#quote"
    ).innerHTML = `In fair weather prepare for foul.`;
    document
      .querySelector("#background-image")
      .classList.add("containerRaining");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerMist",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Drizzle") {
    document.querySelector(
      "#quote"
    ).innerHTML = `The meteorological equivalent of a bad date.`;
    document
      .querySelector("#background-image")
      .classList.add("containerRaining");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerMist",
        "containerSnow",
        "containerThunderstorm"
      );
  }
  if (weatherSituation === "Thunderstorm") {
    document.querySelector(
      "#quote"
    ).innerHTML = `I cannot command winds and weather.`;
    document
      .querySelector("#background-image")
      .classList.add("containerThunderstorm");
    document
      .querySelector("#background-image")
      .classList.remove(
        "containerClear",
        "containerCloudy",
        "containerMist",
        "containerRaining",
        "containerSnow"
      );
  }
}

function search(city) {
  let apiKey = `d506e4c0e70891d876c92964c23e687b`;
  let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlCity).then(defaultCity);
}

function submitCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#searchQueryInput");
  search(cityInput.value);
}

function changeTempFahrenheit(event) {
  event.preventDefault();

  let fahrenheitTemperature = Math.round(celsiusTemperature * 9) / 5 + 32;
  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(fahrenheitTemperature);
}

function changeTempCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = Math.round(celsiusTemperature);
}

function showCurrentLocation(position) {
  let apiKey = `d506e4c0e70891d876c92964c23e687b`;
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(defaultCity);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentLocation);
}

let celsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitCity);

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", changeTempFahrenheit);

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", changeTempCelsius);

let currentLocationLink = document.querySelector("#btn-current-position");
currentLocationLink.addEventListener("click", getCurrentLocation);

search("Kyiv");
