import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const WeatherDisplay = () => {
  const { weatherData, loading, error } = useContext(WeatherContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    weatherData && (
      <div>
        <h2>{weatherData.name}</h2>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
      </div>
    )
  );
};

export default WeatherDisplay;
