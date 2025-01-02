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
      img = createImage("./images/snow.svg", "Snow icon");
      break;
    case "rain":
      img = createImage("./images/rain.svg", "Rain icon");
      break;
    case "fog":
      img = createImage("./images/fog.svg", "Fog icon");
      break;
    case "wind":
      img = createImage("./images/wind.svg", "Wind icon");
      break;
    case "cloudy":
      img = createImage("./images/cloudy.svg", "Cloudy icon");
      break;
    case "partly-cloudy-day":
      img = createImage(
        "./images/partly-cloudy-day.svg",
        "Partly cloudy day icon",
      );
      break;
    case "partly-cloudy-night":
      img = createImage(
        "./images/partly-cloudy-night.svg",
        "Partly cloudy night icon",
      );
      break;
    case "clear-day":
      img = createImage("./images/clear-day.svg", "Sun icon");
      break;
    case "clear-night":
      img = createImage("./images/clear-night.svg", "Moon icon");
      break;
    default:
      console.log("Unable to set icon");
  }
  return img;
};

export {
  createElement,
  createImage,
  formatAddress,
  convertToCelsius,
  setWeatherIcon,
};
