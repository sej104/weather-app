import searchWeather from "./screenController.js";
import "../styles.css";

const form = document.querySelector("form");
form.addEventListener("submit", searchWeather);
