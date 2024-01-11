import { Link } from "react-router-dom";
//import Map from "react-map-gl";

const Home = () => {
  return (
    <div>
      <div className="flex flex-row gap-8">
        <Link className="text-green-700" to="/register">
          Register
        </Link>
        <Link className="text-red-700" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;

/**
  <div style={{ height: "100vh", width: "100vw" }}>
        <Map
          mapboxAccessToken={process.env.REACT_APP_MAPBOX}
          initialViewState={{
            longitude: -63,
            latitude: 46,
            zoom: 8,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
 */
