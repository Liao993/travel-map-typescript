import { Request, Response, NextFunction } from "express";
import { PinRequestBody } from "../../types/pin";
import joi, { ObjectSchema } from "joi";
import Joi from "joi";

export function validationPinRequest(schema: ObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error: any) {
      console.log("Validation Error :", error.message);

      return res.status(422).json({ error: error.message });
    }
  };
}

export const Schemas = {
  data: Joi.object<PinRequestBody>({
    username: Joi.string().alphanum().min(3).max(15).required(),
    title: Joi.string(),
    desc: Joi.string(),
    rating: Joi.number().integer().min(0).max(5).required(),
    lat: Joi.number().required(),
    long: Joi.number().required(),
  }),
};