import mongoose from "mongoose";
import { UserRequestBody } from "../types/user";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model<UserRequestBody>("Users", UserSchema);

export default userModel;
