import {
  createElement,
  createImage,
  formatAddress,
  convertToCelsius,
  setWeatherIcon,
} from "./utility.js";
import fetchWeather from "./apiController.js";

const updateScreen = (response) => {
  const error = document.querySelector(".error");
  if (error) error.remove();

  let dataContainer = document.querySelector(".data-container");
  if (dataContainer) {
    dataContainer.textContent = "";
  } else {
    dataContainer = createElement("div");
    dataContainer.classList.add("data-container");
    document.body.append(dataContainer);
  }

  const city = createElement("h1", formatAddress(response.resolvedAddress));
  const data = createElement("div");
  data.classList.add("data");

  const addressDateContainer = createElement("div");
  const address = createElement("p");
  address.append(
    createImage("./images/location.svg", "Location Icon"),
    document.createTextNode(response.resolvedAddress),
  );
  const date = createElement("p");
  date.append(
    createImage("./images/calendar.svg", "Calendar Icon"),
    document.createTextNode(response.days[0].datetime),
  );
  addressDateContainer.append(address, date);

  const temperatureContainer = createElement("div");
  const temperature = createElement(
    "h2",
    `${convertToCelsius(response.currentConditions.temp)} °C | ${response.currentConditions.temp} °F`,
  );
  const weatherIcon = setWeatherIcon(response.currentConditions.icon);
  temperatureContainer.append(temperature, weatherIcon);

  const conditionsContainer = createElement("div");
  const conditions = createElement("h3", response.currentConditions.conditions);
  const humidity = createElement(
    "p",
    `Humidity: ${response.currentConditions.humidity}%`,
  );
  const precipitation = createElement(
    "p",
    `Precipitation: ${response.currentConditions.precip}%`,
  );
  const windSpeed = createElement(
    "p",
    `Wind: ${response.currentConditions.windspeed} mph`,
  );
  conditionsContainer.append(conditions, humidity, precipitation, windSpeed);

  data.append(addressDateContainer, temperatureContainer, conditionsContainer);
  dataContainer.append(city, data);
};

const showError = () => {
  const dataContainer = document.querySelector(".data-container");
  if (dataContainer) dataContainer.remove();

  let error = document.querySelector(".error");
  if (error) error.remove();

  error = createElement("p", "Unable to find location. Please try again");
  error.classList.add("error");
  document.body.append(error);
};

const searchWeather = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  fetchWeather(input.value)
    .then((data) => {
      console.log(data);
      updateScreen(data);
    })
    .catch((error) => {
      console.log(error);
      showError();
    });
};

export default searchWeather;
