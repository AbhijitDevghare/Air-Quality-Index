import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./MainLayout.css";
import { getCityAQI, clearCity } from "../redux/slices/AQISlice";
import AQICard from "../components/AQICard/AQICard";

function MainLayout({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const cityAqi = useSelector((state) => state.aqi.City);

  useEffect(() => {
    if (searchValue.trim().length === 0) {
      dispatch(clearCity());
      return;
    }

    dispatch(getCityAQI(searchValue));
  }, [searchValue, dispatch]);

  return (
    <>
      <div id="mainlayoutDiv">
        <nav id="navigation">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"/about"}>
            <p>About</p>
          </Link>
        </nav>

        <div>
          <SearchBar updateSearch={setSearchValue} />
        </div>

        {searchValue.trim().length > 0 && cityAqi?.aqi && (
          <div id="layout-card">
            <AQICard data={cityAqi} />
          </div>
        )}
      </div>

      {searchValue.trim().length === 0 && (
        <div className="main-content">{children}</div>
      )}
    </>
  );
}

export default MainLayout;
