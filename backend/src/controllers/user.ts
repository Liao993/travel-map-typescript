import { Request, Response } from "express";
import bcrypt from "bcrypt";
import UserModel from "../models/userModel";
import { UserRequestBody } from "../types/user";

//register
export async function register(
  req: Request<{}, any, UserRequestBody>,
  res: Response
) {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });

    //save user to database and send response
    const saveduser = await UserModel.create(newUser);
    res.status(200).json(saveduser);
  } catch (error: any) {
    console.log("DataBase Error", error);
    res.status(500).json(error);
  }
}

//login
export async function login(
  req: Request<{}, any, UserRequestBody>,
  res: Response
) {
  try {
    // find the user
    const user = await UserModel.findOne({ username: req.body.username });

    //user exists and validate password.
    if (user) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (validPassword) {
        console.log("Log in Successfully");
        res.status(200).json({ _id: user._id, username: user.username });
      } else {
        res.status(400).json("Wrong password");
      }
      // user not existed
    } else {
      res.status(400).json("Wrong username");
    }
  } catch (error: any) {
    console.log("Database Error", error);
    res.status(500).json(error);
  }
}
