export interface Pin {
  _id?: string;
  username?: string;
  title?: string;
  desc?: string;
  rating?: number;
  long: number;
  lat: number;
  createdAt?: Date;
}

export interface User {
  _id?: string;
  username?: string;
  email?: string;
  password?: string;
}

export interface PopupBoxProps {
  username?: string;
  title?: string;
  desc?: string;
  rating?: number;
  long: number;
  lat: number;
  createdAt?: Date;
}
