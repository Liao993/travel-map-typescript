import { Popup } from "react-map-gl";

import { Pin } from "../../shared/types";
import { useState } from "react";

import { useAppDispatch } from "../../redux/store";

//import { addNewPin } from "../../redux/pinSlice";
import { addData } from "../../services/JsonServerClient";

const AddSpot = ({ long, lat }: Pin) => {
  const label_style: string = "text-orange-500 text-sm max-w-max  mr-3 mb-2";

  const [title, setTitle] = useState<string>("");
  //const [description, setDescription] = useState<string>("");
  //const [rating, setRating] = useState<number | string>(0);

  const dispatch = useAppDispatch();

  const addNewPinSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newPin = {
      //username: "Henry",
      title: title,
      //rating: Number(rating),
      //description: description,
      lat: lat,
      long: long,
    };
    console.log("new pin", newPin);
    console.log(typeof newPin);
    //console.log("rating type", typeof rating);
    dispatch(addData(newPin));
  };

  return (
    <Popup
      longitude={long}
      latitude={lat}
      anchor="left"
      closeButton={true}
      closeOnClick={false}
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
          />
          <label className={label_style}>Rating</label>
          <select className="border-2 mb-4">
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
