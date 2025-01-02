import snowIcon from "../images/snow.svg";
import rainIcon from "../images/rain.svg";
import fogIcon from "../images/fog.svg";
import windIcon from "../images/wind.svg";
import cloudyIcon from "../images/cloudy.svg";
import partlyCloudyDayIcon from "../images/partly-cloudy-day.svg";
import partlyCloudyNightIcon from "../images/partly-cloudy-night.svg";
import clearDayIcon from "../images/clear-day.svg";
import clearNightIcon from "../images/clear-night.svg";

const createElement = (elementType, textContent) => {
  const element = document.createElement(elementType);
  if (textContent !== null) element.textContent = textContent;
  return element;
};

const createImage = (src, alt) => {
  const img = createElement("img");
  img.src = src;
  img.alt = alt;
  return img;
};

const formatAddress = (address) => {
  const index = address.indexOf(",");
  return address.slice(0, index);
};

const convertToCelsius = (fahrenheitTemperature) => {
  let celsiusTemperature = (fahrenheitTemperature - 32) * (5 / 9);
  celsiusTemperature = Math.round(celsiusTemperature * 100) / 100;
  return celsiusTemperature;
};

const setWeatherIcon = (weather) => {
  let img;
  switch (weather) {
    case "snow":
      img = createImage(snowIcon, "Snow icon");
      break;
    case "rain":
      img = createImage(rainIcon, "Rain icon");
      break;
    case "fog":
      img = createImage(fogIcon, "Fog icon");
      break;
    case "wind":
      img = createImage(windIcon, "Wind icon");
      break;
    case "cloudy":
      img = createImage(cloudyIcon, "Cloudy icon");
      break;
    case "partly-cloudy-day":
      img = createImage(partlyCloudyDayIcon, "Partly cloudy day icon");
      break;
    case "partly-cloudy-night":
      img = createImage(partlyCloudyNightIcon, "Partly cloudy night icon");
      break;
    case "clear-day":
      img = createImage(clearDayIcon, "Sun icon");
      break;
    case "clear-night":
      img = createImage(clearNightIcon, "Moon icon");
      break;
    default:
      console.log("Unable to set icon");
  }
  return img;
};

const processResponse = (response) => {
  const result = {
    address: response.resolvedAddress,
    date: response.days[0].datetime,
    temperature: response.currentConditions.temp,
    icon: response.currentConditions.icon,
    conditions: response.currentConditions.conditions,
    humidity: response.currentConditions.humidity,
    precipitation: response.currentConditions.precip,
    windSpeed: response.currentConditions.windspeed,
  };
  return result;
};

export {
  createElement,
  createImage,
  formatAddress,
  convertToCelsius,
  setWeatherIcon,
  processResponse,
};
