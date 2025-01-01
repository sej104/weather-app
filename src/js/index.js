const fetchWeather = async (location) => {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5ARRSV5UWBFTPL6GB73CPCH47`;
    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const searchWeather = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  fetchWeather(input.value).then((data) => console.log(data));
};

const form = document.querySelector("form");
form.addEventListener("submit", searchWeather);
