const fetchWeather = async (location) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?key=5ARRSV5UWBFTPL6GB73CPCH47&include=current`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  return data;
};

export default fetchWeather;
