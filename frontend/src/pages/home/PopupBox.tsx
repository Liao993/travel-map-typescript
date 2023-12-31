import { BsFillStarFill } from "react-icons/bs";
import { Popup } from "react-map-gl";

type Props = {};

const PopupBox = (props: Props) => {
  const label_style = "text-orange-500 text-sm max-w-max  mr-3";
  return (
    <div>
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
    </div>
  );
};

export default PopupBox;
