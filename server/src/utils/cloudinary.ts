import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { env } from "./env";

cloudinary.config({
    cloud_name: env.CLODINARY_NAME,
    api_key: env.CLODINARY_API_KEY,
    api_secret: env.CLODINARY_SECRETE_KEY,
})

export const uploadOnCloudinary = async (localFilePath: any, folder = "chai-backend") => {
  if (!localFilePath) return null;
  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder,
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    return result;
  } catch (err) {
    try { fs.unlinkSync(localFilePath); } catch {}
    throw err;
  }
};