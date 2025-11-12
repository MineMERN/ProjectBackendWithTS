import { signupSchema, loginSchema, profileSchema } from "../validators/auth.validator";
import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { verifyToken } from "../config/token";
import jwt from "jsonwebtoken";
import { env } from "../utils/env";

export const signupAuth = (req: Request, res: Response, next: NextFunction) => {
  const parse = signupSchema.safeParse(req.body);
  if (!parse.success) {
    res.status(400).json(parse.error.format());
  }
  (req as any).user = parse.data;
  next();
//   res.status(200).json(data);
};

export const loginAuth = (req: Request, res: Response, next: NextFunction) => {
    const parse = loginSchema.safeParse(req.body);
    if(!parse.success){
        res.status(400).json({error: parse.error.format()});
    }
    (req as any).user = parse.data;
    next();
    // res.status(200).json({parse.data})
}

export const auth = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;
    if(!header || header?.startsWith("Bearer ")){
        throw new ApiError(500, "Token is missing! Login or Signup again!");
    }
    const token = header.split(" ")[1];
    const decode = await verifyToken(token);
    if(!decode) throw new ApiError(500, "Token as expire! Login or signup again!");
    (req as any).user = jwt.decode(token)
    next();
});

export const profile = asyncHandler((req: Request, res: Response, next: NextFunction) => {
  const parse = profileSchema.safeParse(req.body);
  if(!parse.success){
    res.status(400).json({error : parse.error.format()})
  }
  // (req as any).user = parse.data;
  next();
})