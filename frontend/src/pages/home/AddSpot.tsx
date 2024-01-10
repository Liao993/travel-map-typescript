import { Popup } from "react-map-gl";

import { useState } from "react";

import { useAppDispatch } from "../../redux/store";

//import { addNewPin } from "../../redux/pinSlice";
import { addData } from "../../services/JsonServerClient";

interface AddSpotProps {
  long: number;
  lat: number;
}

const AddSpot = ({ long, lat }: AddSpotProps) => {
  const label_style: string = "text-orange-500 text-sm max-w-max  mr-3 mb-2";

  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [rating, setRating] = useState<number | string>(0);

  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addNewPinSubmit = (e: any) => {
    e.preventDefault();
    const newPin = {
      username: "Sindy",
      title: title,
      rating: Number(rating),
      desc: desc,
      lat: lat,
      long: long,
    };

    dispatch(addData(newPin));
  };

  return (
    <Popup
      longitude={long}
      latitude={lat}
      anchor="left"
      closeButton={true}
      closeOnClick={true}
    >
      <div>
        <form
          className="w-[200px] h-[250px] flex flex-col"
          onSubmit={addNewPinSubmit}
        >
          <label className={label_style}>Title</label>
          <input
            placeholder="Enter the title"
            className="border-b-4 mb-2"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className={label_style}>Review</label>
          <textarea
            placeholder="Something about this place"
            rows={5}
            className="border-2 mb-2"
            onChange={(e) => setDesc(e.target.value)}
          />
          <label className={label_style}>Rating</label>
          <select
            className="border-2 mb-4"
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button className="py-2 bg-orange-200 w-[100px] mx-auto rounded-md">
            Add new Pin
          </button>
        </form>
      </div>
    </Popup>
  );
};

export default AddSpot;
