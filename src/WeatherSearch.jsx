import React, { useState, useContext } from 'react';
import { WeatherContext } from './WeatherContext';

const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default WeatherSearch;
