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
import { useAppSelector, useAppDispatch } from "../../redux/store";

// data server api
import { getAllpins } from "../../services/PinJsonServerClient";

const Maps = () => {
  const [pin, setPin] = useState<Pin[] | null>();
  const [newLong, setNewLong] = useState<number | null>(null);
  const [newLat, setNewLat] = useState<number | null>(null);

  const [currentPlaceId, setCurrentPlaceId] = useState<string | undefined>();
  const currentUser = "Sindy";
  const sindycolor = "#ED2939";

  //Add Click
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddClick = (e: any) => {
    const long = e.lngLat.lng;
    const lat = e.lngLat.lat;

    setNewLat(lat);
    setNewLong(long);
  };

  const handleMarkerClick = (id: string | undefined): void => {
    setCurrentPlaceId(id);
  };

  // get Data
  const selectedUsers = useAppSelector((state) => state.pin.pins);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllpins());
  }, [dispatch]);

  useEffect(() => {
    setPin(selectedUsers);
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
                  desc={p.desc}
                  createdAt={p.createdAt}
                  rating={p.rating}
                />
              )}
            </div>
          ))}
        {newLong && newLat && <AddSpot long={newLong} lat={newLat} />}
        {/*
        {currentUser && (
          <div className="flex flex-row gap-8 justify-end items-center">
            <span className="text-xl mx-2 py-2">Welcome {currentUser} !</span>
            <button className="mr-3">Log Out</button>
          </div>
        )}
        {!currentUser && (
          <div className="flex flex-row gap-8 justify-end items-center py-2 mr-5">
            <button className="p-2">Register</button>
            <button>Log In</button>
          </div>
        )}
        */}
      </Map>
    </div>
  );
};

export default Maps;
