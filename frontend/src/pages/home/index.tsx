import Map, { Marker } from "react-map-gl";
//import { BsFillStarFill } from "react-icons/bs";

import "mapbox-gl/dist/mapbox-gl.css";

const Home = () => {
  //const label_style = "text-orange-500 text-sm max-w-max  mr-3";
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      initialViewState={{
        longitude: 121,
        latitude: 23.5,
        zoom: 10,
      }}
      style={{ width: 2000, height: 2000 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={121} latitude={23.5} anchor="bottom" color="red" />
      {/* 
      <Popup longitude={121} latitude={23.5} anchor="left" closeButton={false}>
        <div className="w-[200px] h-[250px] flex flex-col">
          <div className="flex flex-row mb-4 align-bottom">
            <span className={label_style}>Place:</span>
            <span className="text-md font-bold">Taiwan Mountain</span>
          </div>
          <div className="flex flex-row mb-4">
            <label className={label_style}>Rating</label>
            <div className="flex flex-row">
              <BsFillStarFill style={{ color: "orange", size: "lg" }} />
              <BsFillStarFill style={{ color: "orange" }} />
              <BsFillStarFill style={{ color: "orange" }} />
              <BsFillStarFill style={{ color: "orange" }} />
              <BsFillStarFill style={{ color: "orange" }} />
            </div>
          </div>
          <div className="flex flex-row mb-4">
            <label className={label_style}>Review</label>
            <p className="text-md">I like the place, it is really adorable</p>
          </div>
          <div>
            <label className={label_style}>Information</label>
          </div>
        </div>
      </Popup>
      */}
    </Map>
  );
};

export default Home;
