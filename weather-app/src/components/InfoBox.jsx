import React from 'react';

const InfoBox = ({ result }) => {
  return (
    <div className="card mt-4 shadow-sm" style={{fontFamily:'arial'}}>
      <div className="card-body text-center">
        <h5 className="card-title">{result.city}</h5>
        <img
          src={`https://openweathermap.org/img/wn/${result.icon}@2x.png`}
          alt={result.weather}
          className="mb-2"
        />
        <h6 className="card-subtitle mb-2 text-muted">{result.weather}</h6>
        <p className="card-text">
          <strong>Temp:</strong> {result.temp}°C<br />
          <strong>Feels Like:</strong> {result.feels_like}°C<br />
          <strong>Humidity:</strong> {result.humidity}%<br />
          <strong>Min:</strong> {result.tempMin}°C &nbsp;
          <strong>Max:</strong> {result.tempMax}°C
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
