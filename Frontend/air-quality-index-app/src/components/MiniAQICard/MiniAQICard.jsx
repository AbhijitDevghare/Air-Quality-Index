import "./MiniAQICard.css";

function MiniAQICard({ data, onClick }) {
  return (
    <div className="mini-card" onClick={onClick}>
      <h4>{data.city.name}</h4>

      <div className="mini-aqi">
        <span>AQI: </span>
        <strong>{data.aqi}</strong>
      </div>

      <p className="pollutant">
        Main: {data.dominentpol.toUpperCase()}
      </p>

      <button className="view-btn">View</button>
    </div>
  );
}

export default MiniAQICard;
