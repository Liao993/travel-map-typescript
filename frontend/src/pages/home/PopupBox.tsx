import { BsFillStarFill } from "react-icons/bs";
import TimeAgo from "react-timeago";
import { Popup } from "react-map-gl";

import { Pin } from "../../shared/types";

const PopupBox = ({
  desc,
  createdAt,
  username,
  long,
  lat,
  title,
  rating,
}: Pin) => {
  const label_style: string = "text-orange-500 text-sm max-w-max  mr-3";
  return (
    <Popup
      longitude={long}
      latitude={lat}
      anchor="left"
      closeButton={true}
      closeOnClick={false}
    >
      <div className="w-[200px] h-[250px] flex flex-col">
        <div className="flex flex-row mb-4 align-bottom">
          <span className={label_style}>Place:</span>
          <span className="text-md font-bold">{title}</span>
        </div>
        <div className="flex flex-row mb-4">
          <label className={label_style}>Rating</label>
          <div className="flex flex-row">
            {Array(rating).fill(<BsFillStarFill style={{ color: "orange" }} />)}
          </div>
        </div>
        <div className="flex flex-col">
          <label className={label_style}>Review</label>
          <p className="text-md my-2">{desc}</p>
        </div>
        <div className="flex flex-col">
          <label className={label_style}>Information</label>
          <span className="mt-2">
            Created by : <b className="ml-1"> {username}</b>
          </span>
          <span>
            <TimeAgo date={createdAt} />
          </span>
        </div>
      </div>
    </Popup>
  );
};

export default PopupBox;
