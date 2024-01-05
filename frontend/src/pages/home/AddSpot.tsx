import { Popup } from "react-map-gl";

import { Pin } from "../../shared/types";

const AddSpot = ({ long, lat }: Pin) => {
  const label_style: string = "text-orange-500 text-sm max-w-max  mr-3 mb-2";
  return (
    <Popup
      longitude={long}
      latitude={lat}
      anchor="left"
      closeButton={true}
      closeOnClick={false}
    >
      <div>
        <form className="w-[200px] h-[250px] flex flex-col">
          <label className={label_style}>Title</label>
          <input placeholder="Enter the title" className="border-b-4 mb-2" />
          <label className={label_style}>Review</label>
          <textarea
            placeholder="Something about this place"
            rows={5}
            className="border-2 mb-2"
          />
          <label className={label_style}>Rating</label>
          <select className="border-2 mb-4">
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
