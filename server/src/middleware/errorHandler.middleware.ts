import { ApiError } from "../utils/ApiError";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof ApiError)
        return res.status(err.statusCode).send({success: false, message: err.message});
    res.status(500).json({success: false, message: "Inernal Server Error"});
}