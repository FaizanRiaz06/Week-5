import React from 'react';
import { WeatherProvider } from './WeatherContext';
import WeatherSearch from './WeatherSearch';
import WeatherDisplay from './WeatherDisplay';

function App() {
  return (
    <WeatherProvider>
      <div className="App">
        <h1>Weather App</h1>
        <WeatherSearch />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  );
}

export default App;
