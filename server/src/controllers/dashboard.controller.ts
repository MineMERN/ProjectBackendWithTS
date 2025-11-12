import { Request, Response } from "express";
import { ApiResponce } from "../utils/ApiResponce";
import { asyncHandler } from "../utils/asyncHandler";
import { Profile } from "../models/profileSchema.model";
import { uploadOnCloudinary } from "../utils/cloudinary";

export const dashboard = (req: Request, res: Response) => {
    const {email} = (req as any).user;
    res.status(200).json(new ApiResponce(true, `Wellcome to your profile ${email}`))
}
export const createProfile = asyncHandler (async (req: Request, res: Response) => {
    const {username, discription} = req.body;
    if(!req.file?.path){
        return res.status(400).json({success: false, message : "No file provided"})
    }
    const uploaded = await uploadOnCloudinary(req.file.path, "chai-backend")
    // console.log(uploaded?.secure_url)
    const imageUrl = uploaded?.secure_url;
    const newProfile = await Profile.create({username, discription, imageUrl});
    await newProfile.save();
    res.status(200).json(new ApiResponce(true, "Profile created successfully", newProfile))
//     {
//       url: uploaded?.secure_url,
//       public_id: uploaded.public_id,
//       resource_type: uploaded.resource_type,
//       bytes: uploaded.bytes,
//       width: uploaded.width,
//       height: uploaded.height,
//       format: uploaded.format,
// }
})