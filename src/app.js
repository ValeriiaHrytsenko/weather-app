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
  defaultCity.innerHTML = response.data.name;
  defaultCountry.innerHTML = response.data.sys.country;
  temperature.innerHTML = Math.round(response.data.main.temp);
  description.innerHTML = response.data.weather[0].main;
  realFeel.innerHTML = Math.round(response.data.main.feels_like);
  humidity.innerHTML = response.data.main.humidity;

  visibility.innerHTML = response.data.visibility;
  cloudCover.innerHTML = response.data.clouds.all;
  wind.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `media/weather-icons/${response.data.weather[0].icon}.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].main);
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

search("Kyiv");

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitCity);
