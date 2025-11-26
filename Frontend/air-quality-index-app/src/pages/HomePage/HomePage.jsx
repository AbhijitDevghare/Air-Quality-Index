import MainLayout from "../../layout/MainLayout";
import "./HomePage.css";
import AirPollutionImage from "../../assets/air-pollution-illustration-concept-on-white-background-vector.jpg"

function HomePage() {
  return (
    <MainLayout>
      <div className="home-container">
        <h2>Check Air Quality</h2>
        <p className="home-subtitle">
          Search for any city to view its AQI and dominant pollutant.
        </p>

        <div className="home-hero-right">
          <img src={AirPollutionImage} alt="" />
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
