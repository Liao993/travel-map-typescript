// react library
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { FaCanadianMapleLeaf } from "react-icons/fa";
import { useEffect, useState } from "react";

// types
import { Pin } from "../../shared/types";

// other components
import PopupBox from "./PopupBox";
import AddSpot from "./AddSpot";
import { userSelector } from "../../redux/pinSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";

// data server api
import { getAllpins } from "../../services/JsonServerClient";

const Maps = () => {
  const [pin, setPin] = useState<Pin[] | null>();
  const [newLong, setNewLong] = useState<number | null>();
  const [newLat, setNewLat] = useState<number | null>();

  const [currentPlaceId, setCurrentPlaceId] = useState<string | undefined>();
  const currentUser = "Sindy";
  const sindycolor = "#ED2939";

  //Add Click
  const handleAddClick = (e): void => {
    console.log(e);
    const long = e.lngLat.lng;
    const lat = e.lngLat.lat;
    console.log("long", long);
    console.log("lat", lat);
    setNewLat(lat);
    setNewLong(long);
  };

  const handleMarkerClick = (id: string | undefined): void => {
    setCurrentPlaceId(id);
  };

  // get Data
  const selectedUsers = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllpins());
  }, [dispatch]);

  useEffect(() => {
    setPin(selectedUsers.pin);
  }, [selectedUsers]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        initialViewState={{
          longitude: -63,
          latitude: 46,
          zoom: 8,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onDblClick={handleAddClick}
      >
        {pin &&
          pin.map((p) => (
            <div key={p._id}>
              <Marker longitude={p.long} latitude={p.lat} anchor="bottom">
                <FaCanadianMapleLeaf
                  size={25}
                  style={{
                    color: p.username === currentUser ? sindycolor : "Orange",
                    cursor: "pointer",
                  }}
                  onClick={() => handleMarkerClick(p._id)}
                />
              </Marker>

              {p._id === currentPlaceId && (
                <PopupBox
                  long={p.long}
                  lat={p.lat}
                  title={p.title}
                  username={p.username}
                  createdAt={p.createdAt}
                />
              )}
            </div>
          ))}
        {newLong && newLat && <AddSpot long={newLong} lat={newLat} />}
      </Map>
    </div>
  );
};

export default Maps;
