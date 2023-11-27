import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowWeather = ({ country }) => {
  const [weather, setWeather] = useState([]);
  const api_key = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
  const urlOsoite = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`;

  useEffect(() => {
    axios
      .get(urlOsoite)
      .then(resp => {setWeather(resp.data);})
  }, [country.capital, api_key]);

  return (
    <div>
      {weather.weather && weather.weather.length > 0 ? (
        <div>
          <h1>Weather in {country.capital}</h1>
          <p>temperature {weather.main.temp} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
          />
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

const ShowInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>

      <p>capital {country.capital}</p>
      <p>area {country.area}</p>

      <h2>languages:</h2>
      <ul>

        {Object.values(country.languages).map(value => 
        <li key={value}>{value}</li>)
        }

      </ul>

      <img src={country.flags.png} alt={country.flags.alt} />
      <ShowWeather country={country} />
    </div>
  );
};

const ShowResults = ({ countries, selectionHandler }) => {
  return (
    <ul>
      {countries.map(country => (
        <li key={country.cca2}>

          {country.name.common} <button onClick={() =>
            selectionHandler(country)
          }>show</button>
        </li>

      ))}
    </ul>
  );
};
export { ShowInfo, ShowResults, ShowWeather };
