import ObjectId from "bson-objectid";

export interface Pin {
  _id: ObjectId;
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
