import "./AQICard.css";

function AQICard({ data }) {
  const { aqi, city, dominentpol, current, time } = data;

  return (
    <div className="aqi-card">
      <h3 className="city-name">{city.name}</h3>

      <div className="aqi-value">
        <span className="label">AQI</span>
        <span className="value">{aqi}</span>
      </div>

      <p className="dominant">
        Dominant Pollutant: <strong>{dominentpol.toUpperCase()}</strong>
      </p>

      <div className="current-data">
        <p>PM2.5: {current.pm25}</p>
        <p>PM10: {current.pm10}</p>
        <p>CO: {current.co}</p>
        <p>NO₂: {current.no2}</p>
        <p>SO₂: {current.so2}</p>
        <p>O₃: {current.o3}</p>
        <p>Temperature: {current.temp.toFixed(1)}°C</p>
        <p>Humidity: {current.humidity}%</p>
        <p>Wind: {current.wind} m/s</p>
      </div>

      <p className="time">Updated: {time}</p>
    </div>
  );
}

export default AQICard;
