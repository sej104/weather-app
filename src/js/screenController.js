import {
  createElement,
  createImage,
  formatAddress,
  convertToCelsius,
  setWeatherIcon,
  processResponse,
} from "./utility.js";
import fetchWeather from "./apiController.js";
import locationIcon from "../images/location.svg";
import calendarIcon from "../images/calendar.svg";

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

  const city = createElement("h1", formatAddress(response.address));
  const data = createElement("div");
  data.classList.add("data");

  const addressDateContainer = createElement("div");
  const address = createElement("p");
  address.append(
    createImage(locationIcon, "Location Icon"),
    document.createTextNode(response.address),
  );
  const date = createElement("p");
  date.append(
    createImage(calendarIcon, "Calendar Icon"),
    document.createTextNode(response.date),
  );
  addressDateContainer.append(address, date);

  const temperatureContainer = createElement("div");
  const temperature = createElement(
    "h2",
    `${convertToCelsius(response.temperature)} °C | ${response.temperature} °F`,
  );
  const weatherIcon = setWeatherIcon(response.icon);
  temperatureContainer.append(temperature, weatherIcon);

  const conditionsContainer = createElement("div");
  const conditions = createElement("h3", response.conditions);
  const humidity = createElement("p", `Humidity: ${response.humidity}%`);
  const precipitation = createElement(
    "p",
    `Precipitation: ${response.precipitation}%`,
  );
  const windSpeed = createElement("p", `Wind: ${response.windSpeed} mph`);
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
  if (input.value.length === 0) return;
  fetchWeather(input.value)
    .then((data) => {
      console.log(data);
      updateScreen(processResponse(data));
    })
    .catch((error) => {
      console.log(error);
      showError();
    });
};

export default searchWeather;
