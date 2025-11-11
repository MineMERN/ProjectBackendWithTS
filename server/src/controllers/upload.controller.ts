import multer from "multer";
import fs from "fs";
import path from "path";
import { Request, Response } from "express";

const uploadPath = path.join(process.cwd(), "public")
if(fs.existsSync(uploadPath)){
    fs.mkdirSync(uploadPath, {recursive: true})
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${Date.now()}${ext}`)
    }
})

export const upload = multer({storage});

export const localUpload = (req: Request, res: Response) => {
    try {
        if(!req.file) {
            res.status(400).json({message: "file has been not provided!"})
        }
        res.status(200).json({
            success: true,
            message: "File uploaded successfully",
            file: {
                filename: req.file?.filename,
                path: req.file?.path,
                mimetype: req.file?.mimetype,
                size: req.file?.size
            }
        })
    } catch (error: any) {
        res.status(500).json({success: false, message: error.message})
    }
}