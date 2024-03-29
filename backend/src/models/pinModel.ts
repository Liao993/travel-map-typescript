import mongoose from "mongoose";
import { PinRequestBody } from "../types/pin";

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
      min: 3,
      max: 60,
    },
    desc: {
      type: String,
      required: false,
      min: 3,
    },
    rating: {
      type: Number,
      required: false,
      min: 0,
      max: 5,
    },
    long: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const pinModel = mongoose.model<PinRequestBody>("Pins", PinSchema);

export default pinModel;
