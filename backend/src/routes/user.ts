import { Router } from "express";
import { register, login } from "../controllers/user";
import { Schemas, validationUserRequest } from "../middleware/validation/user";

export const register_router = Router();

register_router.post("/", validationUserRequest(Schemas.data), register);

export const login_router = Router();

login_router.post("/", validationUserRequest(Schemas.data), login);
