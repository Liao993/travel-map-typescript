import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { PinRouter } from "./routes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/pin", PinRouter);

mongoose
  .connect(process.env.MONGO_URL || "")
  .then(() =>
    app.listen(process.env.port, () => {
      console.log(
        `My Application is listening to the port at ${process.env.port} and connect to db`
      );
    })
  )
  .catch((error: any) => {
    console.log(error);
  });
