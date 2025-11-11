import { User } from "../models/userSchema.model";
import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponce } from "../utils/ApiResponce";
import { signToken, verifyToken } from "../config/token";
import { ApiError } from "../utils/ApiError";
import bcrypt from "bcrypt";

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const {email, password} = (req as any).user;
  const existingUser = await User.findOne({email});
  if(existingUser) throw new ApiError(400, "Email Already Exists!")
  const newUser = new User({email, password});
  await newUser.save();
  const token = signToken({email});
  res.status(200).json(new ApiResponce(true, "Signup successfully!", token));
})

export const login = asyncHandler(async (req: Request, res: Response) => {
  const {email, password} = (req as any).user;
  const existingUser = await User.findOne({email});
  if(!existingUser) throw new ApiError(400, "Email doesn't appear in database!");
  const ok = await bcrypt.compare(password, existingUser.password);
  if(ok) throw new ApiError(400, "Invalid password!");
  const token = signToken({email});
  res.status(200).json(new ApiResponce(true, "Login successfully", token))
})