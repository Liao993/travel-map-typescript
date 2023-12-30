import { Request, Response } from "express";
import PinModel from "../models/pinModel";
import { PinRequestBody } from "../types/pin";

export async function getAllPins(req: Request, res: Response) {
  try {
    const Pins = await PinModel.find();
    res.status(200).json(Pins);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      msg: "Internal server error, contact API administrator",
    });
  }
}

export async function createPin(
  req: Request<{}, any, PinRequestBody>,
  res: Response
) {
  const newPin = req.body as PinRequestBody;
  try {
    const savedpin = await PinModel.create(newPin);
    res.status(200).json(savedpin);
  } catch (error) {
    console.log("DataBase Error", error);
    res.status(500).json(error);
  }
}
