import { Request, Response } from "express";
import { ApiResponce } from "../utils/ApiResponce";

export const dashboard = (req: Request, res: Response) => {
    const {email} = (req as any).user;
    res.status(200).json(new ApiResponce(true, `Wellcome to your profile ${email}`))
}