import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import useFetch from "../../hooks/useFetch";
//import { Pin } from "../../shared/types";

//import ObjectId from "bson-objectid";
import PopupBox from "./PopupBox";

const Maps = () => {
  const { data } = useFetch();
  console.log(data);
  /*
  const generateObjectId = (): ObjectId => new ObjectId();
 
  const jsonData: Pin[] = [
    {
      _id: generateObjectId(),
      long: -63.1389,
      lat: 46.2569,
      title: "University of Prince Edward Island",
    },
    {
      _id: generateObjectId(),
      long: -63.0738,
      lat: 46.2169,
      title: "Charlottetown Library",
    },
    {
      _id: generateObjectId(),
      long: -63.129166,
      lat: 46.238888,
      title: "Stratford Gym",
    },
    {
      _id: generateObjectId(),
      long: -62.6519,
      lat: 46.1693,
      title: "Three Rivers Town Hall",
    },
    {
      _id: generateObjectId(),
      long: -63.19778,
      lat: 46.41756,
      title: "The Dunes Studio Gallery & Cafe",
    },
    {
      _id: generateObjectId(),
      long: -62.70269,
      lat: 46.4443,
      title: "Greenwich, Prince Edward Island National Park",
    },
  ];
*/
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
        {data &&
          data.map((p) => (
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
