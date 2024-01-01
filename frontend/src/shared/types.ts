import ObjectID from "bson-objectid";

export interface Pin {
  _id: ObjectID;
  title?: string;
  description?: string;
  rating?: number;
  long: number;
  lat: number;
}

export interface PopupBoxProps {
  title?: string;
  description?: string;
  rating?: number;
  long: number;
  lat: number;
}
