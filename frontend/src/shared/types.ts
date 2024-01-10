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

export interface PopupBoxProps {
  username?: string;
  title?: string;
  desc?: string;
  rating?: number;
  long: number;
  lat: number;
  createdAt?: Date;
}
