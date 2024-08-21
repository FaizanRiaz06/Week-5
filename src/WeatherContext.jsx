import React, { createContext, useState } from 'react';

// Create the Context
export const WeatherContext = createContext();

// Create the Provider component
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = '67ea8dfc34668be6debd288d788223f1'; // Replace with your API key
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeather, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};
