import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { Pin } from "../../shared/types";

import PopupBox from "./PopupBox";
import { userSelector } from "../../redux/pinSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { useEffect, useState } from "react";
import { getAllpins } from "../../services/JsonServerClient";

const Maps = () => {
  const [pin, setPin] = useState<Pin[]>();
  //const { mypin } = useAppSelector(userSelector);
  //console.log(mypin);
  const selectedUsers = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  //get data from state
  useEffect(() => {
    // Fetch data only once when the component mounts
    dispatch(getAllpins());
  }, [dispatch]);

  useEffect(() => {
    setPin(selectedUsers.pin);
  }, [selectedUsers]);

  return (
    <div>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        initialViewState={{
          longitude: -63,
          latitude: 46,
          zoom: 10,
        }}
        style={{ width: 1000, height: 1000 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {pin &&
          pin.map((p) => (
            <div key={p._id}>
              <Marker
                longitude={p.long}
                latitude={p.lat}
                anchor="bottom"
                color="red"
              ></Marker>
              <PopupBox long={p.long} lat={p.lat} title={p.title} />
            </div>
          ))}
      </Map>
    </div>
  );
};

export default Maps;
