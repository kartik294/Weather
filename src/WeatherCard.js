import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const WeatherCard = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "c841be823ef244ebae123643240203";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError("Error while fetching the data");
      });
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Construct the absolute URL for the icon
  const iconUrl = `http:${weatherData.current.condition.icon}`;

  return (
    <div>
      <h2 className="weather-header">Weather Information for {location}</h2>
      <div className="weather-card">
        <img src={iconUrl} alt="Weather Icon" className="weather-icon" />
        <div className="weather-info">
          <span className="weather-label">Temperature (Celsius):</span>
          <span className="weather-value">{weatherData.current.temp_c} °C</span>
        </div>
        <div className="weather-info">
          <span className="weather-label">Temperature (Fahrenheit):</span>
          <span className="weather-value">{weatherData.current.temp_f} °F</span>
        </div>
        <div className="weather-info">
          <span className="weather-label">Condition:</span>
          <span className="weather-value">
            {weatherData.current.condition.text}
          </span>
        </div>
        <div className="weather-info">
          <span className="weather-label">Wind Speed:</span>
          <span className="weather-value">
            {weatherData.current.wind_kph} km/h
          </span>
        </div>
        <div className="weather-info">
          <span className="weather-label">Humidity:</span>
          <span className="weather-value">{weatherData.current.humidity}%</span>
        </div>
        <div className="weather-info">
          <span className="weather-label">Cloud Coverage:</span>
          <span className="weather-value">{weatherData.current.cloud}%</span>
        </div>
        <div className="weather-info">
          <span className="weather-label">Last Updated:</span>
          <span className="weather-value">
            {weatherData.current.last_updated}
          </span>
        </div>
        {/* Add other weather information here */}
      </div>
    </div>
  );
};

export default WeatherCard;
