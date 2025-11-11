import jwt from "jsonwebtoken";
import { env } from "../utils/env";
import { asyncHandler } from "../utils/asyncHandler";

// const time = String(env.EXPIRE_IN);
export const signToken = (obj: object|string) => {
    return jwt.sign({obj}, `${env.SECRET_KEY}`, {expiresIn: "1h"})
}

export function verifyToken<T = any>(token: string): T {
    return jwt.verify(token, `${env.SECRET_KEY}`) as T;
}