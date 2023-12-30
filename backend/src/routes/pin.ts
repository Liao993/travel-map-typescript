import { Request, Response, Router } from "express";
import { getAllPins, createPin } from "../controllers/pin";
import { Schemas, validationPinRequest } from "../middleware/validation/pin";

export const router = Router();

router.get("/", getAllPins);

router.post("/", validationPinRequest(Schemas.data), createPin);
