import { Request, Response, NextFunction } from "express";
import { UserRequestBody } from "../../types/user";
import { ObjectSchema } from "joi";
import Joi from "joi";

export function validationUserRequest(schema: ObjectSchema) {
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
  data: Joi.object<UserRequestBody>({
    username: Joi.string().alphanum().min(3).max(20),
    email: Joi.string().required().max(50),
    password: Joi.string().required().min(6),
  }),
};
