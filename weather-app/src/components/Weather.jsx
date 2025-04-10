import React, { useState } from 'react';
import InfoBox from './InfoBox';

const Weather = () => {
  const [city, setCity] = useState('');
  const [result, setResult] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c8e11d4046f639eb267d0b4b017e85fe";

  const getWeatherInfo = async () => {
    try {
      let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let data = await res.json();

      let result = {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feels_like: data.main.feels_like,
        weather: data.weather[0].description,
        icon: data.weather[0].icon
      };

      setResult(result);
    } catch (err) {
      console.log("Error fetching data:", err);
      setResult(null);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeatherInfo();
    setCity('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-6 col-lg-4 text-center">
          <h2 className="mb-4" style={{fontFamily:'' }}>Weather App</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter city name"
              value={city}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-warning text-white font-bold w-30"><b>Search</b>
            </button>
          </form>

          {/* Only render if we have data */}
          {result && <InfoBox result={result} />}
        </div>
      </div>
    </div>
  );
};

export default Weather;
