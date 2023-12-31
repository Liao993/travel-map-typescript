import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PopupBox from "./PopupBox";

type Props = {};

const Maps = (props: Props) => {
  return (
    <div>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        initialViewState={{
          longitude: 121,
          latitude: 23.5,
          zoom: 10,
        }}
        style={{ width: 100, height: 100 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={121} latitude={23.5} anchor="bottom" color="red" />
        <PopupBox />
      </Map>
    </div>
  );
};

export default Maps;
